import React from "react";
import { NavLink } from "react-router-dom";

import StyledSubHeader from "@styled/SubHeader";
import StyledBreadcrumb from "@styled/Breadcrumb";

const ProjectSubHeader = () => (
  <StyledSubHeader sidebarCondition disabled={false}>
    <div className="left moduleSubHeader">
      <StyledBreadcrumb className="moduleBreadcrumb">
        <NavLink exact to="/dashboard/">
          Dashboard
        </NavLink>
      </StyledBreadcrumb>
      <StyledBreadcrumb className="moduleBreadcrumb">
        <NavLink exact to={`/dashboard/project/new`}>
          Create project
        </NavLink>
      </StyledBreadcrumb>
    </div>
  </StyledSubHeader>
);

export default ProjectSubHeader;
