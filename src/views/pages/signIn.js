import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import HeaderIntro from "@components/HeaderIntro";
import signIn from "@components/SignIn";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const SignInLayout = ({ match }) => {
  document.title = "Sign In | Digital Village";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <Route path={`${match.url}`} component={signIn} />
        </IntroContainer>
      </MainContainer>
    </Fragment>
  );
};

SignInLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default SignInLayout;
