import React from "react";
import { Checkbox } from "semantic-ui-react";

export const CheckboxField = ({
  input: { value, onChange, ...input },
  ...rest
}) => (
  <Checkbox
    checked={value}
    onClick={(event, data) => onChange(data.checked)}
    {...input}
    {...rest}
  />
);
