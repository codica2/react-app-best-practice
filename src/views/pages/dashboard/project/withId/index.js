import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import EnchancedRoute from "@views/utils/hoc/EnchancedRoute";

import { Container } from "@styled/Containers";
import StyledProject from "@components/Projects/StyledProject";
import BoardSubHeader from "@components/BoardSubHeader";
import { ProjectNotFound } from "@components/NotFound";
import Loader from "@components/common/Loader";

import Lazyload from "../../../../utils/hoc/Lazyload";
import { getProjectEpics } from "@ducks/epics/actions";

const loading = () => <Loader loading transparent />;

const Module = Lazyload(() => import("./module"), loading),
  CreateModule = Lazyload(() => import("@components/CreateModule"), loading),
  EditProject = Lazyload(() => import("@components/Projects/edit"), loading);

class Project extends React.Component {
  static defaultProps = {
    project: {}
  };

  componentDidMount() {
    const { getProjectEpics, projectId } = this.props;
    getProjectEpics(projectId);
  }

  componentWillReceiveProps(nextProps) {
    const { projectId: prevProject } = this.props;
    const { projectId: nextProject, getProjectEpics } = nextProps;

    if (prevProject !== nextProject) {
      getProjectEpics(nextProject);
    }
  }

  render() {
    const { projects, project, epicIds } = this.props;
    const rx = projects.allIds.join("|");

    return (
      <Fragment>
        <BoardSubHeader />
        <Container indentBot sidebarCondition transparent dashboardContainer>
          <StyledProject>
            <Switch>
              <EnchancedRoute
                exact
                path={`/dashboard/project/:projectId(${rx})`}
                title={project.name}
                component={EditProject}
              />
              <EnchancedRoute
                path={`/dashboard/project/:projectId(${rx})/module/:num([0-9]+)`}
                title={project.name}
                component={Module}
                extraProps={{ epicIds }}
              />

              <EnchancedRoute
                exact
                path={`/dashboard/project/:projectId(${rx})/module/new`}
                title={project.name}
                component={CreateModule}
              />
              <Route component={projects.loading ? Loader : ProjectNotFound} />
            </Switch>
          </StyledProject>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    project: state.projects.byId[props.match.params.projectId],
    projectId: props.match.params.projectId,
    projects: state.projects,
    epicIds: state.epics.allIds
  };
};

const mapDispatchToProps = {
  getProjectEpics
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
