import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import ProgressBars from "@UI/ProgressBar";
import StyledSubHeader from "@styled/SubHeader";
import { getAllUrlParams } from "@views/utils/functions";
import SubHeaderLink from "@UI/SubHeaderLink";
import StyledSubHeaderLink from "@styled/SubHeaderLink";

import { S_PASSIVE } from "@utilities";

const completeLater = ["/profile/company", "/profile/billings"];

const SubHeader = ({ percents, routes, userRole, location: { pathname } }) => {
  const isEditing = !!getAllUrlParams().edit;
  const lastProfileStep = localStorage.getItem("lastProfileStep");

  return (
    <StyledSubHeader profileForm="true">
      <div className="progressBarsLink">
        {routes.map(({ path, label, name }, key) => (
          <SubHeaderLink
            key={name}
            url={`${path}${isEditing ? "?edit" : ""}`}
            label={label}
            noExact
            disabled={!isEditing && lastProfileStep < key}
          >
            {key + 1}
            <ProgressBars percents={percents[name]} />
          </SubHeaderLink>
        ))}
      </div>
      <div>
        {!isEditing && completeLater.some(item => item === pathname) && (
          <NavLink
            exact
            className="button"
            to={userRole === S_PASSIVE ? "/dashboard/about" : "/dashboard/"}
          >
            <StyledSubHeaderLink className="right-link arrow" />
            Complete Later
            <span />
          </NavLink>
        )}
      </div>
    </StyledSubHeader>
  );
};

SubHeader.propTypes = {
  userRole: PropTypes.string.isRequired,
  percents: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(SubHeader);
