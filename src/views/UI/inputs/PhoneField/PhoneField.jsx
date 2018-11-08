import React from "react";
import { Field } from "redux-form";

import StyledPhoneField from "./StyledPhoneField";
import RenderPhoneField from "./RenderPhoneField";

import { required } from "@views/utils/validate";

const PhoneField = ({ value, ...rest }) => (
  <StyledPhoneField>
    <Field
      name="phone_number"
      label="Phone"
      component={RenderPhoneField}
      placeholder="Enter phone number"
      value={value}
      validate={[required]}
      isRequired
      {...rest}
    />
  </StyledPhoneField>
);

export default PhoneField;
