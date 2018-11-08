import React from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";

export default function RedirectRoute({ to, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ history, match }) => {
        history.push({
          pathname: to,
          state: {
            ...match.params
          }
        });

        return null;
      }}
    />
  );
}

RedirectRoute.propTypes = {
  to: PropTypes.string.isRequired
};
