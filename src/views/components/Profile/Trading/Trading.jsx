import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Field } from "redux-form";
import { Grid } from "semantic-ui-react";

import ImageUploader from "@UI/inputs/ImageUploader";
import InputField from "@UI/inputs/InputField";
import SelectField from "@UI/inputs/SelectField";
import RenderTextArea from "@UI/inputs/TextArea";
import MultiSelect from "@UI/inputs/MultiSelect";
import CheckboxGroup from "@UI/inputs/CheckboxGroup";

import { DvBlueButton } from "@styled/DVButton";

import { employeers, projectInterests } from "./helpers/selects";

import { required, maxLength500 } from "@views/utils/validate";

const Trading = ({
  handleSubmit,
  submitting,
  avatar,
  industries,
  isEditing
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} computer={3}>
            <Field
              name="person"
              component={ImageUploader}
              type="file"
              avatar={avatar}
              placeholder="Choose your photo"
            />
          </Grid.Column>

          <Grid.Column mobile={16} computer={10}>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column computer={16}>
                  <CheckboxGroup
                    name="project_interests"
                    label="Project interests"
                    options={projectInterests}
                    columns={2}
                    isRequired
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="about_company"
                    label="About your company (tell us about the in-house capabilities and skills)"
                    placeholder="Ex. We're a company skilled in high tech development, working with front-end, back-end and full-stack developers offering a variety of skills sets such as ..."
                    component={RenderTextArea}
                    padBottom={10}
                    validate={[maxLength500]}
                  />
                </Grid.Column>

                <Grid.Column>
                  <MultiSelect
                    name="company_capabilities"
                    label="Company capabilities"
                    placeholder="Start typing here..."
                    options={[]}
                    validate={[required]}
                    isRequired
                  />

                  <MultiSelect
                    name="industry_experience"
                    label="Industry experience"
                    placeholder="Start typing here..."
                    options={[]}
                    validate={[required]}
                    isRequired
                  />
                </Grid.Column>

                <Grid.Column>
                  <Field
                    name="number_of_employers"
                    label="Number of employers"
                    component={SelectField}
                    placeholder="Select"
                    options={employeers}
                    className="icon"
                    icon="users"
                    labeled
                    button
                  />

                  <Field
                    name="hourly_rate"
                    type="number"
                    label="Day rate"
                    component={InputField}
                    icon="dollar"
                    iconPosition="left"
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
                to={isEditing ? "/dashboard/about" : "/profile/industry"}
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
              {isEditing ? "Save" : "Save and continue"}
            </DvBlueButton>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default Trading;
