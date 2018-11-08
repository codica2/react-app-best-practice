import React from "react";
import { Form, Field } from "redux-form";

import ModalTerms from "./modals/ModalTerms";
import PrivacyPolicy from "./modals/ProvacyPolicy";

import InputField from "@UI/inputs/InputField";
import RenderCheckbox from "./helpers/RenderCheckbox";

import StyledRequireBox from "./StyledRequiredBox";
import { DvButtonBlue } from "@styled/DVButton";

import { required, minLength2, email } from "@views/utils/validate";

const JoinForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="email"
      type="email"
      label="Your email"
      component={InputField}
      validate={[required, email]}
      checkedClass="checked"
    />

    <StyledRequireBox>
      <Field
        name="terms"
        component={RenderCheckbox}
        validate={[required, minLength2]}
      />
      <p className="privacy">
        I have read and I agree to the <ModalTerms /> and <PrivacyPolicy />
      </p>
    </StyledRequireBox>

    <div className="controls">
      <DvButtonBlue type="submit" className="dv-blue" disabled={submitting}>
        Continue
      </DvButtonBlue>
    </div>
  </Form>
);

export default JoinForm;
