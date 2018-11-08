import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProgressBar from "@UI/ProgressBar";
import StyledDashboardCard from "../StyledDashboardCard";

import MembersDropdown from "@UI/MembersDropdown";

import { IMAGE_PORT } from "@utilities";
import { teamsOperations } from "@ducks/teams";

class ProjectCard extends Component {
  static propTypes = {
    summary: PropTypes.shape({
      all_modules: PropTypes.number,
      all_tasks: PropTypes.number,
      completed_modules: PropTypes.number,
      completed_tasks: PropTypes.number
    }),
    data: PropTypes.object,
    getCurrentEpic: PropTypes.func.isRequired
  };

  static defaultProps = {
    summary: {
      all_modules: 0,
      all_tasks: 0,
      completed_modules: 0,
      completed_tasks: 0
    },
    data: {}
  };

  componentDidMount() {
    const {
      data: { id }
    } = this.props;

    this.props.showProjectTeam(id);
  }

  renderProjectProgress = () => {
    const { summary } = this.props;

    let allModules = (summary && summary.all_modules) || 0,
      completedModules = (summary && summary.completed_modules) || 0,
      allTasks = (summary && summary.all_tasks) || 0,
      completedTasks = (summary && summary.completed_tasks) || 0,
      modulesPercent = Math.round((completedModules / allModules) * 100) || 0,
      tasksPercent = Math.round((completedTasks / allTasks) * 100) || 0;

    return (
      <div className="progress">
        <div className="progressItem">
          <div className="progressBar">{allModules}</div>
          <ProgressBar percents={modulesPercent} strokeColor="#4d4d4d" />
          <span>Modules</span>
        </div>
        <div className="progressItem">
          <div className="progressBar">{allTasks}</div>
          <ProgressBar percents={tasksPercent} strokeColor="#4d4d4d" />
          <span>Epics</span>
        </div>
        <div className="progressItem">
          <div className="progressBar">0%</div>
          <ProgressBar percents={0} strokeColor="#4d4d4d" />
          <span>Project progress</span>
        </div>
      </div>
    );
  };

  render() {
    const {
      data: { epics, name, logo },
      getCurrentEpic,
      projectTeam
    } = this.props;

    let currentEpic = epics && getCurrentEpic(epics);

    return (
      <StyledDashboardCard size={{ col: 2, row: 2 }} type="project">
        <div className="titleWrapper">
          {logo && logo.url ? (
            <img src={IMAGE_PORT + logo.url} alt={name} />
          ) : (
            <span className="projectNoLogo">{name[0]}</span>
          )}
          <div>
            <div className="title">{name}</div>
            <div className="subTitle">
              {currentEpic && currentEpic.name
                ? `Module: ${currentEpic.name}`
                : null}
            </div>
          </div>
        </div>

        <div className="projectContainer project">
          <div className="team">
            {projectTeam && projectTeam.specialists && (
              <MembersDropdown
                members={projectTeam.specialists}
                countToShow={3}
                position="bottom left"
                removeText="project"
                hideDelete
              />
            )}
          </div>

          {this.renderProjectProgress()}
        </div>
      </StyledDashboardCard>
    );
  }
}

const mapStatetoProps = (state, { data: { team } }) => {
  return { projectTeam: state.teams.byId[team.id] };
};

export default connect(
  mapStatetoProps,
  {
    ...teamsOperations
  }
)(ProjectCard);
