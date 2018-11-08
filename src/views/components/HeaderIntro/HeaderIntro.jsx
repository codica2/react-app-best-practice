import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import StyledHeaderBasic from "@styled/Header.js";

class Header extends Component {
  render() {
    return (
      <StyledHeaderBasic className="sign-in">
        <div className="nav-logo">
          <a className="logo" href="/">
            <img src="/images/logo.png" alt="" />
          </a>
        </div>
        <div className="nav-links sign-links">
          <NavLink className="nav-link" to="/sign_in">
            Sign In
          </NavLink>
          <NavLink className="nav-link" to="/join">
            Join
          </NavLink>
        </div>
      </StyledHeaderBasic>
    );
  }
}

export default Header;
