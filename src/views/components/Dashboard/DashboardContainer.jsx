import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import moment from "moment";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Dashboard from "./Dashboard";

import { getAllProjects } from "@ducks/projects/actions";
import { getProjectsEpics } from "@ducks/projects/selectors";

import { PORT, SPECIALIST, S_REDGUY, getUserUrl } from "@utilities";

class DashboardContainer extends Component {
  static propTypes = {
    epics: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    epics: []
  };

  state = {
    summary: [],
    tasks: []
  };

  componentDidMount() {
    this.props.getAllProjects();

    this.fetchSummary();
  }

  fetchSummary = () => {
    const { userId, usertype } = this.props;

    const user = getUserUrl(usertype);

    axios({
      method: "GET",
      url: `${PORT}/api/v1/${user}/${userId}/dashboard`
    })
      .then(({ data }) => this.setState({ summary: data }))
      .catch(error => console.error(error));

    axios({
      method: "GET",
      url: `${PORT}/api/v1/${user}/${userId}/week_tasks`
    })
      .then(({ data }) => this.setState({ tasks: data }))
      .catch(error => console.error(error));
  };

  getEtaForWeek(array = [], week = false, count) {
    const start = week ? moment().startOf("week") : moment().startOf("day"),
      end = moment().endOf("week");
    let etaTasks = [];

    etaTasks = array
      ? array.filter(task => {
          return (
            moment(task.eta).isBetween(start, end) ||
            moment(task.eta).isSame(start)
          );
        })
      : null;

    etaTasks.sort((a, b) => {
      return new Date(a.eta) - new Date(b.eta);
    });

    if (typeof count === "number") return etaTasks.splice(0, count);

    return etaTasks;
  }

  assignProjectName = (tasks = []) => {
    const { projects } = this.props;

    tasks.forEach(task => {
      let proj = null;

      if (projects.loaded) {
        proj = task.project_id;
      }

      task["project_name"] = proj ? projects.byId[proj].name : "Unnamed";
    });

    return tasks;
  };

  renderDefault = () => {
    const { usertype, userRole } = this.props;

    if (usertype === SPECIALIST && userRole !== S_REDGUY) {
      return (
        <div className="default-dashboard">
          <h1>Welcome!</h1>
          <p>Well....What happens now?</p>

          <p>
            We review your profile and one of our Producers will match you to a
            client and invite you to a Project.
          </p>

          <p>
            (So make sure your profile indicates all your capabilities and skill
            sets so you don’t miss out)
          </p>

          <p>
            <NavLink className="link-green" to="/profile/info?edit">
              Update Profile
            </NavLink>
          </p>

          <p>See what Events are coming up!</p>

          <p>
            <a
              className="link-purple"
              href="http://lmgtfy.com/?q=events"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Meetups
            </a>
          </p>
        </div>
      );
    } else {
      return <div className="default">There are no projects</div>;
    }
  };

  render() {
    const { summary, tasks } = this.state;
    const { epics } = this.props;

    return (
      <Dashboard
        {...this.props}
        summary={summary}
        allEpics={epics}
        tasks={tasks}
        getEtaForWeek={this.getEtaForWeek}
        assignProjectName={this.assignProjectName}
        renderDefault={this.renderDefault}
      />
    );
  }
}

const makeMapStateToProps = () => {
  const projectsEpics = getProjectsEpics();

  const mapStateToProps = (state, props) => {
    return {
      userId: state.user.id,
      usertype: state.user.type,
      userRole: state.user.role,
      projects: state.projects,
      epics: projectsEpics(state.projects)
    };
  };

  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  {
    getAllProjects
  }
)(DashboardContainer);
