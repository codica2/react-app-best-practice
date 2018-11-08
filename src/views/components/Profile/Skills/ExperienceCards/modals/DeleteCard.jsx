import React, { Component } from "react";
import { Modal } from "semantic-ui-react";

import PointCard from "../PointCard";
import { SaveBtn, CancelBtn, DvBlueButton } from "@styled/DVButton";

class DeletingEducationCard extends Component {
  state = {
    open: false
  };

  cancelDelete = () => {
    this.setState({ open: false });
  };

  deleteCard = data => {
    this.props.deleteCard(data);

    this.setState({ open: false });
  };

  show = (size, id) => () => this.setState({ size, open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;
    const { data } = this.props;

    return (
      <div>
        <PointCard onClick={this.show("tiny")}>
          <i className="fas fa-trash-alt delete-icon" />
        </PointCard>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Deleting Your Card</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this card?</p>
          </Modal.Content>
          <Modal.Actions>
            <DvBlueButton
              className="dv-blue inverted transparent"
              uppercase="true"
              onClick={this.cancelDelete}
            >
              No
            </DvBlueButton>

            <DvBlueButton
              className="dv-blue"
              uppercase="true"
              onClick={() => this.deleteCard(data)}
            >
              Yes
            </DvBlueButton>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default DeletingEducationCard;
