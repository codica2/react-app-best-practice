import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import PersonalDetails from "./PersonalDetails";

import {
  updateInfoFetch,
  updateProfileSuccess,
  updateProfileFail
} from "@ducks/profile/actions";

import { showSubmitErrorModal } from "@ducks/modals/actions";

import { isSpecialist } from "@ducks/user/selectors";
import { getDataForSelect } from "@utilities/selectors";

import languages from "./helpers/languages.json";

const makeMapStateToProps = () => {
  const getSpecialist = isSpecialist(),
    getLanguages = getDataForSelect();

  const mapStateToProps = (state, props) => {
    const {
      user,
      profile: { info }
    } = state;

    return {
      avatar: info.avatar,
      userId: state.user.id,
      userType: state.user.type,
      isSpecialist: getSpecialist(user),
      initialValues: {
        first_name: info.first_name,
        last_name: info.last_name,
        email: info.email,
        city: info.address && info.address.city,
        country: info.address && info.address.country,
        phone_number: info.phone_number,
        description: info.description,
        professional_experience_info: info.professional_experience_info
      },
      nextLocation: state.modals.nextLocation,
      languages: getLanguages(languages, "value", "label")
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
  form: "PersonalDetailsForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  onSubmit: updateInfoFetch,
  onSubmitSuccess: updateProfileSuccess,
  onSubmitFail: updateProfileFail
});

const enhance = compose(
  withConnect,
  withForm
);

export default enhance(PersonalDetails);
