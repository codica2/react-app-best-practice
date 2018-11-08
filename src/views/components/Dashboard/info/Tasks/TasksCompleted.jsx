import React from "react";
import PropTypes from "prop-types";

import StyledDashboardCard from "../StyledDashboardCard";
import ProgressBar from "@UI/ProgressBar";

import { colors } from "@styled/constants/colors";

const TasksCompleted = ({ completedEpics, completedTasks }) => (
  <StyledDashboardCard size={{ col: 1, row: 1 }}>
    <div className="titleWrapper">
      <div>
        <p>Completed</p>
      </div>
    </div>

    <div className="projectContainer info-completed">
      <div className="team" />
      <div className="progress">
        <div className="progressItem">
          <div className="progressBar">{completedEpics}</div>
          <ProgressBar percents={100} strokeColor={colors.blue} />
          <span>Epics</span>
        </div>
        <div className="progressItem">
          <div className="progressBar">{completedTasks}</div>
          <ProgressBar percents={100} strokeColor={colors.blue} />
          <span>Modules</span>
        </div>
        <div className="progressItem">
          <div className="progressBar">0</div>
          <ProgressBar percents={100} strokeColor={colors.blue} />
          <span>Projects</span>
        </div>
      </div>
    </div>
  </StyledDashboardCard>
);

TasksCompleted.propTypes = {
  completedEpics: PropTypes.number,
  completedTasks: PropTypes.number
};

TasksCompleted.defaultProps = {
  completedEpics: 0,
  completedTasks: 0
};

export default TasksCompleted;
