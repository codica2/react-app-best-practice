import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Lazyload from "../../utils/hoc/Lazyload";
import EnchancedRoute from "../../utils/hoc/EnchancedRoute";

import HeaderBasic from "@components/HeaderBasic";
import SideBarLeft from "@components/SideBarLeft";
import SideBarRight from "@components/SideBarRight";
import Loader from "@components/common/Loader";
import Project from "./project";

import { ContainerLarge } from "@styled/Containers";
import MainContainer from "@styled/MainContainer";

import { sidebarOperations } from "@ducks/sidebar";
import { getUserData } from "@ducks/user/actions";

import NotFound from "@components/NotFound";
import DeleteConfirmation from "@UI/modals/DeleteConfirmation";
import SubmitErrorModal from "@components/common/modals/SubmitErrorModal";

const loading = () => <Loader loading transparent />;

const Dashboard = Lazyload(() => import("@components/Dashboard"), loading),
  Search = Lazyload(() => import("@components/Search"), loading),
  About = Lazyload(() => import("./about"), loading),
  Teams = Lazyload(() => import("./teams"), loading);

const DashboardLayout = ({
  match,
  sidebar: { opened },
  toogleSidebar,
  submitError,
  confirmModal
}) => (
  <div>
    <HeaderBasic match={match} />
    <MainContainer sidebarOpened={opened} sidebarCondition={true}>
      <SideBarLeft />
      <ContainerLarge>
        <Switch>
          <EnchancedRoute
            exact
            path={`${match.url}`}
            component={Dashboard}
            title="Dashboard"
          />
          <EnchancedRoute
            exact
            path={`${match.url}/about`}
            component={About}
            title="Your Profile"
          />
          <EnchancedRoute path={`${match.url}/project`} component={Project} />
          <EnchancedRoute
            exact
            path={`${match.url}/search`}
            component={Search}
            title="Search Specialist"
          />
          <EnchancedRoute
            exact
            path={`${match.url}/specialist/:id([0-9]+)`}
            component={About}
          />
          <EnchancedRoute
            exact
            path={`${match.url}/teams`}
            component={Teams}
            title="Teams"
          />
          <Route component={NotFound} />
        </Switch>
      </ContainerLarge>
      <SideBarRight opened={opened} toggle={toogleSidebar} />
    </MainContainer>

    <SubmitErrorModal isOpen={submitError} />
    <DeleteConfirmation isOpen={!!confirmModal} {...confirmModal} />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    sidebar: state.sidebar,
    submitError: state.modals.submitError,
    confirmModal: state.modals.confirmModal
  };
};

export default connect(
  mapStateToProps,
  {
    ...sidebarOperations,
    getUserData
  }
)(DashboardLayout);
