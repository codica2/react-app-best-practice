import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

import StyledError from "@styled/forms/Validation";

class RenderCheckbox extends Component {
  render() {
    let {
      input,
      label,
      disabled,
      meta: { touched, error, warning }
    } = this.props;
    let { onFocus, onBlur } = input;

    return (
      <div className="dv-checkbox">
        <Checkbox
          onFocus={onFocus}
          onBlur={onBlur}
          label={label}
          disabled={disabled}
        />
        {touched &&
          ((error && <StyledError bottom={-20}>{error}</StyledError>) ||
            (warning && <span>{warning}</span>))}
      </div>
    );
  }
}

export default RenderCheckbox;
