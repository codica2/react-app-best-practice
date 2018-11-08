import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderIntro from "@components/HeaderIntro";
import ForgotPassword from "@components/ForgotPassword";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ForgotPasswordLayout = props => {
  document.title = "Forgot Password";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <ForgotPassword />
        </IntroContainer>
      </MainContainer>
    </Fragment>
  );
};

ForgotPasswordLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default ForgotPasswordLayout;
