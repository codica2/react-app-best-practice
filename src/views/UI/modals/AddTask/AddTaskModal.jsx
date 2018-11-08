import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";
import { formValueSelector } from "redux-form";

import CreateTaskForm from "./CreateTaskForm";
import StyledModal from "@styled/Modal";

import { createEpicTask } from "@ducks/tasks/actions";
import { showProjectTeam } from "@ducks/teams/actions";
import { getProjectEpics } from "@ducks/epics/actions";
import { showSubmitErrorModal } from "@ducks/modals/actions";

import { getDataForSelect } from "@utilities/selectors";
import { getProjectTeam } from "@ducks/teams/selectors";

class AddTaskModal extends Component {
  state = {
    open: false
  };

  close = () => {
    const close = document.querySelector("i.close.icon");
    close.click();
  };

  submit = data => this.props.createEpicTask(data).then(this.close);

  render() {
    const { trigger } = this.props;

    return (
      <StyledModal
        trigger={trigger}
        className="addTask hidden-icon"
        size="large"
        closeIcon
      >
        <Modal.Header className="ui">Create epic</Modal.Header>
        <CreateTaskForm
          {...this.props}
          onSubmit={this.submit}
          close={this.close}
        />
      </StyledModal>
    );
  }
}

const makeMapStateToProps = () => {
  const prepareProjects = getDataForSelect(),
    prepareEpics = getDataForSelect();

  const projectTeam = getProjectTeam();

  const mapStateToProps = (state, props) => {
    const { projects, epics } = state;

    const selector = formValueSelector("CreateTaskForm"),
      projectId = selector(state, "project");

    const epicId = epics.allIds[props.epic - 1];

    return {
      projectsOptions: prepareProjects(projects.byId),
      epicsOptions: prepareEpics(epics.byId),
      projectTeam: projectTeam(state.teams.byId, projectId),
      epicId,
      projectId,
      initialValues: {
        state: 0,
        project: props.project,
        epic: epicId && epicId.toString()
      }
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = {
  showProjectTeam,
  getProjectEpics,
  createEpicTask,
  showSubmitErrorModal
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(AddTaskModal);
