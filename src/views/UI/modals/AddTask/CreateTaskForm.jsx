import React, { Component } from "react";
import { reduxForm, Form, Field, change } from "redux-form";
import { Grid } from "semantic-ui-react";

import InputField from "@UI/inputs/InputField";
import RenderSelect from "@UI/inputs/SelectField";
import RenderDate from "@UI/inputs/Datepicker";
import RenderFile from "@UI/inputs/FileUploader";
import RenderTextArea from "@UI/inputs/TextArea";
import AssignDropdown from "@UI/AssignDropdown";
import SpecialistTile from "@UI/PersonTile/SpecialistTile";

import { DvBlueButton } from "@styled/DVButton";

import { required, maxLength80 } from "@views/utils/validate";
import { S_REDGUY } from "@utilities";

class CreateTaskForm extends Component {
  state = { specialists: [] };

  componentDidUpdate() {
    let specIds = [];
    this.state.specialists.map(spec => specIds.push(spec.id));
    specIds = specIds.join(",");
    this.props.dispatch(change("CreateTaskForm", "specIds", specIds));
  }

  makeFloat = e =>
    setTimeout(() => {
      this.props.dispatch(
        change(
          "CreateTaskForm",
          "cost",
          parseFloat(e.target.value || 0).toFixed(2)
        )
      );
    }, 10);

  selectProject = (e, value) => {
    this.props.getProjectEpics(value);
    this.props.showProjectTeam(value);

    this.props.dispatch(change("CreateTaskForm", "epic", ""));

    this.setState({
      specialists: []
    });
  };

  handleAssign = (type, specId) => {
    const spec = this.props.projectTeam.specialists.find(
      spec => spec.id === +specId
    );
    if (type === "assign") {
      this.setState({
        specialists: [...this.state.specialists, spec]
      });
    } else {
      let list = this.state.specialists;
      list.splice(list.indexOf(spec), 1);
      this.setState({
        specialists: list
      });
    }
  };

  removeSpecialist = key => {
    let specialists = this.state.specialists;
    specialists.splice(key, 1);
    this.setState({
      specialists: specialists
    });
  };

  handleEtaForm = date => {
    this.props.dispatch(change("CreateTaskForm", "eta", date));
  };

  render() {
    const {
      handleSubmit,
      submitting,
      projectTeam,
      close,
      epicsOptions
    } = this.props;
    const { specialists } = this.state;

    return (
      <Grid as={Form} onSubmit={handleSubmit} padded>
        <Grid.Row className="fluid">
          <Grid.Column computer={5} className="wrapper aside">
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Field
                    name="eta"
                    component={RenderDate}
                    type="date"
                    label="ETA"
                    placeholder="Due date"
                    className="estimate inline-in-modal"
                    handleEtaForm={this.handleEtaForm}
                  />
                </Grid.Column>

                <Grid.Column>
                  <Field
                    name="state"
                    label="Status"
                    placeholder="Select state"
                    className="status inline-in-modal"
                    component={RenderSelect}
                    options={[{ value: 0, text: "Backlog" }]}
                    disabled
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Field
                    name="attached_files"
                    type="text"
                    component={RenderFile}
                    dropzone
                    label="Attach files"
                    className="area"
                    padded
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <div className="specialistsWrapper">
                    {specialists.map((specialist, key) => (
                      <SpecialistTile
                        specialist={specialist}
                        key={specialist.id}
                        index={key}
                        remove={this.handleAssign}
                        hideCosts
                      />
                    ))}
                    {projectTeam && (
                      <AssignDropdown
                        label="Assign member"
                        specialists={specialists}
                        allSpecialists={projectTeam.specialists}
                        handleAssign={this.handleAssign}
                        userTypes={[S_REDGUY]}
                        closeOnChange
                        renderToModal
                      />
                    )}
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column computer={11} className="wrapper main">
            <Grid>
              <Grid.Row>
                <Grid.Column computer={8}>
                  <Field
                    name="project"
                    label="Project"
                    placeholder="Select"
                    component={RenderSelect}
                    options={this.props.projectsOptions}
                    validate={[required]}
                    isRequired
                    onChange={this.selectProject}
                    padded
                  />
                </Grid.Column>
                <Grid.Column computer={8}>
                  <Field
                    name="epic"
                    label="Module"
                    placeholder="Select"
                    component={RenderSelect}
                    options={epicsOptions}
                    validate={[required]}
                    isRequired
                    disabled={!epicsOptions.length}
                    padded
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="fluid">
                <Grid.Column computer={16}>
                  <Field
                    name="name"
                    label="Summary"
                    placeholder="Type your summary here"
                    className="area"
                    component={InputField}
                    validate={[required, maxLength80]}
                    isRequired
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="description"
                    component={RenderTextArea}
                    label="Description"
                    placeholder="Type your description here"
                    className="area"
                    validate={[required]}
                    isRequired
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="user_story"
                    component={RenderTextArea}
                    label="User Story"
                    placeholder="Type your user story here"
                    className="area"
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="deliverables"
                    component={RenderTextArea}
                    label="Acceptance Criteria"
                    placeholder="Type your acceptance criterea here"
                    className="area"
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="business_requirements"
                    component={RenderTextArea}
                    label="Business Requirements"
                    placeholder="Type your business requirements here"
                    className="area"
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="business_rules"
                    component={RenderTextArea}
                    label="Business Rules"
                    placeholder="Type your business rules here"
                    className="area"
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="notes"
                    component={RenderTextArea}
                    label="Solution Design"
                    placeholder="Type your solution design here"
                    className="area"
                    large
                    padded
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={4} floated="right" textAlign="right">
            <DvBlueButton
              type="button"
              className="dv-blue inverted transparent"
              onClick={close}
            >
              Cancel
            </DvBlueButton>
            <DvBlueButton
              loading={submitting}
              disabled={submitting}
              className="dv-blue"
            >
              Create
            </DvBlueButton>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const withForm = reduxForm({
  form: "CreateTaskForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: false,
  keepDirtyOnReinitialize: false,
  onSubmitFail: (error, dispatch, submitError, props) => {
    if (!!error) props.showSubmitErrorModal();
  }
});

export default withForm(CreateTaskForm);
