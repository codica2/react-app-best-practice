import React from "react";
import { reduxForm, Field } from "redux-form";
import { Grid } from "semantic-ui-react";

import { SubmitBtn } from "@styled/DVButton.js";
import InputField from "@UI/inputs/InputField";
import { required } from "@views/utils/validate";

const AddTeamForm = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={13}>
            <Field
              name="name"
              label="Team name"
              component={InputField}
              validate={[required]}
              padded
            />
          </Grid.Column>

          <Grid.Column verticalAlign="bottom" computer={3} floated="right">
            <SubmitBtn type="submit" disabled={submitting} primary>
              <span>Save</span>
            </SubmitBtn>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: "CreateTaskForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(AddTeamForm);
