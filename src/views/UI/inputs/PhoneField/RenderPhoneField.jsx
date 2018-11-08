import React from "react";
import Phone from "react-phone-number-input";
import cx from "classnames";

import StyledInputs from "@styled/forms/Inputs";
import StyledError from "@styled/forms/Validation";
import StyledLabel from "@styled/forms/Label";

import "react-phone-number-input/rrui.css";
import "react-phone-number-input/style.css";

const RenderPhoneField = ({
  input,
  placeholder,
  name,
  label,
  type,
  disabled,
  padded,
  meta: { touched, error, warning },
  min,
  pattern,
  isRequired,
  step,
  ...rest
}) => {
  return (
    <StyledInputs padded={padded}>
      <label htmlFor={name}>
        {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
      </label>
      <Phone
        {...input}
        name={input.name}
        className={cx({ error: !!(touched && error) })}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        min={min}
        pattern={pattern}
        step={step}
        {...rest}
      />
      {touched &&
        ((error && <StyledError>{error}</StyledError>) ||
          (warning && <span>{warning}</span>))}
    </StyledInputs>
  );
};

export default RenderPhoneField;
