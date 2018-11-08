import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { reduxForm } from "redux-form";

import CreateProjectForm from "./CreateProjectForm";

import { skillsOperations } from "@ducks/skills";
import { projectTypesOperations } from "@ducks/projectTypes";
import { saveCreatedProgect } from "@ducks/projects/actions";
import { showSubmitErrorModal } from "@ducks/modals/actions";

import { getDataForSelect } from "@utilities/selectors";
import { isRedguy } from "@ducks/user/selectors";
import { PORT } from "@utilities";

class CreateProject extends Component {
  state = {
    customers: [],
    fetching: false,
    loading: false
  };

  componentDidMount() {
    this.props.getSkills();
    this.props.getProjectTypes();
  }

  fetchCustomers = () => {
    this.setState({ fetching: true });

    axios
      .get(`${PORT}/api/v1/customers/`)
      .then(({ data }) => {
        let options = [];

        data.forEach(customer => {
          options.push({
            value: customer.id,
            text: `${customer.first_name} ${customer.last_name}`
          });
        });

        this.setState({ customers: options, fetching: false });
      })
      .catch(error => this.setState({ fetching: false }));
  };

  submit = values => {
    this.setState({ loading: true });

    this.props.saveCreatedProgect(values, () =>
      this.setState({
        loading: false
      })
    );
  };

  render() {
    const { customers, loading, fetching } = this.state;
    const { handleSubmit } = this.props;

    return (
      <CreateProjectForm
        {...this.props}
        handleSubmit={handleSubmit(this.submit)}
        fetchCustomers={this.fetchCustomers}
        customersOptions={customers}
        fetching={fetching}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = () => {
  const prepareProjectTypes = getDataForSelect(),
    prepareSkills = getDataForSelect();

  const getRedguy = isRedguy();

  return state => {
    const {
      user,
      projectTypesReducer: { projectTypes },
      skills
    } = state;

    return {
      projectTypes: prepareProjectTypes(projectTypes, "value", "text"),
      skills: prepareSkills(skills, "value", "label"),
      isRedguy: getRedguy(user)
    };
  };
};

const mapDispatchToProps = {
  ...skillsOperations,
  ...projectTypesOperations,
  saveCreatedProgect,
  showSubmitErrorModal
};

const withForm = reduxForm({
  form: "CreateProjectForm",
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
  mapDispatchToProps
)(withForm(CreateProject));
