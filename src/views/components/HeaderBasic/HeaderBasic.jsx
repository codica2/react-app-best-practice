import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import StyledHeaderBasic from "@styled/Header";
import StyledDropdown from "./StyledDropdown";

import {
  IMAGE_PORT,
  BLANK_AVATAR,
  S_CORE,
  S_REDGUY
} from "@utilities/constants";

import { userOperations } from "@ducks/user";

const HeaderBasic = ({
  user: { first_name, last_name, avatar, role },
  passive,
  logout
}) => {
  return (
    <StyledHeaderBasic>
      <div className="nav-logo bordered">
        <a className="logo" href="/">
          <img src="/images/logo.png" alt="" />
        </a>
      </div>
      <div className="nav-links">
        {!passive && (
          <Fragment>
            {(role === S_CORE || role === S_REDGUY) && (
              <NavLink className="nav-link" to="/dashboard/search">
                <i className="fas fa-search" />
                Network
              </NavLink>
            )}
            <NavLink className="nav-link" to="/dashboard/teams">
              <i className="fas fa-users" />
              My Teams
            </NavLink>
            <NavLink className="nav-link" exact to="/dashboard/">
              <i className="fas fa-columns" />
              Dashboard
            </NavLink>
          </Fragment>
        )}
      </div>
      <div className="nav-profile">
        <img
          src={avatar && avatar.url ? IMAGE_PORT + avatar.url : BLANK_AVATAR}
          alt={first_name + " " + last_name}
          className="user-avatar"
        />
        <p className="user-name">
          Hello, <br />
          {first_name || <span>&nbsp;</span>}
        </p>
        <StyledDropdown
          on="click"
          className="nav-profile-dropdown"
          trigger={<i className="fas fa-chevron-down dropdown-trigger" />}
          basic
          hideOnScroll
        >
          <div className="inner-wrapper">
            <NavLink className="nav-link" to="/dashboard/about">
              <i className="fas fa-user" />
              Profile
            </NavLink>
            <NavLink className="nav-link" to="/change_password">
              <i className="fas fa-cog" />
              Settings
            </NavLink>
            <NavLink className="nav-link" onClick={logout} to="#">
              <i className="fas fa-sign-out-alt" />
              Log out
            </NavLink>
          </div>
        </StyledDropdown>
      </div>
    </StyledHeaderBasic>
  );
};

HeaderBasic.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string
    })
  }).isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {
    logout: userOperations.logout
  }
)(HeaderBasic);
