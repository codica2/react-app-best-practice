import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import HeaderIntro from "@components/HeaderIntro";
import ForgotPassword from "@components/ForgotPassword";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ForgotPasswordLayout = ({ match }) => {
  document.title = "Forgot Password | Digital Village";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <Route path={`${match.url}`} component={ForgotPassword} />
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
