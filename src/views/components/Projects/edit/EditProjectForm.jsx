import React from "react";
import PropTypes from "prop-types";
import { Form, Field, change } from "redux-form";
import { Grid } from "semantic-ui-react";

import ImageUploader from "@UI/inputs/ImageUploader";
import FileUploader from "@UI/inputs/FileUploader";
import InputField from "@UI/inputs/InputField/Async";
import MultiSelect from "@UI/inputs/MultiSelect";
import RenderTextArea from "@UI/inputs/TextArea/Async";

import MembersDropdown from "@UI/MembersDropdown";
import AssignTeamDropdown from "@UI/AssignTeamDropdown";
import { DvBlueButton } from "@styled/DVButton";

import { IMAGE_PORT, CUSTOMER, S_REDGUY } from "@utilities";
import { maxLength30 } from "@views/utils/validate";
import { oneOfRoles } from "@views/utils/functions";

const EditProjectForm = props => {
  const {
    userId,
    userRole,
    projectWithId: { id, logo = {}, name, skills, customer = {}, state },
    projectTeam: { specialists },
    skillsOptions,
    projectType,
    handleAssignTeam,
    onSelfSubmit,
    handleSkills,
    handleRemove
  } = props;
  const hasPermission = userRole === CUSTOMER || userRole === S_REDGUY;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="projectAside">
              <div className="asideInfo">
                <div className="label">Customer</div>
                <div className="text">{`${customer.first_name} ${
                  customer.last_name
                }`}</div>
              </div>
              <div className="asideInfo">
                <div className="label">Project type</div>
                <div className="text">
                  {projectType ? projectType.name : "Any project type"}
                </div>
              </div>
              <div className="asideInfo">
                <div className="label">Attached files:</div>
                <Field
                  name="attached_files"
                  type="text"
                  component={FileUploader}
                  disabled={!hasPermission}
                  onSelfSubmit={onSelfSubmit}
                  className="projectFiles"
                />
              </div>
              <div className="asideInfo">
                {hasPermission ? (
                  <MultiSelect
                    label="Technologies:"
                    name="skills"
                    placeholder="Add few new technologies"
                    className="projectSkills"
                    options={skillsOptions}
                    handleSelectChange={handleSkills}
                  />
                ) : (
                  <React.Fragment>
                    <div className="label">Technologies:</div>
                    <div className="skillsWrapper">
                      {skills &&
                        skills.map(skill => (
                          <div className="skill" key={skill.id}>
                            {skill.name}
                          </div>
                        ))}
                    </div>
                  </React.Fragment>
                )}
              </div>
              <div className="asideInfo">
                <p>
                  <span className="label">Members:</span>
                </p>
                <div className="teamWrapper">
                  <MembersDropdown
                    members={specialists}
                    countToShow={5}
                    position="bottom left"
                    handleRemove={handleRemove}
                    removeText="project"
                    userRole={userRole}
                    userId={userId}
                  />
                  {userRole === S_REDGUY && (
                    <AssignTeamDropdown
                      specialists={specialists}
                      projectId={id}
                      handleAssignTeam={handleAssignTeam}
                      userType={[S_REDGUY]}
                      closeOnChange={true}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="projectMain">
              {oneOfRoles(userRole, CUSTOMER, S_REDGUY) ? (
                <div className="projectHeader">
                  <div className="projectLogo">
                    <Field
                      name="logo"
                      type="file"
                      placeholder="Choose project logo"
                      component={ImageUploader}
                      projectLogo
                      logo={logo}
                      projectId={id}
                      projectName={name}
                      onSelfSubmit={true}
                    />
                  </div>
                  <div className="projectStatus">
                    <p>{name} Project </p>
                  </div>
                </div>
              ) : (
                <div className="projectHeader">
                  {logo && logo.url ? (
                    <div className="projectLogo">
                      <div className="imgPreview">
                        <img src={IMAGE_PORT + logo.url} alt={name} />
                      </div>
                    </div>
                  ) : (
                    <div className="projectLogo">
                      <div className="imgPreview">
                        <span className="projectNoLogo">{name && name[0]}</span>
                      </div>
                    </div>
                  )}
                  <p>{name} Project </p>
                </div>
              )}

              <Field
                name="name"
                label="Name"
                disabled={!hasPermission}
                component={InputField}
                className="transparent"
                placeholder={
                  hasPermission
                    ? "Type your project name here"
                    : "No project name"
                }
                validate={[maxLength30]}
                onSelfSubmit={onSelfSubmit}
                autoHeight
                unhiddable
              />

              <Field
                name="description"
                label="Description"
                placeholder={
                  hasPermission
                    ? "Type your description here"
                    : "No description"
                }
                disabled={!hasPermission}
                component={RenderTextArea}
                onSelfSubmit={onSelfSubmit}
                className="transparent"
                autoHeight
                unhiddable
              />
              <Field
                name="user_story"
                label="User story"
                placeholder={
                  hasPermission ? "Type your user story here" : "No user story"
                }
                disabled={!hasPermission}
                component={RenderTextArea}
                onSelfSubmit={onSelfSubmit}
                className="transparent"
                autoHeight
                unhiddable
              />
              <Field
                name="deliverables"
                label="Acceptance criteria"
                placeholder={
                  hasPermission
                    ? "Type your acceptance criterea here"
                    : "No acceptance criterea"
                }
                disabled={!hasPermission}
                component={RenderTextArea}
                onSelfSubmit={onSelfSubmit}
                className="transparent"
                autoHeight
                unhiddable
              />
              <Field
                name="business_requirements"
                label="Business requirements"
                placeholder={
                  hasPermission
                    ? "Type your business requirements here"
                    : "No business requirements"
                }
                disabled={!hasPermission}
                component={RenderTextArea}
                onSelfSubmit={onSelfSubmit}
                className="transparent"
                autoHeight
                unhiddable
              />
              <Field
                name="business_rules"
                label="Business rules"
                placeholder={
                  hasPermission
                    ? "Type your business rules here"
                    : "No business rules"
                }
                disabled={!hasPermission}
                component={RenderTextArea}
                onSelfSubmit={onSelfSubmit}
                className="transparent"
                autoHeight
                unhiddable
              />
              <Field
                name="further_notes"
                label="Solution design"
                placeholder={
                  hasPermission
                    ? "Type your solution design here"
                    : "No solution design"
                }
                disabled={!hasPermission}
                component={RenderTextArea}
                onSelfSubmit={onSelfSubmit}
                className="transparent"
                autoHeight
                unhiddable
              />
              {oneOfRoles(userRole, CUSTOMER, S_REDGUY) && (
                <div className="controls">
                  {state === "draft" && (
                    <DvBlueButton
                      loading={props.submitting}
                      role="button"
                      className="clear dv-blue"
                      onClick={() => {
                        props.dispatch(
                          change(
                            "EditProjectForm",
                            "state",
                            "brief_submissions"
                          )
                        );
                      }}
                    >
                      Publish
                    </DvBlueButton>
                  )}
                  {state === "reviewed_by_admin" && userRole === S_REDGUY && (
                    <DvBlueButton
                      loading={props.submitting}
                      role="button"
                      className="clear dv-blue"
                      fixed="true"
                    >
                      Submit
                    </DvBlueButton>
                  )}
                </div>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

EditProjectForm.propTypes = {
  userRole: PropTypes.string.isRequired,
  projectWithId: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.object,
    skills: PropTypes.array,
    customer: PropTypes.object
  }).isRequired,
  projectTeam: PropTypes.object,
  skillsOptions: PropTypes.array
};

EditProjectForm.defaultProps = {
  projectTeam: {},
  skillsOptions: []
};

export default EditProjectForm;
