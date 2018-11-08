import React, { Component, Fragment } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";

import history from "../../../history";

import StyledFormHeader from "@styled/forms/FormHeader";
import ForgotPasswordForm from "./ForgotPasswordForm";

import { getTokenForResetPassword } from "@ducks/user/actions";

class ForgotPassword extends Component {
  state = {
    error: null
  };

  submit = email => {
    const { getTokenForResetPassword } = this.props;
    let user = sessionStorage.getItem("user");

    return getTokenForResetPassword(user, email)
      .then(() => {
        localStorage.setItem("user_email", email["email"]);
        history.push("/confirm_reset");
      })
      .catch(({ response }) => {
        this.setState({
          error: response.data && response.data.errors
        });
      });
  };

  render() {
    const { error } = this.state;
    const { handleSubmit } = this.props;

    return (
      <Fragment>
        <StyledFormHeader borderBottom>
          <div className="form-title">Forgot Password?</div>
          <div className="form-subtitle">
            Get a varification code sent to your email adress
          </div>
        </StyledFormHeader>

        {!!error && (
          <Message floating negative style={{ marginBottom: "25px" }}>
            {error}
          </Message>
        )}

        <ForgotPasswordForm handleSubmit={handleSubmit(this.submit)} />
      </Fragment>
    );
  }
}

const withForm = reduxForm({
  form: "ForgotPasswordForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {
    email: localStorage.getItem("user_email")
  }
});

export default connect(
  null,
  {
    getTokenForResetPassword
  }
)(withForm(ForgotPassword));
