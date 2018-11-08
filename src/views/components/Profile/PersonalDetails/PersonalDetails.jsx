import React from "react";
import { Form, Field } from "redux-form";
import { NavLink } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import ImageUploader from "@UI/inputs/ImageUploader";
import InputField from "@UI/inputs/InputField";
import SelectField from "@UI/inputs/SelectField";
import MultiSelect from "@UI/inputs/MultiSelect";
import PhoneField from "@UI/inputs/PhoneField";

import { DvBlueButton } from "@styled/DVButton";

import { required, email } from "@views/utils/validate";

export const jobTitles = [
  { text: "Freelancer", value: "Freelancer" },
  { text: "Consultant", value: "Consultant" },
  { text: "Agency", value: "Agency" }
];

const PersonalDetails = ({
  submitting,
  handleSubmit,
  avatar,
  isEditing,
  languages
}) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={12} computer={16}>
          <Form onSubmit={handleSubmit}>
            <Grid>
              <Grid.Row>
                <Grid.Column computer={3}>
                  <Field
                    name="person"
                    component={ImageUploader}
                    type="file"
                    avatar={avatar}
                    placeholder="Choose your photo"
                  />
                </Grid.Column>

                <Grid.Column computer={10}>
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Field
                          name="first_name"
                          label="First name"
                          type="text"
                          component={InputField}
                          validate={[required]}
                          isRequired
                        />

                        <Field
                          name="city"
                          label="City"
                          type="text"
                          component={InputField}
                          validate={[required]}
                          isRequired
                        />

                        <PhoneField />
                      </Grid.Column>

                      <Grid.Column>
                        <Field
                          name="last_name"
                          label="Last name"
                          type="text"
                          component={InputField}
                          validate={[required]}
                          isRequired
                        />

                        <Field
                          name="country"
                          label="Country"
                          type="text"
                          component={InputField}
                          validate={[required]}
                          isRequired
                        />

                        <Field
                          name="email"
                          label="Email"
                          type="email"
                          component={InputField}
                          validate={[required, email]}
                          isRequired
                          icon="mail"
                          iconPosition="left"
                        />
                      </Grid.Column>

                      <Grid.Column computer={16}>
                        <Field
                          name="job_title"
                          label="I'm a"
                          placeholder="Select..."
                          component={SelectField}
                          options={jobTitles}
                          validate={[required]}
                          isRequired
                        />
                      </Grid.Column>

                      <Grid.Column computer={16}>
                        <MultiSelect
                          name="skills_attributes"
                          label="Language(s) I speak fluently"
                          placeholder="Start typing here..."
                          options={languages}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  {!submitting && (
                    <NavLink exact to="/dashboard/about">
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
                    {isEditing ? "Save" : "Save and continue"}
                  </DvBlueButton>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PersonalDetails;
