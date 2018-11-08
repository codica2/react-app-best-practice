import React from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "@components/common/Loader";
import NotFound from "@components/NotFound";

import Lazyload from "../../../utils/hoc/Lazyload";
import EnchancedRoute from "../../../utils/hoc/EnchancedRoute";
import { S_REDGUY, CUSTOMER } from "@utilities";

const loading = () => <Loader loading transparent />;

const CreateProject = Lazyload(() => import("./create"), loading),
  ProjectWithId = Lazyload(() => import("./withId"), loading);

const Project = ({ match }) => {
  return (
    <Switch>
      <EnchancedRoute
        path={`${match.url}/new`}
        component={CreateProject}
        allowed={[S_REDGUY, CUSTOMER]}
        title="Create project"
      />
      <EnchancedRoute
        path={`${match.url}/:projectId([0-9]+)`}
        component={ProjectWithId}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Project;
