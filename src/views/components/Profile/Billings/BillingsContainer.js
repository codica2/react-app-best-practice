import { compose } from "redux";
import { connect } from "react-redux";
import { formValueSelector, reduxForm } from "redux-form";

import Billings from "./Billings";

import {
  updateBillingsFetch,
  updateProfileSuccess,
  updateProfileFail
} from "@ducks/profile/actions";

import { showSubmitErrorModal } from "@ducks/modals/actions";

const mapStateToProps = state => {
  const selector = formValueSelector("BillingsForm");
  return {
    initialValues: {
      beneficiary_account: state.profile.billings["beneficiary_account"],
      beneficiary_bank: state.profile.billings["beneficiary_bank"],
      beneficiary_name: state.profile.billings["beneficiary_name"],
      card_name: state.profile.billings["card_name"],
      card_number: state.profile.billings["card_number"],
      correspondent_bank: state.profile.billings["correspondent_bank"],
      iban: state.profile.billings["iban"],
      purpose_of_payment: state.profile.billings["purpose_of_payment"],
      swift_code: state.profile.billings["swift_code"],
      billing_type: state.profile.billings.billing_type
        ? String(state.profile.billings.billing_type)
        : "0"
    },
    userType: state.user.type,
    userId: state.user.id,
    billing_type: selector(state, "billing_type"),
    defaultTab: state.profile.billings.billing_type,
    avatar: state.profile.info.avatar,
    nextLocation: state.modals.nextLocation
  };
};

const mapDispatchToProps = {
  showSubmitErrorModal
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: "BillingsForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  onSubmit: updateBillingsFetch,
  onSubmitSuccess: updateProfileSuccess,
  onSubmitFail: updateProfileFail
});

const enhance = compose(
  withConnect,
  withReduxForm
);

export default enhance(Billings);
