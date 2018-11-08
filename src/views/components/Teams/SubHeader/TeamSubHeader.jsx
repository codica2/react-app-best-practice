import React from "react";
import SubHeaderLink from "@UI/SubHeaderLink";
import AddTeamModal from "../AddTeamModal";
import StyledSubHeader from "@styled/SubHeader";

const TeamSubHeader = () => (
  <StyledSubHeader sidebarCondition>
    <div className="left">
      <SubHeaderLink
        label="Teams"
        url="/dashboard/teams"
        className="boldLink teamLink"
      >
        <i className="fas fa-users" />
      </SubHeaderLink>
    </div>

    <div className="right">
      <AddTeamModal />
    </div>
  </StyledSubHeader>
);

export default TeamSubHeader;
