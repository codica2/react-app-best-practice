import React, { Component, Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Form, Field } from "redux-form";

import InputField from "@UI/inputs/InputField";
import StyledFormHeader from "@styled/forms/FormHeader";
import { DvButtonBlue } from "@styled/DVButton";

import { changePassword } from "@ducks/user/actions";

import { validatePasswords } from "@views/utils/validate";

class ChangePassword extends Component {
  submit = values => this.props.changePassword(values);

  goBack = () => this.props.history.goBack();

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Fragment>
        <StyledFormHeader borderBottom>
          <div className="form-title">Change password</div>
        </StyledFormHeader>

        <Form onSubmit={handleSubmit(this.submit)}>
          <Field
            name="password"
            type="password"
            label="New password"
            component={InputField}
            checkedClass="checked"
          />

          <Field
            name="password_confirmation"
            type="password"
            label="Confirm new password"
            component={InputField}
            checkedClass="checked"
          />

          <div className="controls space-between">
            <DvButtonBlue
              type="button"
              className="dv-blue"
              disabled={submitting}
              onClick={this.goBack}
            >
              Back
            </DvButtonBlue>

            <DvButtonBlue
              type="submit"
              className="dv-blue"
              loading={submitting}
            >
              Save
            </DvButtonBlue>
          </div>
        </Form>
      </Fragment>
    );
  }
}

const withConnect = connect(
  null,
  {
    changePassword
  }
);

const withForm = reduxForm({
  form: "ChangePasswordForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate: validatePasswords
});

export default compose(
  withConnect,
  withForm
)(ChangePassword);
