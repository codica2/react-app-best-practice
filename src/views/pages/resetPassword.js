import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderIntro from "@components/HeaderIntro";
import ResetPassword from "@components/ResetPassword";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ResetPasswordLayout = ({ location }) => {
  document.title = "Reset Password";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <ResetPassword location={location} />
        </IntroContainer>
      </MainContainer>
    </Fragment>
  );
};

ResetPasswordLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default ResetPasswordLayout;
