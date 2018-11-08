import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import HeaderIntro from "@components/HeaderIntro";
import Confirmation from "@components/Confirmation";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ConfirmationLayout = ({ match }) => (
  <Fragment>
    <HeaderIntro />
    <MainContainer>
      <IntroContainer>
        <Route path={`${match.url}`} component={Confirmation} />
      </IntroContainer>
    </MainContainer>
  </Fragment>
);

ConfirmationLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default ConfirmationLayout;
