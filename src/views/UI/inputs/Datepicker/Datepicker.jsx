import React from "react";
import moment from "moment";
import { submit } from "redux-form";
import DatePicker from "react-datepicker";
import { Input } from "semantic-ui-react";

import StyledInputs from "@styled/forms/Inputs";
import StyledError from "@styled/forms/Validation";
import StyledLabel from "@styled/forms/Label";

import "react-datepicker/dist/react-datepicker.css";

class RenderDate extends React.Component {
  handleChange = date => {
    const {
      input: { onChange },
      meta: { dispatch, form },
      selfSubmit
    } = this.props;
    onChange(date.format("YYYY-MM-DD"));

    selfSubmit &&
      setTimeout(() => {
        dispatch(submit(form));
      });
  };

  render() {
    const {
      input,
      placeholder,
      name,
      label,
      type,
      disabled,
      isRequired,
      meta: { touched, error, warning, submitting, dirty },
      checkedClass,
      ...rest
    } = this.props;

    const date = moment(input.value, "YYYY-MM-DD").isValid()
      ? moment(input.value)
      : null;

    const className = !error ? checkedClass : "";

    return (
      <StyledInputs {...rest}>
        <label htmlFor={name}>
          {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
        </label>
        <Input
          error={Boolean(touched && error)}
          {...input}
          name={input.name}
          className={className}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          iconPosition="left"
          icon={<i className="fas fa-calendar-alt" />}
          loading={submitting && dirty}
          input={
            <DatePicker
              {...input}
              name={input.name}
              value={date && date.format("DD/MM/YYYY")}
              onChange={this.handleChange}
              onBlur={() => {}}
              selected={date}
              placeholderText={placeholder}
              dateFormat="DD/MM/YYYY"
              autoComplete="off"
              readOnly
            />
          }
        />

        {touched &&
          ((error && <StyledError>{error}</StyledError>) ||
            (warning && <span>{warning}</span>))}
      </StyledInputs>
    );
  }
}

export default RenderDate;
