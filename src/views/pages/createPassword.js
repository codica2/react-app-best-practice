import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderIntro from "@components/HeaderIntro";
import CreatePassword from "@components/CreatePassword";

import MainContainer from "@styled/MainContainer";
import { IntroContainer } from "@styled/Containers";

const CreatePasswordLayout = props => {
  document.title = "Create Password";

  return (
    <Fragment>
      <HeaderIntro />
      <MainContainer>
        <IntroContainer>
          <CreatePassword {...props} />
        </IntroContainer>
      </MainContainer>
    </Fragment>
  );
};

CreatePasswordLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default CreatePasswordLayout;
