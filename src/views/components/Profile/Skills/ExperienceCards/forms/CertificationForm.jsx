import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Form, Field, change } from "redux-form";
import { Grid } from "semantic-ui-react";

import InputField from "@UI/inputs/InputField";
import SelectField from "@UI/inputs/SelectField";
import RenderTextArea from "@UI/inputs/TextArea";
import { DvBlueButton } from "@styled/DVButton";

import { getYearsForSelect } from "../../helpers/functions";
import { required, maxLength500 } from "@views/utils/validate";

import { showSubmitErrorModal } from "@ducks/modals/actions";

class EducationForm extends Component {
  state = {
    fetch: true,
    started: null,
    finished: null,
    disabled: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.education && this.state.fetch) {
      if (nextProps.education.started_at) {
        this.setState({
          started: nextProps.education.started_at,
          disabled: false
        });
      }

      if (nextProps.education.finished_at) {
        this.setState({
          finished: nextProps.education.finished_at
        });
      }
      this.setState({ fetch: false });
    }
  }

  handleSelectChange = (e, value) => {
    if (value > this.state.finished) {
      this.setState({ started: value });
      this.props.dispatch(change("EducationForm", "finished_at", null));
    }

    this.setState({ started: value, disabled: false });
  };

  render() {
    const { handleSubmit, submitting, close } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <Field
                name="name"
                label="Education institution"
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
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Field
                name="specialisation"
                label="Area of study"
                component={InputField}
                validate={[required]}
                isRequired
              />
              <Field
                name="degree"
                label="Degree/Certificate/Course"
                component={InputField}
                validate={[required]}
                isRequired
              />
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
                onClick={close}
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
      </Form>
    );
  }
}

const withForm = reduxForm({
  form: "EducationForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  onSubmitFail: (error, dispatch, submitError, props) => {
    if (error) props.showSubmitErrorModal();
  }
});

const mapStateToProps = (state, ownProps) => {
  const { education = {} } = ownProps;

  const initialValues = { ...education };

  initialValues.started_at = education.started_at || null;
  initialValues.finished_at = education.finished_at || null;

  return {
    initialValues
  };
};

export default connect(
  mapStateToProps,
  { showSubmitErrorModal }
)(withForm(EducationForm));
