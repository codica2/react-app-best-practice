import React from "react";
import { Field } from "redux-form";

import RenderMultiSelect from "./RenderMultiSelect";
import StyledMultiSelect from "./StyledMultiSelect";
import StyledLabel from "@styled/forms/Label";

const MultiSelect = ({
  handleSelectChange,
  options,
  onOpen,
  label,
  name,
  padded,
  placeholder,
  className,
  isRequired
}) => {
  return (
    <StyledMultiSelect className={className} padded={padded}>
      <label htmlFor={name}>
        {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
      </label>

      <Field
        name={name}
        component={RenderMultiSelect}
        onChange={e => handleSelectChange && handleSelectChange(e, name)}
        placeholder={placeholder}
        onOpen={onOpen}
        options={options}
      />
    </StyledMultiSelect>
  );
};

export default MultiSelect;
