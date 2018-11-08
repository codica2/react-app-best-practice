import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Overview from "./Overview";
import ProjectCard from "./ProjectCard";

class ProjectsContainer extends Component {
  static propTypes = {
    summary: PropTypes.arrayOf(PropTypes.object),
    projects: PropTypes.object
  };

  static defaultProps = {
    summary: [],
    projects: {}
  };

  getCurrentEpic(epics) {
    let start = moment().startOf("day"),
      etaEpics = [];

    etaEpics = epics
      ? epics.filter(task => {
          return (
            moment(task.eta).isSame(start) || moment(task.eta).isAfter(start)
          );
        })
      : null;

    if (etaEpics) {
      let curentEpics = etaEpics.sort((a, b) => {
        return new Date(a.eta) - new Date(b.eta);
      });

      return curentEpics[0];
    }
  }

  render() {
    const { projects, summary } = this.props;

    return (
      <div className="projects">
        <div>
          <Overview projects={projects} />

          {projects.allIds.map(id => {
            let info = null;

            summary &&
              summary.forEach(element => {
                if (element[id]) {
                  info = element[id];
                }
              });

            return (
              <ProjectCard
                key={id}
                data={projects.byId[id]}
                summary={info}
                getCurrentEpic={this.getCurrentEpic}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsContainer;
