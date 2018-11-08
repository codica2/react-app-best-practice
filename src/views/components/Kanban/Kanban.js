import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Board from "react-trello";
import Axios from "axios";
import filter from "lodash/filter";

import CustomCard from "./CustomTaskCard";
import EditTaskModal from "@UI/modals/EditTask";

import { getProjectEpics } from "@ducks/epics/actions";
import { tasksOperations } from "@ducks/tasks";
import { isRedguy } from "@ducks/user/selectors";
import { PORT } from "@utilities";
import { getProjectTeam } from "../../../state/ducks/teams/selectors";

class Kanban extends Component {
  state = {
    tasks: [],
    showBoard: false,
    editingTask: {},
    currentProjectTeam: [],
    editModal: false
  };

  handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    const { getProjectEpics, projectId, epicId } = this.props;

    Axios({
      method: "PUT",
      url: `${PORT}/api/v1/epics/${epicId}/tasks/${cardId}`,
      data: {
        task: { state: +targetLaneId }
      }
    })
      .then(response => {
        this.loadTasks();
        getProjectEpics(projectId);
      })
      .catch(error => {
        console.error(error);
        this.loadTasks();
      });
  };

  assignSpecialist = (task, specialist) => {
    const { assignSpecialistToTask, epicId } = this.props;
    assignSpecialistToTask(epicId, +task, specialist);
  };

  removeSpecialist = (task, specialist) => {
    const { removeSpecialistFromTask, epicId } = this.props;
    removeSpecialistFromTask(epicId, +task, specialist);
  };

  handleCardClick = id => {
    if (id) {
      this.modal.open(id);
    }
  };

  closeModal = updated => {
    if (updated) {
      this.loadTasks();
    }
  };

  deleteTask = (epic, id, laneId) => {
    this.props.deleteEpicTask(epic, +id);
  };

  loadTasks = () => {
    //krunch
    const { epicId, getEpicTasks } = this.props;
    getEpicTasks(epicId);
  };

  render() {
    const { tasks, specialists, isRedguy, user, epicId } = this.props;
    const { editingTask } = this.state;

    return (
      <Fragment>
        <Board
          data={{
            lanes: [
              {
                id: "0",
                title: "Backlog",
                cards: filter(tasks, task => task.state === "backlog")
              },
              {
                id: "1",
                title: "In progress",
                cards: filter(tasks, task => task.state === "in_progress")
              },
              {
                id: "2",
                title: "Done",
                cards: filter(tasks, task => task.state === "done")
              },
              {
                id: "3",
                title: "Accepted",
                cards: filter(tasks, task => task.state === "accepted")
              }
            ]
          }}
          eventBusHandle={handle => (this.kanbanEvent = handle)}
          className="kanban"
          draggable={isRedguy}
          customCardLayout
          handleDragEnd={this.handleDragEnd}
          onCardClick={this.handleCardClick}
        >
          <CustomCard
            handleEditTask={this.handleCardClick}
            deleteTask={this.deleteTask}
            specialistList={specialists}
            assignSpecialist={this.assignSpecialist}
            removeSpecialist={this.removeSpecialist}
            specialistsDict={specialists}
            user={user}
          />
        </Board>
        <EditTaskModal
          ref={modal => (this.modal = modal)}
          close={this.closeModal}
          epicId={epicId}
          epicTask={editingTask}
          currentProjectTeam={specialists}
          assignSpecialist={this.assignSpecialist}
          removeSpecialist={this.removeSpecialist}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { user } = state;
  const { myTasks, projectId } = props;
  let { tasks } = props;

  if (myTasks) {
    tasks = filter(tasks, task =>
      task.specialists.some(spec => spec.id === user.id)
    );
  }

  const team = getProjectTeam()(state.teams.byId, projectId);

  return {
    user,
    isRedguy: isRedguy()(user),
    tasks,
    specialists: team.specialists
  };
};

const mapDispatchToProps = {
  ...tasksOperations,
  getProjectEpics
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
