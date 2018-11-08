import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import EditTaskForm from "./EditTaskForm";

import { displayError } from "@utilities";
import { taskStatuses } from "@views/utils/selects";
import { updateTaskFetch, taskUpdated, updateTask } from "@ducks/tasks/actions";
import { getProjectTeam } from "@ducks/teams/selectors";

const makeMapStateToProps = () => {
  const projectTeam = getProjectTeam();

  const mapStateToProps = (state, props) => {
    const epicTask = state.tasks.byId[props.taskId];
    const initialValues = { ...epicTask };
    let ownCosts = null;

    initialValues.state = taskStatuses.find(
      status => status.enum === epicTask.state
    ).value;

    epicTask.specialist_tasks &&
      epicTask.specialist_tasks.forEach(({ cost, specialist }) => {
        if (state.user.id === specialist.id) {
          ownCosts = cost;
        }
        initialValues["cost_spec_" + specialist.id] = cost;
      });

    return {
      userId: state.user.id,
      userRole: state.user.role,
      projectTeam: projectTeam(state.teams.byId, state.epics.current),
      initialValues,
      eta: epicTask && epicTask.eta,
      epicTask,
      projectId: state.epics.current,
      formValues: state.form,
      ownCosts
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = {
  updateTask
};

const withForm = reduxForm({
  form: "EditTaskForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  touchOnChange: true,
  onSubmit: updateTaskFetch,
  onSubmitSuccess: taskUpdated,
  onSubmitFail: displayError
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(withForm(EditTaskForm));
