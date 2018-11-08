import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderIntro from "@components/HeaderIntro";
import Confirmation from "@components/Confirmation";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ConfirmationLayout = props => (
  <Fragment>
    <HeaderIntro />
    <MainContainer>
      <IntroContainer>
        <Confirmation />
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
