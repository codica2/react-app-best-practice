import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Field, change } from "redux-form";
import { Grid } from "semantic-ui-react";

import ImageUploader from "@UI/inputs/ImageUploader";
import FileUploader from "@UI/inputs/FileUploader";
import InputField from "@UI/inputs/InputField";
import SelectField from "@UI/inputs/SelectField";
import MultiSelect from "@UI/inputs/MultiSelect";
import RenderTextArea from "@UI/inputs/TextArea";

import { DvBlueButton } from "@styled/DVButton";
import { required, maxLength30 } from "@views/utils/validate";

const CreateProjectForm = props => {
  const {
    handleSubmit,
    logo,
    skills,
    projectTypes,
    isRedguy,
    fetchCustomers,
    customersOptions,
    loading,
    fetching
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="projectAside">
              <div className="asideInfo">
                <Field
                  name="attached_files"
                  type="text"
                  label="Attach files"
                  component={FileUploader}
                  dropzone
                  createProject
                />
              </div>

              <div className="asideInfo">
                <Field
                  name="logo"
                  component={ImageUploader}
                  label="Logo"
                  projectLogo
                  createProject
                  type="file"
                  logo={logo}
                  placeholder="Choose project logo"
                />
              </div>

              <MultiSelect
                name="skills"
                label="Technology"
                placeholder="Choose technologies"
                options={skills}
                large
              />
            </div>

            <div className="projectMain">
              <div className="title">Create project</div>

              <Field
                name="name"
                label="Project name"
                placeholder="Type you project name here"
                component={InputField}
                validate={[required, maxLength30]}
                isRequired
              />

              {isRedguy && (
                <Field
                  name="customer_id"
                  label="Customer"
                  placeholder="Choose a customer"
                  component={SelectField}
                  options={customersOptions}
                  onOpen={fetchCustomers}
                  loading={fetching}
                  validate={[required]}
                  isRequired
                />
              )}

              <Field
                name="project_type_id"
                component={SelectField}
                options={projectTypes}
                label="Project type"
                placeholder="Choose the project type"
              />

              <Field
                name="description"
                component={RenderTextArea}
                label="Brief / Description"
                placeholder="Type your description here"
              />

              <Field
                name="user_story"
                component={RenderTextArea}
                label="User story"
                placeholder="Type your user story here"
                large
                validate={[required]}
                isRequired
              />

              <Field
                name="criteria"
                component={RenderTextArea}
                label="Acceptance criteria"
                placeholder="Type your acceptance criteria here"
                large
              />

              <Field
                name="requirements"
                component={RenderTextArea}
                label="Business requirements"
                placeholder="Type your business requirements here"
                large
              />

              <Field
                name="solution"
                component={RenderTextArea}
                label="Solution design"
                placeholder="Type your solution design here"
                large
              />

              <Field
                name="rules"
                component={RenderTextArea}
                label="Business rules"
                placeholder="Type your business rules here"
              />

              <div className="controls">
                <NavLink exact to={`/dashboard/`}>
                  <DvBlueButton className="dv-blue inverted transparent">
                    Cancel
                  </DvBlueButton>
                </NavLink>

                <DvBlueButton
                  type="submit"
                  className="dv-blue inverted draft"
                  disabled={loading}
                  onClick={() => {
                    props.dispatch(
                      change("CreateProjectForm", "state", "draft")
                    );
                  }}
                >
                  Draft
                </DvBlueButton>

                <DvBlueButton
                  type="submit"
                  className="dv-blue"
                  disabled={loading}
                >
                  Create
                </DvBlueButton>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default CreateProjectForm;
