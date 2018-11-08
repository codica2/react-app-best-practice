import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Modal } from "semantic-ui-react";

import { DvBlueButton } from "@styled/DVButton";
import { modalsOperations } from "@ducks/modals";

class SubmitErrorModal extends Component {
  closeModal = ev => {
    const { close, closeSubmitErrorModal } = this.props;
    this.setState({ open: false });

    if (closeSubmitErrorModal) {
      closeSubmitErrorModal();
    }

    if (close) {
      this.props.close();
    }
  };

  render() {
    return (
      <Modal
        size="tiny"
        className="hidden-icon"
        open={this.props.isOpen}
        onClose={this.closeModal}
        closeIcon
      >
        <Modal.Content>
          <Modal.Description>
            <Header>Please fill in all the required fields</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <DvBlueButton className="dv-blue inverted" onClick={this.closeModal}>
            Close
          </DvBlueButton>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(
  null,
  {
    closeSubmitErrorModal: modalsOperations.closeSubmitErrorModal
  }
)(SubmitErrorModal);
