import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import StyledFormHeader from "@styled/forms/FormHeader";

import VerificationForm from "@views/components/common/forms/VerificationForm";

import {
  verifyPassword,
  getUserId,
  deleteConfirmationToken
} from "@ducks/user/actions";

import { createNotification } from "@utilities";
import { validatePasswords } from "@views/utils/validate";

class Verification extends Component {
  componentDidMount() {
    const {
      location: { state }
    } = this.props;

    this.token = state.token;
    this.user = state.user;

    this.props
      .getUserId(this.user, this.token)
      .then(data => (this.userId = data && data.id));
  }

  componentWillUnmount() {
    this.props.deleteConfirmationToken(this.user, this.token);
  }

  submit = values => {
    const { history, verifyPassword } = this.props;

    return verifyPassword(this.user, this.userId, values)
      .then(() => history.push("/sign_in"))
      .catch(error => {
        createNotification({
          type: "error",
          text: "Link has expired"
        });
      });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Fragment>
        <StyledFormHeader borderBottom>
          <div className="form-title">Join</div>
          <div className="form-subtitle">
            Your account has been verified. Create a password and join us.
          </div>
        </StyledFormHeader>

        <VerificationForm
          {...this.porps}
          handleSubmit={handleSubmit(this.submit)}
        />
      </Fragment>
    );
  }
}

const withForm = reduxForm({
  form: "VerificationForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate: validatePasswords
});

export default connect(
  null,
  {
    verifyPassword,
    getUserId,
    deleteConfirmationToken
  }
)(withForm(Verification));
