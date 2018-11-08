import React from "react";
import PropTypes from "prop-types";

import StyledDashboardCard from "../StyledDashboardCard";

const DueTasks = ({ allEpics, todaysEpics }) => {
  return (
    <StyledDashboardCard size={{ col: 1, row: 1 }} type="task_due">
      <div className="titleWrapper">
        <div className="title">Epics Due</div>
        <div className="subTitle">Today</div>
      </div>

      <div className="projectContainer">
        <div className="team" />
        <div className="progress">
          <div className="progressItem disabled">
            <div className="progressCount">{allEpics}</div>
            <span>All Epics</span>
          </div>
          <div className="progressItem">
            <div className="progressCount">{todaysEpics}</div>
            <span>Epics</span>
          </div>
        </div>
      </div>
    </StyledDashboardCard>
  );
};

DueTasks.propTypes = {
  allEpics: PropTypes.number,
  todaysEpics: PropTypes.number
};

DueTasks.defaultProps = {
  allEpics: 0,
  todaysEpics: 0
};

export default DueTasks;
