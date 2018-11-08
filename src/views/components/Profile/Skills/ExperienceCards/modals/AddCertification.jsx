import React, { Component } from "react";
import { Header, Modal } from "semantic-ui-react";

import CertificationForm from "../forms/CertificationForm";

class AddCertification extends Component {
  state = {
    open: false
  };

  handleClick = ev => {
    ev.preventDefault();
  };

  submit = education => {
    let close = document.querySelector("i.close.icon");
    close.click();
    education.successId = Date.now();

    this.props.addEducationCard(education);
  };

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    return (
      <Modal
        trigger={
          <a className="addButton" onClick={this.handleClick}>
            <span className="plus">+</span>
            <span className="add">Add certification</span>
          </a>
        }
        open={this.state.open}
        onOpen={this.open}
        onClose={this.close}
        className="hidden-icon"
        closeIcon
      >
        <Modal.Header>Education</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>List any formal education here</Header>
            <CertificationForm onSubmit={this.submit} close={this.close} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddCertification;
