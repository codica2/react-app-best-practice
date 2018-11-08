import React from "react";
import { submit } from "redux-form";

import StyledInputs from "@styled/forms/Inputs";
import StyledError from "@styled/forms/Validation";
import StyledDropdown from "./StyledDropdown";
import StyledLabel from "@styled/forms/Label";

const SelectField = ({
  meta: { touched, error, warning, dispatch, form },
  input,
  label,
  small,
  isRequired,
  selfSubmit,
  ...rest
}) => {
  return (
    <StyledInputs {...rest} small={small}>
      <label>
        {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
      </label>
      <StyledDropdown
        {...input}
        onChange={(e, data) => input.onChange(data.value)}
        error={Boolean(touched && error)}
        onBlur={(e, data) => {
          !error && selfSubmit && dispatch(submit(form));
        }}
        selection
        fluid
        {...rest}
      />
      {touched &&
        ((error && <StyledError>{error}</StyledError>) ||
          (warning && <span>{warning}</span>))}
    </StyledInputs>
  );
};

export default SelectField;
