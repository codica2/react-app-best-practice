import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Modal } from "semantic-ui-react";
import { AddNewBtn } from "../../styleComponents/layout/DvButton";
import CertificationForm from "../specialist/forms/CertificationForm";
import { education } from "../../actions/actions";

class CertificationModal extends Component {
  render() {
    const { handleConfirmationModal } = this.props;

    return (
      <Modal
        trigger={
          <a className="addButton" onClick={this.handleClick}>
            <span className="plus">+</span>
            <span className="add">Add education</span>
          </a>
        }
        className="hidden-icon"
        closeIcon
      >
        <Modal.Header>Education</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>List any formal education here</Header>
            <CertificationForm
              handleConfirmationModal={handleConfirmationModal}
              onSubmit={this.submit}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }

  handleClick = ev => {
    ev.preventDefault();
  };

  submit = education => {
    let close = document.querySelector("i.close.icon");
    close.click();
    education.educationSuccessId = Math.random();
    this.props.education(education);
  };
}

export default connect(null, { education })(CertificationModal);
