import React, { Component } from "react";

import SubHeaderLinkWrap from "@UI/SubHeaderLink";
import StyledSubHeader from "@styled/SubHeader";

class AboutSubHeader extends Component {
  render() {
    return (
      <StyledSubHeader profile="true" about="true" sidebarCondition>
        <div className="left">
          <SubHeaderLinkWrap
            label="Profile"
            url="/dashboard/about"
            className="profileLink"
          >
            <i className="fas fa-user" />
          </SubHeaderLinkWrap>
        </div>
      </StyledSubHeader>
    );
  }
}

export default AboutSubHeader;
