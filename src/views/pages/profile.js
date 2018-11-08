import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isDirty, hasSubmitSucceeded } from "redux-form";
import { Route, Switch } from "react-router-dom";

import HeaderBasic from "@components/HeaderBasic";
import SubHeader from "@components/Profile/SubHeader";
import SubmitErrorModal from "@components/common/modals/SubmitErrorModal";
import ConfirmSubmitModal from "@components/common/modals/ConfirmSubmitModal";
import ConfirmationPrompt from "@components/Profile/ConfirmationPrompt";
import NotFound from "@components/NotFound";

import MainContainer from "@styled/MainContainer";
import { Container } from "@styled/Containers";

import EnchancedRoute from "@views/utils/hoc/EnchancedRoute";

import { getUserData } from "@ducks/user/actions";
import { skillsOperations } from "@ducks/skills";
import { industryOperations } from "@ducks/industries";
import { experienceLevelOperations } from "@ducks/experienceLevels";
import { projectTypesOperations } from "@ducks/projectTypes";

import { isSpecialist } from "@ducks/user/selectors";
import { getAllUrlParams } from "@views/utils/functions";

import { specialistRoutes, clientRoutes } from "../routes/profile";

const percents = {
  profile: null,
  industry: null,
  company: null,
  billing: null
};

class ProfileLayout extends Component {
  componentDidMount() {
    this.props.getUserData();
    this.props.getIndustries();
    this.props.getExperienceLevels();
    this.props.getProjectTypes();
  }

  render() {
    const {
      userRole,
      isSpecialist,
      modals: { submitError, confirmSubmit },
      form
    } = this.props;

    const routes = isSpecialist ? specialistRoutes : clientRoutes;
    const isEditing = getAllUrlParams().edit || null;

    return (
      <div>
        <HeaderBasic />
        <MainContainer>
          <Container>
            <SubHeader
              percents={percents}
              routes={routes}
              userRole={userRole}
            />
            <Switch>
              {routes.map((route, key) => (
                <EnchancedRoute
                  {...route}
                  key={route.name}
                  title={route.label}
                  extraProps={{ step: key + 1, routes, isEditing }}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Container>
        </MainContainer>

        <SubmitErrorModal isOpen={submitError} />
        <ConfirmSubmitModal isOpen={!!confirmSubmit} {...confirmSubmit} />
        <ConfirmationPrompt
          shouldConfirm={form.dirty && !form.submitSucceeded}
          formId={form.id}
        />
      </div>
    );
  }
}

ProfileLayout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  userRole: PropTypes.string.isRequired,
  isSpecialist: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  modals: PropTypes.object
};

const mapStateToProps = (state, props) => {
  let form = {};

  for (let item in state.form) {
    form = {
      id: item,
      dirty: isDirty(item)(state),
      submitSucceeded: hasSubmitSucceeded(item)(state)
    };
  }

  return {
    form,
    userRole: state.user.role,
    isSpecialist: isSpecialist()(state.user),
    modals: state.modals
  };
};

const mapDispatchToProps = {
  getUserData,
  ...skillsOperations,
  ...industryOperations,
  ...experienceLevelOperations,
  ...projectTypesOperations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLayout);
