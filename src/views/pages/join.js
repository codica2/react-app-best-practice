import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import HeaderIntro from "@components/HeaderIntro";
import Join from "@components/Join";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const JoinLayout = ({ match }) => (
  <Fragment>
    <HeaderIntro />
    <MainContainer>
      <IntroContainer>
        <Route path={`${match.url}`} component={Join} />
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
