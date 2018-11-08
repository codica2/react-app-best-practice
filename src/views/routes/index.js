import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { NotificationContainer } from "react-notifications";

import signIn from "../pages/signIn";
import Join from "../pages/join";
import confirmation from "../pages/confirmation";
import forgotPassword from "../pages/forgotPassword";
import confirmReset from "../pages/confirmReset";
import resetPassword from "../pages/resetPassword";
import createPassword from "../pages/createPassword";
import changePassword from "../pages/changePassword";

import NotFound from "@components/NotFound";
import PageLoader from "@components/common/PageLoader";

import defaultRoute from "./default";
import PrivateRoute from "../utils/hoc/PrivateRoute";
import GuestRoute from "../utils/hoc/GuestRoute";
import Lazyload from "../utils/hoc/Lazyload";
import RedirectRoute from "../utils/decorators/RedirectRoute";
import AssignRoute from "../utils/decorators/AssignRoute";
import history from "../../history";
import store from "../../state/store";

import { verifyToken } from "@ducks/user/actions";

import { getAllUrlParams } from "@views/utils/functions";
import FlexDirection from "@styled/FlexDirection";

import "react-notifications/lib/notifications.css";

const Profile = Lazyload(() => import("../pages/profile"), PageLoader);
const Dashboard = Lazyload(() => import("../pages/dashboard"), PageLoader);

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    history.listen(location => {
      const param = getAllUrlParams(location.search).hash;
      if (!param)
        scroll.scrollToTop({
          duration: 0,
          delay: 0,
          smooth: false
        });
    });

    store
      .dispatch(verifyToken(localStorage.jwt_token))
      .catch(error => console.error(error))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    //While loading one of two base layouts
    // Return PageLoader
    if (this.state.loading) return null;

    return (
      <FlexDirection>
        <Switch>
          <Route exact path="/" component={defaultRoute} />
          <Route exact path="/index.html" component={defaultRoute} />
          <GuestRoute exact path="/sign_in" component={signIn} />
          <GuestRoute path="/join" component={Join} />
          <GuestRoute path="/confirm_email" component={confirmation} />
          <GuestRoute path="/forgot_password" component={forgotPassword} />
          <GuestRoute path="/confirm_reset" component={confirmReset} />
          <GuestRoute path="/reset_password" component={resetPassword} />
          <GuestRoute path="/create_password" component={createPassword} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/change_password" component={changePassword} />

          <AssignRoute
            path="/api/v1/projects/:projectId/teams/:teamId/assign/:specialistId"
            assignPath="/dashboard/project/:projectId"
          />

          <AssignRoute
            path="/api/v1/teams/:teamId/assign/:specialistId"
            assignPath="/dashboard/teams"
          />

          <RedirectRoute
            path="/api/v1/:user/confirmation/:token"
            to="/create_password"
          />

          <RedirectRoute
            path="/api/v1/:user/password_reset/:token"
            to="/reset_password"
          />
          <Route component={NotFound} />
        </Switch>
        <NotificationContainer />
      </FlexDirection>
    );
  }
}

export default App;
