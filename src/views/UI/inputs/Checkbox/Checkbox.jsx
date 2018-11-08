import React from "react";

import StyledRadio from "@styled/forms/Options";
import StyledError from "@styled/forms/Validation";

const Checkbox = props => {
  let {
    input,
    label,
    disabled,
    meta: { touched, error, warning },
    columns
  } = props;

  return (
    <StyledRadio columns={columns}>
      <label>
        <input
          type="checkbox"
          className="ownInput"
          {...input}
          disabled={disabled}
        />
        <span className={`ownCheckbox`}>{label}</span>
      </label>
      {touched &&
        ((error && (
          <StyledError className="checkbox-error">{error}</StyledError>
        )) ||
          (warning && <span>{warning}</span>))}
    </StyledRadio>
  );
};

export default Checkbox;
