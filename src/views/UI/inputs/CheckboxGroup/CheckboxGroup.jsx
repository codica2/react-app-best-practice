import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";

import RenderCheckbox from "@UI/inputs/Checkbox";
import StyledCheckboxGroup from "./StyledCheckboxGroup";

import StyledLabel from "@styled/forms/Label";

const CheckboxGroup = ({
  name,
  label,
  options,
  columns,
  isRequired,
  ...rest
}) => (
  <StyledCheckboxGroup>
    <label>
      {label && isRequired ? <StyledLabel>{label}</StyledLabel> : label}
    </label>
    <div className="checkbox-group">
      {options.map(item => (
        <Field
          key={item}
          name={`${name}.${item}`}
          type="checkbox"
          label={item}
          value={item}
          component={RenderCheckbox}
          columns={columns}
          {...rest}
        />
      ))}
    </div>
  </StyledCheckboxGroup>
);

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  columns: PropTypes.number
};

CheckboxGroup.defaulProps = {
  columns: 3
};

export default CheckboxGroup;
