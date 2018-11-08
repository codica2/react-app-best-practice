import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import Skills from "./Skills";

import { skillsOperations } from "@ducks/skills";

import {
  updateIndustryFetch,
  updateProfileSuccess,
  updateProfileFail
} from "@ducks/profile/actions";

import { showSubmitErrorModal } from "@ducks/modals/actions";

import { getDataForSelect } from "@utilities/selectors";

const makeMapStateToProps = () => {
  const prepareIndustries = getDataForSelect(),
    prepareProjectTypes = getDataForSelect(),
    prepareExperienceLevels = getDataForSelect(),
    prepareSkills = getDataForSelect();

  const mapStateToProps = (state, props) => {
    const {
      profile: { info, industry },
      skills,
      experienceLevels,
      industriesReducer: { industries, loading: industriesLoading },
      projectTypesReducer: { projectTypes, loading: projectTypesLoading }
    } = state;

    let renderSkills = [];

    industry.skills &&
      industry.skills.forEach(item => {
        renderSkills.push({ label: item["name"], value: item["id"] });
      });

    return {
      avatar: info.avatar,
      userId: state.user.id,
      skills: prepareSkills(skills, "value", "label"),
      industries: prepareIndustries(industries),
      industriesLoading,
      experienceLevels: prepareExperienceLevels(experienceLevels),
      experienceLevelsLoading: experienceLevels.loading,
      projectTypes: prepareProjectTypes(projectTypes),
      educations: info.educations,
      work_experiences: info.work_experiences,
      projectTypesLoading,
      initialValues: {
        ...industry,
        project_type: industry.project_type && industry.project_type.id,
        skills_attributes: renderSkills
      },
      nextLocation: state.modals.nextLocation
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = {
  ...skillsOperations,
  showSubmitErrorModal
};

const withConnect = connect(
  makeMapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: "SkillsForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
  onSubmit: updateIndustryFetch,
  onSubmitSuccess: updateProfileSuccess,
  onSubmitFail: updateProfileFail
});

const enhance = compose(
  withConnect,
  withReduxForm
);

export default enhance(Skills);
