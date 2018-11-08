import React from "react";
import { Form, Field } from "redux-form";
import { NavLink } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import ImageUploader from "@UI/inputs/ImageUploader";
import InputField from "@UI/inputs/InputField";

import { DvBlueButton } from "@styled/DVButton";

const Billings = ({ handleSubmit, submitting, avatar, isEditing, ...rest }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} computer={3}>
            <Field
              name="person"
              type="file"
              placeholder="Choose your photo"
              component={ImageUploader}
              avatar={avatar}
            />
          </Grid.Column>

          <Grid.Column mobile={16} computer={10}>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Field
                    name="trading_name"
                    label="Trading name"
                    component={InputField}
                  />

                  <Field
                    name="address"
                    label="Address"
                    component={InputField}
                  />

                  <Field
                    name="country"
                    label="Country"
                    component={InputField}
                  />

                  <Field name="city" label="City" component={InputField} />
                </Grid.Column>

                <Grid.Column>
                  <Field name="abn" label="ABN" component={InputField} />

                  <Field
                    name="website"
                    label="Website"
                    component={InputField}
                    inputLabel="http://"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            {!submitting && (
              <NavLink
                exact
                to={isEditing ? "/dashboard/about" : "/profile/company"}
              >
                <DvBlueButton
                  className="dv-blue inverted transparent"
                  uppercase="true"
                >
                  {isEditing ? "Cancel" : "Back"}
                </DvBlueButton>
              </NavLink>
            )}
          </Grid.Column>

          <Grid.Column textAlign="right">
            <DvBlueButton
              type="submit"
              className="dv-blue"
              loading={submitting}
              uppercase="true"
            >
              {isEditing ? "Save" : "Create"}
            </DvBlueButton>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default Billings;
