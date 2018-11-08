import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import StyledBoard from "@styled/Board";
import Kanban from "./Kanban";

import { getEpicTasks } from "@ducks/tasks/actions";

class KanbanContainer extends Component {
  toggleMyTasks = () => {
    this.setState({ myTasks: !this.state.myTasks });
  };

  componentDidMount() {
    this.props.epicId && this.props.getEpicTasks(this.props.epicId);
  }

  componentWillReceiveProps(nextProps) {
    const { epicId: prevEpic } = this.props;
    const { epicId: nextEpic } = nextProps;

    if (prevEpic !== nextEpic) {
      nextProps.getEpicTasks(nextEpic);
    }
  }

  render() {
    const { tasks, projectId, epicId, myTasks } = this.props;
    const { loading, loaded, allIds, error } = tasks;

    return (
      <StyledBoard className={loading ? "loading" : ""}>
        {!loaded && loading && <p className="noTasks">Loading</p>}
        {loaded &&
          (!!allIds.length ? (
            <Kanban
              tasks={tasks.byId}
              myTasks={myTasks}
              epicId={epicId}
              projectId={projectId}
            />
          ) : (
            <p className="noTasks">There is no tasks yet</p>
          ))}
        {!loading && error && (
          <p className="noTasks">
            Some error occured while your tasks was loading.
          </p>
        )}
      </StyledBoard>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { projectId, num } = props.match.params;
  const epicId = state.epics.allIds[num - 1];
  return {
    projectId,
    epicId,
    tasks: state.tasks,
    myTasks: state.kanban.myTasks
  };
};

const mapDispatchToProps = {
  getEpicTasks
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(KanbanContainer)
);
