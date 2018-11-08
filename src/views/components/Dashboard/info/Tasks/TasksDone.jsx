import React from "react";
import PropTypes from "prop-types";

import StyledDashboardCard from "../StyledDashboardCard";

const TasksDone = ({ allTasks, completedTasks }) => (
  <StyledDashboardCard size={{ col: 1, row: 1 }} type="task_due">
    <div className="titleWrapper">
      <div className="title">Epics Done</div>
      <div className="subTitle">This week</div>
    </div>

    <div className="projectContainer info-done">
      <div className="team" />
      <div className="progress">
        <div className="progressItem disabled">
          <div className="progressBar">{`${allTasks}/${completedTasks}`}</div>
          <span>All Epics</span>
        </div>
      </div>
    </div>
  </StyledDashboardCard>
);

TasksDone.propTypes = {
  allTasks: PropTypes.number,
  completedTasks: PropTypes.number
};

TasksDone.defaultProps = {
  allTasks: 0,
  completedTasks: 0
};

export default TasksDone;
