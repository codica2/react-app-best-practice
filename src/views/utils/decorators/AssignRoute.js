import React from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { PORT } from "@utilities";

const checkAuth = () => {
  const token = localStorage.getItem("jwt_token");
  if (!token) return false;

  return true;
};

const handleRequset = (props, path) => {
  return axios({
    method: "PUT",
    url: PORT + props.match.url
  })
    .then(res => {
      return true;
    })
    .catch(error => {
      const {
        response: { data }
      } = error;

      if (data) {
        props.history.push({
          pathname: path,
          state: data
        });
      }

      console.error(error);
      return false;
    });
};

export default function AssignRoute({ assignPath, ...rest }) {
  let path = assignPath,
    result = null;

  return (
    <Route
      {...rest}
      render={props => {
        const { state } = props.location;

        if (props.match.params) {
          let params = { ...props.match.params };

          for (let element in params) {
            if (path.indexOf(element) !== -1) {
              path = path.replace(`:${element}`, params[element]);
            }
          }
        }

        if (!checkAuth()) {
          return (
            <Redirect
              to={{
                pathname: "/sign_in",
                state: { from: props.location }
              }}
            />
          );
        } else {
          if (!state) {
            result = handleRequset(props, path);
          }

          result &&
            result.then(res => {
              if (res && checkAuth()) {
                props.history.push(path);
              }
            });

          if (state && state.from.pathname === "/sign_in") {
            return <Redirect to={path} />;
          }
          return null;
        }
      }}
    />
  );
}
