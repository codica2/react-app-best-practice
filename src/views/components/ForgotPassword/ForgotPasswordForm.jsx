import React from "react";
import { Form, Field } from "redux-form";

import { DvButtonBlue } from "@styled/DVButton";
import InputField from "@UI/inputs/InputField";
import { required } from "@views/utils/validate";

const ForgotPasswordForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="email"
      type="email"
      label="Your Email"
      component={InputField}
      checkedClass="checked"
      validate={[required]}
    />

    <div className="controls">
      <DvButtonBlue type="submit" className="dv-blue" disabled={submitting}>
        Submit
      </DvButtonBlue>
    </div>
  </Form>
);

export default ForgotPasswordForm;
