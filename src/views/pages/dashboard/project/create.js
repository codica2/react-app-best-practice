import React, { Fragment } from "react";

import { Container } from "@styled/Containers";
import StyledProject from "@components/Projects/StyledProject";

import SubHeader from "@components/Projects/ProjectSubHeader";
import CreateProject from "@components/Projects/create";

const Project = ({ match }) => {
  return (
    <Fragment>
      <SubHeader />
      <Container indentBot sidebarCondition transparent dashboardContainer>
        <i className="fa fa-spinner fa-3x fa-pulse preloader" />
        <StyledProject>
          <CreateProject />
        </StyledProject>
      </Container>
    </Fragment>
  );
};

export default Project;
