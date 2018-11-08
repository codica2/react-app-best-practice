import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthentificated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthentificated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/sign_in",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    isAuthentificated: !!state.user.token
  };
};

export default connect(mapStateToProps)(PrivateRoute);
