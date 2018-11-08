import React, { Component } from "react";
import moment from "moment";

import DueTasks from "./DueTasks";
import EtaTasks from "./EtaTasks";

class DueContainer extends Component {
  getTodaysTasks = (epics = []) => {
    const start = moment().startOf("day");

    return epics.filter(epic => moment(epic.eta).isSame(start));
  };

  getCompletedTasks(array = []) {
    let completedCount = 0;

    array.forEach(
      item =>
        (item.state === "done" || item.state === "accepted") && completedCount++
    );
    return completedCount;
  }

  assignModuleName = tasks => {
    const { allEpics } = this.props;

    tasks &&
      tasks.forEach(task => {
        let epic = allEpics && allEpics.find(epic => epic.id === task.epic.id);

        task["epic_name"] = epic && epic.name;
        task["project_id"] = epic && epic.project_id;
      });

    return tasks;
  };

  render() {
    const { getEtaForWeek, tasks } = this.props;

    const allTasks = this.getTodaysTasks(tasks),
      todaysTasks = this.getCompletedTasks(allTasks),
      allTasksCount = allTasks.length;

    let weekTasks = getEtaForWeek(tasks, false, 9);
    weekTasks = this.assignModuleName(weekTasks);
    weekTasks = this.props.assignProjectName(weekTasks);

    return (
      <div className="tasksDue">
        <div>
          <DueTasks allEpics={allTasksCount} todaysEpics={todaysTasks} />
          <EtaTasks tasks={weekTasks} />
        </div>
      </div>
    );
  }
}

export default DueContainer;
