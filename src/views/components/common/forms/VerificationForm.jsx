import React from "react";
import { Form, Field } from "redux-form";

import InputField from "@UI/inputs/InputField";
import { DvButtonBlue } from "@styled/DVButton";

const VerificationForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="password"
      type="password"
      label="Password"
      component={InputField}
      checkedClass="checked"
    />

    <Field
      name="password_confirmation"
      type="password"
      label="Confirm password"
      component={InputField}
      checkedClass="checked"
    />

    <div className="controls">
      <DvButtonBlue type="submit" className="dv-blue" disabled={submitting}>
        Join
      </DvButtonBlue>
    </div>
  </Form>
);
export default VerificationForm;
