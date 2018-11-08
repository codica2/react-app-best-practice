import React, { Fragment } from "react";

import StyledFormHeader from "@styled/forms/FormHeader";

const ResetPassword = () => (
  <Fragment>
    <StyledFormHeader borderBottom>
      <div className="form-title">Reset Password</div>
    </StyledFormHeader>

    <div className="confirm-msg">
      <p>Please reset your password by link on your email</p>
      <div>{localStorage.getItem("user_email")}</div>
    </div>
  </Fragment>
);

export default ResetPassword;
