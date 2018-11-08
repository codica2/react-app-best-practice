import React, { Component } from "react";
import { Header, Modal } from "semantic-ui-react";

import WorkExperienceForm from "../forms/WorkExperienceForm";

class WorkExperienceModal extends Component {
  handleClick = ev => {
    ev.preventDefault();
  };

  submit = experience => {
    let close = document.querySelector("i.close.icon");
    close.click();

    experience.succesId = Date.now();

    this.props.addCard(experience);
  };

  render() {
    return (
      <Modal
        trigger={
          <a className="addButton" onClick={this.handleClick}>
            <span className="plus">+</span>
            <span className="add">Add project</span>
          </a>
        }
        className="hidden-icon"
        closeIcon
      >
        <Modal.Header>Work Experience</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>
              Tell us about previous companies you’ve worked at, projects you’ve
              worked on or things you’ve built
            </Header>
            <WorkExperienceForm onSubmit={this.submit} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default WorkExperienceModal;
