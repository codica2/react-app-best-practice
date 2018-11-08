import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "redux-form";
import { NavLink } from "react-router-dom";
import { Message } from "semantic-ui-react";

import InputField from "@UI/inputs/InputField";

import { DvButtonBlue } from "@styled/DVButton";
import StyledFormHint from "@styled/forms/FormHint";

import { required, minLength8 } from "@views/utils/validate";

const SignInForm = ({ handleSubmit, submitting, user, signInFail }) => {
  const handleReset = user => () => {
    sessionStorage.setItem("user", user);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {signInFail && (
        <Message floating negative style={{ marginBottom: "25px" }}>
          Incorrect email or password.
        </Message>
      )}
      <Field
        name="email"
        type="email"
        label="Your email"
        checkedClass="checked"
        component={InputField}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        component={InputField}
        validate={[required, minLength8]}
        checkedClass="checked"
      />
      <StyledFormHint>
        <NavLink onClick={handleReset(user)} to="/forgot_password">
          Forgot password?
        </NavLink>
      </StyledFormHint>

      <div className="controls">
        <DvButtonBlue type="submit" className="dv-blue" disabled={submitting}>
          Sign In
        </DvButtonBlue>
      </div>
    </Form>
  );
};

SignInForm.propTypes = {
  user: PropTypes.string.isRequired,
  signInFail: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
};

SignInForm.defaultProps = {
  signInFail: false
};

export default SignInForm;
