import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const DefaultRoute = ({
  isAuthentificated,
  isLogged,
  history: { location }
}) => {
  let path = "/join";
  if (isAuthentificated) {
    if (isLogged) {
      if (location.state) path = { ...location.state.from };
      else path = "/dashboard";
    } else path = "/profile/info";
  }
  return <Redirect to={path} />;
};

const mapStateToProps = state => {
  return {
    isAuthentificated: !!state.user.token,
    isLogged: !!state.user.status
  };
};

export default connect(mapStateToProps)(DefaultRoute);
