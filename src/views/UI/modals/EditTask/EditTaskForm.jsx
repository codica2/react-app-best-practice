import React, { Component } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import { Form, Field } from "redux-form";

import { taskStatuses } from "@views/utils/selects";

import Datepicker from "@UI/inputs/Datepicker";
import FileUploader from "@UI/inputs/FileUploader";
import TextArea from "@UI/inputs/TextArea/Async";
import InputField from "@UI/inputs/InputField/Async";
import SelectField from "@UI/inputs/SelectField";
import AssignDropdown from "@UI/AssignDropdown";
import SpecialistTile from "@UI/PersonTile/SpecialistTile";
import { CheckboxField } from "@UI/inputs/Checkbox/CheckboxField";

import { minLength2, maxLength50, formatCurrency } from "@views/utils/validate";
import { PORT, S_REDGUY, displayError } from "@utilities";

class EditTaskForm extends Component {
  state = {
    totalCost: this.props.epicTask.cost,
    loadingFees: {
      dv_fee: false,
      sale_fee: false
    }
  };

  removeSpecialist = id => {
    this.handleAssign("remove", id);
  };

  handleSubmit = (name, value) => {
    const {
      epicTask: { id, epic_id }
    } = this.props;

    return axios({
      method: "PUT",
      url: `${PORT}/api/v1/epics/${epic_id}/tasks/${id}`,
      data: {
        task: {
          [name]: value
        }
      }
    }).then(response => this.props.updateTask(response));
  };

  handleAssign = (type, specialist_id) => {
    const {
      epicTask: { id, epic_id }
    } = this.props;

    let payload = {};

    if (type === "assign") {
      payload = {
        method: "PUT",
        url: `${PORT}/api/v1/epics/${epic_id}/tasks/${id}/assign`,
        data: {
          specialist_id
        }
      };
    } else
      payload = {
        method: "DELETE",
        url: `${PORT}/api/v1/epics/${epic_id}/tasks/${id}/remove/${specialist_id}`
      };

    axios(payload)
      .then(response => this.props.updateTask(response))
      .catch(displayError);
  };

  handleCost = specId => {
    const {
      epicTask: { id, epic_id },
      projectId,
      formValues
    } = this.props;

    axios({
      method: "PUT",
      url: `${PORT}/api/v1/epics/${epic_id}/tasks/${id}/specialist_cost/${specId}`,
      data: {
        costs: {
          cost: formValues["EditTaskForm"].values["cost_spec_" + specId],
          project_id: projectId
        }
      }
    })
      .then(resp => {
        this.props.updateTask(resp);
      })
      .catch(error => console.error(error));
  };

  handleFees = (event, newVal, prevVal, name) => {
    const { change } = this.props;

    this.setState({
      loadingFees: {
        [name + "_loading"]: true
      }
    });

    this.handleSubmit(name, newVal)
      .then(resp => {
        this.setState({
          loadingFees: {
            [name + "_loading"]: false
          }
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          [name + "_loading"]: false
        });
        change(name, prevVal);
      });
  };

  render() {
    const {
      userRole,
      handleSubmit,
      projectTeam,
      ownCosts,
      initialValues: { cost: totalCost, specialists }
    } = this.props;

    const { dv_fee_loading, sale_fee_loading } = this.state;

    const disabled = userRole === S_REDGUY ? false : true;

    return (
      <Grid as={Form} onSubmit={handleSubmit} padded>
        <Grid.Row className="fluid">
          <Grid.Column computer={5} className="wrapper aside">
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Field
                    name="eta"
                    component={Datepicker}
                    type="date"
                    label="ETA"
                    placeholder="Due date"
                    className="estimate inline-in-modal"
                    selfSubmit
                    disabled={disabled}
                  />
                </Grid.Column>

                <Grid.Column>
                  <Field
                    name="state"
                    label="Status"
                    placeholder="Select state"
                    className="status inline-in-modal"
                    component={SelectField}
                    options={taskStatuses}
                    selfSubmit
                    disabled={disabled}
                    search={false}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Field
                    name="attached_files"
                    type="text"
                    label="Attach files"
                    className="area"
                    component={FileUploader}
                    onSelfSubmit={this.handleSubmit}
                    deleteCallback={this.props.updateTask}
                    dropzone
                    disabled={disabled}
                    padded
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <div className="specialistsWrapper">
                    {userRole === S_REDGUY && (
                      <div className="totalCostWrapper">
                        <div className="totalCosts">
                          <p className="label">Total costs</p>
                          <span className="total">
                            <i className="fas fa-dollar-sign" />
                            <span>{formatCurrency(totalCost)}</span>
                          </span>
                        </div>
                        <div className="fees">
                          <Field
                            name="dv_fee"
                            component={CheckboxField}
                            label={<label>DV Fee 20%</label>}
                            disabled={dv_fee_loading}
                            onChange={this.handleFees}
                          />
                          <Field
                            name="sale_fee"
                            component={CheckboxField}
                            label={<label>Sales Fee 30%</label>}
                            disabled={sale_fee_loading}
                            onChange={this.handleFees}
                          />
                        </div>
                      </div>
                    )}
                    <div className="specialistsInnerWrapper">
                      {specialists.map((specialist, key) => (
                        <SpecialistTile
                          specialist={specialist}
                          key={specialist.id}
                          index={key}
                          specialistId={this.props.userId}
                          userRole={userRole}
                          ownCosts={ownCosts}
                          remove={this.removeSpecialist}
                          handleSubmit={this.handleCost}
                        />
                      ))}
                    </div>
                    {projectTeam && (
                      <AssignDropdown
                        label="Add assignee"
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
                <Grid.Column computer={16}>
                  <Field
                    name="name"
                    label="Summary"
                    placeholder={
                      disabled ? "No summary" : "Type your summary here"
                    }
                    component={InputField}
                    className="transparent area"
                    selfSubmit
                    validate={[minLength2, maxLength50]}
                    disabled={disabled}
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="description"
                    component={TextArea}
                    label="Description"
                    placeholder={
                      disabled ? "No description" : "Type your description here"
                    }
                    className="transparent area"
                    selfSubmit
                    disabled={disabled}
                    autoHeight
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="user_story"
                    component={TextArea}
                    label="User Story"
                    placeholder={
                      disabled ? "No user story" : "Type your user story here"
                    }
                    className="transparent area"
                    selfSubmit
                    disabled={disabled}
                    autoHeight
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="deliverables"
                    component={TextArea}
                    label="Acceptance Criteria"
                    placeholder={
                      disabled
                        ? "No acceptance criterea"
                        : "Type your acceptance criterea here"
                    }
                    className="transparent area"
                    selfSubmit
                    disabled={disabled}
                    autoHeight
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="business_requirements"
                    component={TextArea}
                    label="Business Requirements"
                    placeholder={
                      disabled
                        ? "No business requirements"
                        : "Type your business requirements here"
                    }
                    className="transparent area"
                    selfSubmit
                    disabled={disabled}
                    autoHeight
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="business_rules"
                    component={TextArea}
                    label="Business Rules"
                    placeholder={
                      disabled
                        ? "No business rules"
                        : "Type your business rules here"
                    }
                    className="transparent area"
                    selfSubmit
                    disabled={disabled}
                    autoHeight
                    large
                    padded
                  />
                </Grid.Column>

                <Grid.Column computer={16}>
                  <Field
                    name="notes"
                    component={TextArea}
                    label="Solution Design"
                    placeholder={
                      disabled
                        ? "No solution design"
                        : "Type your solution design here"
                    }
                    className="transparent area"
                    selfSubmit
                    disabled={disabled}
                    autoHeight
                    large
                    padded
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default EditTaskForm;
