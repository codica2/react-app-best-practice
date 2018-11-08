import React from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import SubHeaderLink from "./SubHeaderLink";

export default ({ className, url, onClick, children, label, disabled }) => (
  <NavLink
    exact
    className={cx("button", { disabled })}
    to={url}
    onClick={onClick}
  >
    <SubHeaderLink
      disabled={disabled}
      className={className}
      content={children}
    />
    <span>{label}</span>
  </NavLink>
);
