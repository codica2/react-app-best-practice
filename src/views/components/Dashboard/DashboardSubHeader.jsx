import React from "react";

import SubHeaderLink from "@UI/SubHeaderLink";

import StyledSubHeader from "@styled/SubHeader";
import StyledSubHeaderLink from "@styled/SubHeaderLink";
import { S_REDGUY, CLIENT } from "../../../utilities";
import Lazyload from "@views/utils/hoc/Lazyload";

const renderTrigger = (
  <a className="button add-epic">
    <StyledSubHeaderLink className="right-link addButton modalTrigger" />
    <span>Add epic</span>
  </a>
);

const AddTaskModal = Lazyload(
  () => import("@UI/modals/AddTask"),
  () => renderTrigger
);

const DashboardSubHeader = ({ userRole }) => (
  <StyledSubHeader projects sidebarCondition dashboardSubHeader>
    <div className="left">
      <SubHeaderLink label="Dashboard" url="/dashboard/" className="dashboard">
        <i className="fa fa-columns" />
      </SubHeaderLink>
    </div>

    <div className="right">
      {userRole === S_REDGUY && (
        <AddTaskModal
          content="Add epic"
          className="dahsboard"
          trigger={renderTrigger}
        />
      )}

      {userRole === CLIENT && (
        <SubHeaderLink
          url="/dashboard/project/new"
          label="Add project"
          className="right-link dahsboard addButton"
        />
      )}
    </div>
  </StyledSubHeader>
);

export default DashboardSubHeader;
