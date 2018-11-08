import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({
  component: Component,
  isAuthentificated,
  location: { state },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthentificated ? (
        <Redirect
          to={{
            pathname: "/",
            state
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    isAuthentificated: !!state.user.token
  };
};

export default connect(mapStateToProps)(GuestRoute);
