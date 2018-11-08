import React, { Fragment } from "react";

import HeaderIntro from "@components/HeaderIntro";
import SignIn from "@components/SignIn";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const SignInLayout = props => {
  document.title = "Sign In";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <SignIn />
        </IntroContainer>
      </MainContainer>
    </Fragment>
  );
};

export default SignInLayout;
