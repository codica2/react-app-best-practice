import { reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import CreateModuleForm from "./CreateModuleForm";

import { createEpicFetch, epicCreated } from "@ducks/epics/actions";
import { showSubmitErrorModal } from "@ducks/modals/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    epics: state.epics
  };
};

const mapDispatchToProps = {
  showSubmitErrorModal
};

const withForm = reduxForm({
  form: "CreateModuleForm",
  onSubmit: createEpicFetch,
  onSubmitSuccess: epicCreated,
  onSubmitFail: (error, dispatch, submitError, props) => {
    if (error) props.showSubmitErrorModal();
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const enhance = compose(
  withConnect,
  withForm
);

export default enhance(CreateModuleForm);
