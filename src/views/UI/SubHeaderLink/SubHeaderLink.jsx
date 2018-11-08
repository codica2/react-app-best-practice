import React from "react";

import StyledSubHeaderLink from "@styled/SubHeaderLink";

export default ({ className, content, disabled }) => (
  <StyledSubHeaderLink disabled={disabled} className={className}>
    {content}
  </StyledSubHeaderLink>
);
