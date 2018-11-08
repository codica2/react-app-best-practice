import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import Trading from "./Trading";

import {
  updateCompanyFetch,
  updateProfileSuccess,
  updateProfileFail
} from "@ducks/profile/actions";

import { showSubmitErrorModal } from "@ducks/modals/actions";

import { getDataForSelect } from "@utilities/selectors";

const makeMapStateToProps = () => {
  const prepareIndusrries = getDataForSelect();

  const mapStateToProps = (state, props) => {
    const {
      profile: { info, company },
      industriesReducer: { industries }
    } = state;

    return {
      initialValues: {
        name: company.name,
        company_address: company.company_address,
        website: company.website,
        number_of_employers: company.number_of_employers,
        country: company.country,
        city: company.city,
        segment: company.segment,
        industry_area_id: company.industry_area_id,
        registered_name: company.registered_name,
        tell_about: company.tell_about,
        abn_acn: company.tell_about
      },

      userType: state.user.type,
      userId: state.user.id,
      avatar: info.avatar,
      industries: prepareIndusrries(industries),
      nextLocation: state.modals.nextLocation
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = {
  showSubmitErrorModal
};

const withConnect = connect(
  makeMapStateToProps,
  mapDispatchToProps
);

const withForm = reduxForm({
  form: "TradingForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  onSubmit: updateCompanyFetch,
  onSubmitSuccess: updateProfileSuccess,
  onSubmitFail: updateProfileFail
});

const enhance = compose(
  withConnect,
  withForm
);

export default enhance(Trading);
