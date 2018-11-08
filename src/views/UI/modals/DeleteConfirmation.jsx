import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Modal } from "semantic-ui-react";
import { DvBlueButton } from "@styled/DVButton";
import { closeConfirmationModal } from "@ducks/modals/actions";

class DeleteConfirmationModal extends Component {
  static defaultProps = {
    message: "Are you sure?"
  };

  static propTypes = {
    message: PropTypes.string,
    callback: PropTypes.func
  };

  closeModal = ev => {
    this.props.closeConfirmationModal();
  };

  submitModal = ev => {
    this.props.callback();
    this.closeModal();
  };

  render() {
    const { message } = this.props;

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
            <Header>{message}</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <DvBlueButton
            type="button"
            className="dv-blue inverted"
            onClick={this.closeModal}
          >
            Cancel
          </DvBlueButton>
          <DvBlueButton
            type="submit"
            className="dv-blue"
            onClick={this.submitModal}
          >
            Yes
          </DvBlueButton>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(
  null,
  { closeConfirmationModal }
)(DeleteConfirmationModal);
