import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Header, Modal } from "semantic-ui-react";
import { isDirty } from "redux-form";

import PointCard from "../PointCard";

import WorkExperienceForm from "../forms/WorkExperienceForm";

import {
  showConfirmSubmitModal,
  closeConfirmSubmitModal
} from "@ducks/modals/actions";

let isEdited = false;

class EditWorkExperience extends Component {
  state = {
    open: false
  };

  show = () => this.setState({ open: true, fetchConfirmation: true });

  close = () => {
    if (isEdited) {
      this.props.showConfirmSubmitModal({ formId: "WorkExperienceForm" });
    } else {
      this.setState({ open: false });
    }

    setTimeout(() => {
      isEdited = false;
    }, 0);
  };

  submit = experience => {
    this.props.editCard(experience);

    this.props.closeConfirmSubmitModal();
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { experience } = this.props;

    return (
      <Fragment>
        <PointCard data-edit onClick={this.show}>
          <i className="fas fa-edit edit-icon" />
        </PointCard>
        <Modal
          className="hidden-icon"
          open={open}
          onClose={this.close}
          closeIcon
        >
          <Modal.Header>Editing Your Card</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>/ List your formal experience here /</Header>
              <WorkExperienceForm
                experience={experience}
                onSubmit={this.submit}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Fragment>
    );
  }
}

export default connect(
  state => {
    isEdited = isDirty("WorkExperienceForm")(state);
    return {};
  },
  {
    showConfirmSubmitModal,
    closeConfirmSubmitModal
  }
)(EditWorkExperience);
