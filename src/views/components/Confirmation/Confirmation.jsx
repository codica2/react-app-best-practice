import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import StyledFormHeader from "@styled/forms/FormHeader";

class Confirmation extends Component {
  componentWillUnmount() {
    localStorage.removeItem("user_email");
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column className="perspective">
            <StyledFormHeader borderBottom>
              <div className="form-title">Join</div>
              <div className="form-subtitle">Confirm your email address.</div>
            </StyledFormHeader>
            <div className="confirm-msg">
              <p>
                A verification email has been sent to <br />{" "}
                <b>{localStorage.getItem("user_email")}</b>
              </p>
              {/* <div>{localStorage.getItem("user_email")}</div> */}
              <p>Let us know that it's you and start creating your profile.</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Confirmation;
