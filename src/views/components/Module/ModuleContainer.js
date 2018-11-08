import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import ModuleFrom from "./ModuleForm";
import { updateEpicFetch, epicUpdated } from "@ducks/epics/actions";

import { displayError } from "@utilities";
import { oneOfRoles } from "@views/utils/functions";
import { S_REDGUY } from "@utilities";
import { deleteEpicFetch, epicSelfUpdate } from "@ducks/epics/actions";
import { compose } from "redux";

const withForm = reduxForm({
  form: "EditModuleForm",
  onSubmit: updateEpicFetch,
  onSubmitSuccess: epicUpdated,
  onSubmitFail: displayError,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false
});

const mapStateToProps = (state, props) => {
  const { num } = props.match.params;
  const epicId = state.epics.allIds[num - 1];

  return {
    initialValues: state.epics.byId[epicId],
    hasPermission: oneOfRoles(state.user.role, S_REDGUY)
  };
};

const mapDispatchToProps = {
  deleteEpicFetch,
  epicSelfUpdate
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect,
  withForm
);

export default enhance(ModuleFrom);
