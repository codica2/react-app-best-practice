import React from "react";
import classNames from "classnames";
import { TextArea } from "semantic-ui-react";

import StyledError from "@styled/forms/Validation";
import StyledTextArea from "./StyledTextArea";
import StyledLabel from "@styled/forms/Label";

const RenderTextArea = ({
  input,
  placeholder,
  name,
  type,
  disabled,
  id,
  text,
  label,
  meta: { touched, error, warning },
  className,
  large,
  isRequired,
  padded,
  padBottom,
  paddedError,
  ...rest
}) => {
  const textareaClass = classNames({ error: touched && error });

  return (
    <StyledTextArea
      className={className}
      large={large}
      padded={padded}
      padBottom={padBottom}
    >
      <label htmlFor={input.name} className="textarea-label">
        {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
      </label>
      <TextArea
        {...input}
        className={textareaClass}
        autoHeight
        value={input.value}
        name={input.name}
        placeholder={placeholder}
        id={id}
        {...rest}
      />
      {touched &&
        ((error && (
          <StyledError paddedError={paddedError}>{error}</StyledError>
        )) ||
          (warning && <span>{warning}</span>))}
    </StyledTextArea>
  );
};

export default RenderTextArea;
