import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Kanban from "@components/Kanban";
import Module from "@components/Module";
import { ModuleNotFound } from "@components/NotFound";

const ModuleLayout = ({ epicIds }) => {
  const rx = epicIds.map((id, key) => key + 1).join("|");

  return (
    <Switch>
      <Route
        exact
        path={`/dashboard/project/:projectId/module/:num(${rx})/:status(view)`}
        component={Kanban}
      />

      <Route
        exact
        path={`/dashboard/project/:projectId/module/:num(${rx})/:status(edit)`}
        component={Module}
      />
      <Redirect
        from={`/dashboard/project/:projectId/module/:num(${rx})`}
        to="/dashboard/project/:projectId/module/:num/view"
      />
      <Route component={ModuleNotFound} />
    </Switch>
  );
};

export default ModuleLayout;
