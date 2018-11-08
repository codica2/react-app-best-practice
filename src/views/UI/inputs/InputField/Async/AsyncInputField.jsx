import React, { Component } from "react";
import { submit } from "redux-form";
import { Input } from "semantic-ui-react";

import StyledInputs from "@styled/forms/Inputs";
import StyledError from "@styled/forms/Validation";
import StyledLabel from "@styled/forms/Label";

import { taskStatuses } from "@views/utils/selects";

class InputField extends Component {
  state = {
    loading: false,
    updError: false
  };

  //TODO: apply thunk here
  keyDown = e => {
    const { onSelfSubmit } = this.props;

    if (e.keyCode === 13) {
      if (onSelfSubmit) {
        this.submit(e);
      }
      e.target.blur();
    }
  };

  submit = e => {
    const {
      meta: { dirty, dispatch, form, error },
      onSelfSubmit,
      selfSubmit,
      input
    } = this.props;

    input.onBlur(input.value);

    if (dirty && onSelfSubmit && !error) {
      this.setState({ loading: true });
      onSelfSubmit(input.name, e.target.value)
        .then(data => {
          if (data.state) {
            data.state = taskStatuses.find(
              status => status.enum === data.state
            );

            data.state = data.state && data.state.value;
          }
          this.setState({ loading: false, updError: false });
        })
        .catch(error => {
          console.error(error);
          this.setState({ loading: false, updError: true });
        });
    }

    !error && selfSubmit && dispatch(submit(form));
  };

  render() {
    const {
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
      pattern,
      step,
      autoComplete,
      className,
      isRequired
    } = this.props;

    const { loading, updError } = this.state;

    const customClassName = !error ? checkedClass : "";

    return (
      <StyledInputs className={className} padded={padded}>
        <label htmlFor={name}>
          {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
        </label>
        <Input
          error={Boolean(touched && error) || updError}
          {...input}
          name={input.name}
          className={customClassName}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          min={min}
          pattern={pattern}
          step={step}
          autoComplete={autoComplete || "off"}
          onKeyUp={this.keyDown}
          onBlur={this.submit}
          loading={loading}
        />
        {touched &&
          ((error && <StyledError>{error}</StyledError>) ||
            (warning && <span>{warning}</span>))}
      </StyledInputs>
    );
  }
}

export default InputField;
