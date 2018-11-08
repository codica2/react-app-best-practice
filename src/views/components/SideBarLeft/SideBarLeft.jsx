import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";
import cx from "classnames";

import StyledSideBar from "@styled/SideBar";

import { getAllProjects } from "@ducks/projects/actions";
import { getSortedProjects } from "@ducks/projects/selectors";
import { IMAGE_PORT, CUSTOMER, S_REDGUY } from "@utilities/constants";

//TODO: permissions control point in redux
const permissions = {
  createProject: user => [S_REDGUY, CUSTOMER].some(role => role === user.role)
};

class SideBarLeft extends Component {
  componentDidMount() {
    this.props.getAllProjects();
  }

  renderCategory = (projects, title, withEpics = false) => {
    const { epics } = this.props;
    const linkClass = cx("project-link", {
      "with-epics": withEpics
    });

    return (
      !!projects.length && (
        <Fragment>
          {title && (
            <div className="title">
              <h4>{title}</h4>
            </div>
          )}
          <div className="projects">
            {projects &&
              projects.map(project => (
                <div className="project-wrapper" key={project.id}>
                  <NavLink
                    className={linkClass}
                    to={`/dashboard/project/${project.id}`}
                    key={project.id}
                  >
                    {project.logo.url ? (
                      <img
                        className="project-logo"
                        src={IMAGE_PORT + project.logo.url}
                        alt={project.name}
                      />
                    ) : (
                      <span className="project-logo no-logo">
                        {project.name[0]}
                      </span>
                    )}

                    <div className="project-name">{project.name}</div>
                  </NavLink>
                  {withEpics && (
                    <div className="modules">
                      {epics.loaded === epics.current &&
                        epics.allIds.map((id, key) => (
                          <NavLink
                            className="project-module"
                            to={`/dashboard/project/${project.id}/module/${key +
                              1}/view`}
                            key={id}
                          >
                            <span className="module-number">
                              {String(key + 1).padStart(2, 0)}.
                            </span>
                            &nbsp;
                            {epics.byId[id].name}
                          </NavLink>
                        ))}
                      {epics.loaded && !epics.allIds.length && (
                        <p className="no-epics">No modules</p>
                      )}

                      {epics.error && (
                        <p className="no-epics">
                          Error while loading epics, please try again
                        </p>
                      )}

                      {epics.loaded !== epics.current && epics.loading && (
                        <Dimmer active inverted>
                          <Loader active />
                        </Dimmer>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </Fragment>
      )
    );
  };

  render() {
    const {
      projects: { drafts, onReview, discovery },
      user
    } = this.props;

    return (
      <StyledSideBar className="left">
        <div className="title">
          <h4>Projects</h4>
        </div>
        {this.renderCategory(discovery, null, true)}
        {this.renderCategory(onReview, "Projects on review")}
        {this.renderCategory(drafts, "Projects on drafts")}
        {permissions.createProject(user) && (
          <NavLink
            className="project-link add-project"
            to="/dashboard/project/new"
          >
            <div className="add-project-button" />
            <div className="add-project-label">Add project</div>
          </NavLink>
        )}
      </StyledSideBar>
    );
  }
}

const makeMapStateToProps = () => {
  const getDraft = getSortedProjects("draft");
  const getReview = getSortedProjects("brief_submissions", "reviewed_by_admin");
  const getDiscovery = getSortedProjects("discovery");

  const mapStateToProps = (state, props) => {
    const { projects } = state;

    return {
      user: state.user,
      projects: {
        drafts: getDraft(projects),
        onReview: getReview(projects),
        discovery: getDiscovery(projects)
      },
      epics: state.epics
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = {
  getAllProjects
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(SideBarLeft);
