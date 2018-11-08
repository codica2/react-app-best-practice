import React, { Component } from "react";
import { Modal } from "semantic-ui-react";

import EditTask from "./EditTask";
import StyledModal from "@styled/Modal";

class EditTaskModal extends Component {
  state = {
    opened: false,
    taskId: null
  };

  open = id => this.setState({ opened: true, taskId: id });

  close = () => {
    this.setState({ opened: false });
    this.props.close(this.state.updated);
  };

  render() {
    const { epic } = this.props;
    const { opened, taskId } = this.state;

    return (
      <StyledModal
        open={opened}
        onClose={this.close}
        trigger={<div id="editTask" />}
        size="large"
      >
        <Modal.Header className="ui">Epic - {taskId}</Modal.Header>
        <EditTask
          {...this.props}
          epic={epic}
          taskId={taskId}
          close={this.close}
        />
      </StyledModal>
    );
  }
}

export default EditTaskModal;
