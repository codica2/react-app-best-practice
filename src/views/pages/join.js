import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderIntro from "@components/HeaderIntro";
import Join from "@components/Join";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const JoinLayout = props => (
  <Fragment>
    <HeaderIntro />
    <MainContainer>
      <IntroContainer>
        <Join />
      </IntroContainer>
    </MainContainer>
  </Fragment>
);

JoinLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default JoinLayout;
