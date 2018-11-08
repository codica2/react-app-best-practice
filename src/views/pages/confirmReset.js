import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import HeaderIntro from "@components/HeaderIntro";
import ConfirmReset from "@components/ResetPassword/ConfirmReset";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ConfirmResetLayout = ({ match }) => {
  document.title = "Reset Password | Digital Village";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <Route path={`${match.url}`} component={ConfirmReset} />
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
