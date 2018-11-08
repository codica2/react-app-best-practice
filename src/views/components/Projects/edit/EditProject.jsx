import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";

import EditProjectForm from "./EditProjectForm";
import ModuleCard from "../ModuleCard";

import { updateProject, publishProject } from "@ducks/projects/actions";
import {
  showProjectTeam,
  removeSpecialistFromTeam
} from "@ducks/teams/actions";
import { getSkills } from "@ducks/skills/actions";
import { getProjectTypes } from "@ducks/projectTypes/actions";

import {
  PORT,
  CLIENT,
  SPECIALIST,
  S_REDGUY,
  createNotification
} from "@utilities";

import { getProjectTeam, getCustomTeams } from "@ducks/teams/selectors";
import { getDataForSelect } from "@utilities/selectors";

class EditProject extends Component {
  static defaultProps = {
    projectWithId: {}
  };

  componentDidMount() {
    const {
      location: { state },
      match: { params }
    } = this.props;

    this.props.getSkills();
    this.props.getProjectTypes();

    if (params.projectId) {
      this.props.showProjectTeam(params.projectId);
    }

    if (state && state.errors)
      createNotification({ type: "warning", text: state.errors });

    if (state && state.from && state.from.state)
      createNotification({ type: "warning", text: state.from.state.errors });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.projectId !== nextProps.match.params.projectId
    ) {
      this.props.showProjectTeam(nextProps.match.params.projectId);
    }
  }

  handleAssignTeam = id => {
    const {
      match: { params }
    } = this.props;

    return axios({
      method: "POST",
      url: `${PORT}/api/v1/teams/${id}/invite_team_members`,
      data: {
        project_id: params.projectId
      }
    })
      .then(() => {
        createNotification({
          type: "success",
          text: "Team was invited"
        });
      })
      .catch(error => {
        const {
          response: { data }
        } = error;

        createNotification({
          type: data && data.errors ? "warning" : "error",
          text: data && data.errors
        });

        console.error(error);
      });
  };

  handleSkills = (e, name) => {
    let skillsIds = [];
    for (let key in e) {
      e[key].value && skillsIds.push(e[key].value);
    }

    this.onSelfSubmit("skill_ids", skillsIds);
  };

  onSelfSubmit = (name, value) => {
    const {
      projectWithId: { id }
    } = this.props;

    return axios({
      method: "PUT",
      url: `${PORT}/api/v1/projects/${id}`,
      data: {
        project: {
          [name]: value
        }
      }
    }).then(res => {
      this.props.updateProject(res);

      return res.data;
    });
  };

  handleRemove = (type, id) => {
    const {
      removeSpecialistFromTeam,
      projectWithId: {
        team: { id: team_id }
      }
    } = this.props;

    removeSpecialistFromTeam(team_id, id);
  };

  submit = values => this.props.publishProject(values);

  render() {
    const {
      userId,
      handleSubmit,
      usertype,
      userRole,
      projectWithId: { id: projectId },
      epics
    } = this.props;

    return (
      <Fragment>
        <EditProjectForm
          {...this.props}
          handleSubmit={handleSubmit(this.submit)}
          handleAssignTeam={this.handleAssignTeam}
          onSelfSubmit={this.onSelfSubmit}
          handleSkills={this.handleSkills}
          handleRemove={this.handleRemove}
          userRole={userRole}
          userId={userId}
        />

        <div className="moduleWrapper">
          {epics.allIds.map((id, key) => (
            <ModuleCard
              key={id}
              epic={epics.byId[id]}
              number={key + 1}
              project={projectId}
            />
          ))}
          {(usertype === CLIENT || userRole === S_REDGUY) && (
            <div className="dragContainer addModuleContainer">
              <h3>&nbsp;</h3>
              <div className="module addModule">
                <NavLink
                  to={`/dashboard/project/${projectId}/module/new`}
                  className="addButton"
                >
                  <span className="plus" />
                  <span className="add">Add module</span>
                </NavLink>
              </div>
            </div>
          )}
          {usertype === SPECIALIST && epics.allIds.length === 0 && (
            <div className="noModules">
              <p>No modules yet</p>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const {
    projects,
    teams: { byId: allTeams },
    projectTypesReducer: { projectTypes },
    skills
  } = state;

  const projectWithId = projects.byId[params.projectId] || {};

  const projectType = projectTypes.find(
    type => type.id === projectWithId.project_type_id
  );

  return {
    userId: state.user.id,
    usertype: state.user.type,
    userRole: state.user.role,
    projectWithId,
    initialValues: {
      ...projectWithId,
      skills: getDataForSelect()(projectWithId.skills, "value", "label")
    },
    projectTeam: getProjectTeam()(allTeams, params.projectId),
    allCustomTeams: getCustomTeams(allTeams),
    projectTypes,
    projectType,
    skillsOptions: getDataForSelect()(skills, "value", "label"),
    epics: state.epics
  };
};

const mapDispatchToProps = {
  updateProject,
  publishProject,
  showProjectTeam,
  removeSpecialistFromTeam,
  getSkills,
  getProjectTypes
};

const withForm = reduxForm({
  form: "EditProjectForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: false
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withForm(EditProject));
