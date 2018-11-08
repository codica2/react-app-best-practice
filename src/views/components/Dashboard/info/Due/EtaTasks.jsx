import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import StyledDashboardCard from "../StyledDashboardCard";

const EtaTasks = ({ tasks }) => {
  const renderDescription = description => {
    if (description.length > 70) {
      return description.slice(0, 70) + "...";
    } else return description;
  };

  return (
    <StyledDashboardCard
      size={{ col: 1, row: 4 }}
      justifyContentStart="true"
      type="task_due"
      titleMargin="true"
    >
      <div className="titleWrapper">
        <div className="title">Epics Due</div>
        <div className="subTitle">This week</div>
      </div>

      <div className="days">
        {tasks.map((task, index) => {
          let etaDay = tasks[index - 1] ? tasks[index - 1].eta : null;

          return (
            <div className="day" key={task.id}>
              <p className="dayTitle">
                {task.eta !== etaDay
                  ? moment(task.eta).calendar(null, {
                      lastDay: "[Yesterday]",
                      sameDay: "[Today]",
                      nextDay: "[Tomorrow]",
                      nextWeek: "dddd",
                      sameElse: "L"
                    })
                  : null}
              </p>
              <div className="tasksContainer">
                <div className="taskDescription">
                  {renderDescription(task.name)}
                </div>
                <div className="taskInfo">{`${task.project_name}  >  ${
                  task.epic.name
                }`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledDashboardCard>
  );
};

EtaTasks.propTypes = {
  tasks: PropTypes.array
};

EtaTasks.defaultProps = {
  tasks: []
};

export default EtaTasks;
