import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, change } from "redux-form";
import { Grid } from "semantic-ui-react";

import InputField from "@UI/inputs/InputField";
import SelectField from "@UI/inputs/SelectField";
import RenderTextArea from "@UI/inputs/TextArea";
import LocationFields from "../../helpers/LocationFields";

import { DvBlueButton } from "@styled/DVButton";

import { getYearsForSelect } from "../../helpers/functions";
import { required, maxLength500 } from "@views/utils/validate";

import { showSubmitErrorModal } from "@ducks/modals/actions";

class WorkExperienceForm extends Component {
  state = {
    fetch: true,
    started: null,
    finished: null,
    disabled: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.experience && this.state.fetch) {
      if (nextProps.experience.started_at) {
        this.setState({
          started:
            nextProps.experience.started_at.value ||
            nextProps.experience.started_at,
          disabled: false
        });
      }

      if (nextProps.experience.finished_at) {
        this.setState({
          finished:
            nextProps.experience.finished_at.value ||
            nextProps.experience.finished_at,
          fetchYears: false
        });
      }
      this.setState({ fetch: false });
    }
  }

  handleSelectChange = (e, value) => {
    if (value > this.state.finished) {
      this.setState({ started: value });
      this.props.dispatch(change("WorkExperienceForm", "finished_at", null));
    }
    this.setState({ started: value, disabled: false });
  };

  closeModal = ev => {
    ev.preventDefault();

    let close = document.querySelector("i.close.icon");
    close.click();
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <Field
                name="position"
                label="Title/Position/Role"
                component={InputField}
                validate={[required]}
                isRequired
              />
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={8}>
                    <Field
                      name="started_at"
                      label="From"
                      placeholder="Select"
                      component={SelectField}
                      onChange={this.handleSelectChange}
                      options={getYearsForSelect()}
                      validate={[required]}
                      isRequired
                    />
                  </Grid.Column>
                  <Grid.Column computer={8}>
                    <Field
                      name="finished_at"
                      label="To"
                      placeholder="Select"
                      component={SelectField}
                      disabled={this.state.disabled}
                      options={getYearsForSelect(this.state.started, true)}
                      validate={[required]}
                      isRequired
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Field
                name="name"
                label="Company/Project"
                component={InputField}
                validate={[required]}
                isRequired
              />
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <LocationFields />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Field
                name="description"
                label="Description"
                component={RenderTextArea}
                validate={[maxLength500]}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <DvBlueButton
                disabled={submitting}
                className="dv-blue inverted transparent"
                uppercase="true"
                onClick={this.closeModal}
              >
                Cancel
              </DvBlueButton>
            </Grid.Column>

            <Grid.Column textAlign="right">
              <DvBlueButton
                type="submit"
                className="dv-blue"
                loading={submitting}
                uppercase="true"
              >
                Save
              </DvBlueButton>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { experience = {} } = ownProps;

  const initialValues = { ...experience };

  initialValues.started_at = experience.started_at || null;
  initialValues.finished_at = experience.finished_at || null;

  return {
    initialValues
  };
};

const withForm = reduxForm({
  form: "WorkExperienceForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  onSubmitFail: (error, dispatch, submitError, props) => {
    if (error) props.showSubmitErrorModal();
  }
});

export default connect(
  mapStateToProps,
  {
    showSubmitErrorModal
  }
)(withForm(WorkExperienceForm));
