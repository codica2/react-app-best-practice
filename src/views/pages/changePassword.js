import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderBasic from "@components/HeaderBasic";
import ChangePassword from "@components/ChangePassword";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const ChangePasswordLayout = ({ match }) => {
  document.title = "Change Password";

  return (
    <Fragment>
      <HeaderBasic match={match} />
      <MainContainer>
        <IntroContainer>
          <ChangePassword />
        </IntroContainer>
      </MainContainer>
    </Fragment>
  );
};

ChangePasswordLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default ChangePasswordLayout;
