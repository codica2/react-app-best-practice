import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { submit } from "redux-form";
import { Header, Modal, Grid } from "semantic-ui-react";

import { DvBlueButton } from "@styled/DVButton";

class ConfirmationModal extends Component {
  static propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    formId: PropTypes.string.isRequired
  };

  confirmModal = () => {
    const { onConfirm } = this.props;

    if (onConfirm) {
      onConfirm();
    }
  };

  closeModal = ev => {
    const { onCancel } = this.props;

    ev.preventDefault();
    let close = document.querySelector("i.close.icon");
    close.click();

    if (onCancel) {
      onCancel();
    }
  };

  submitModal = ev => {
    const { dispatch, formId, onCancel } = this.props;

    dispatch(submit(formId));

    if (onCancel) {
      onCancel();
    }
  };

  render() {
    const { submitting } = this.props;

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
            <Header>Do you want to save changes?</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign="left">
                <DvBlueButton
                  className="dv-blue inverted"
                  onClick={this.confirmModal}
                >
                  Don't save
                </DvBlueButton>
              </Grid.Column>

              <Grid.Column textAlign="right">
                <DvBlueButton
                  className="dv-blue inverted transparent"
                  onClick={this.closeModal}
                >
                  Cancel
                </DvBlueButton>

                <DvBlueButton
                  type="submit"
                  className="dv-blue"
                  loading={submitting}
                  onClick={this.submitModal}
                >
                  Save
                </DvBlueButton>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect()(ConfirmationModal);
