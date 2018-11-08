import React from "react";
import { Field } from "redux-form";
import InputField from "@UI/inputs/InputField";

const LocationFields = () => {
  return (
    <div id="city">
      <span id="country" />
      <Field name="country" label="Country" component={InputField} />
      <Field name="city" label="City" component={InputField} />
    </div>
  );
};

export default LocationFields;
