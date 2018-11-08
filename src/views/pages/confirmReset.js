import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderIntro from "@components/HeaderIntro";
import ConfirmReset from "@components/ResetPassword/ConfirmReset";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ConfirmResetLayout = props => {
  document.title = "Reset Password";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <ConfirmReset />
        </IntroContainer>
      </MainContainer>
    </Fragment>
  );
};

ConfirmResetLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default ConfirmResetLayout;
