import React from "react";
import { Input } from "semantic-ui-react";

import StyledInputs from "@styled/forms/Inputs";
import StyledLabel from "@styled/forms/Label";
import StyledError from "@styled/forms/Validation";

const InputField = ({
  input,
  placeholder,
  name,
  label,
  type,
  disabled,
  padded,
  meta: { touched, error, warning },
  checkedClass,
  min,
  isRequired,
  step,
  autoComplete,
  className,
  inputLabel,
  ...rest
}) => {
  const customClassName = !error ? checkedClass : "";

  return (
    <StyledInputs className={className} padded={padded}>
      <label htmlFor={name}>
        {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
      </label>
      <Input
        error={Boolean(touched && error)}
        {...input}
        name={input.name}
        className={customClassName}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        min={min}
        step={step}
        autoComplete={autoComplete || "off"}
        label={inputLabel}
        {...rest}
      />
      {touched &&
        ((error && <StyledError>{error}</StyledError>) ||
          (warning && <span>{warning}</span>))}
    </StyledInputs>
  );
};

export default InputField;
