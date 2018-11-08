import React, { Fragment } from "react";

import AboutSubHeader from "@components/About/SubHeader";
import About from "@components/About";

import { Container } from "@styled/Containers";
import StyledProfile from "@styled/Profile";

const AboutLayout = ({ match }) => {
  return (
    <Fragment>
      <AboutSubHeader />
      <Container indentBot dashboardContainer sidebarCondition transparent>
        <StyledProfile>
          <About specialist={match.params.id} />
        </StyledProfile>
      </Container>
    </Fragment>
  );
};

export default AboutLayout;
