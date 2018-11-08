import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Modal } from "semantic-ui-react";

import AddTeamForm from "./AddTeamForm";
import StyledSubHeaderLink from "@styled/SubHeaderLink.js";

import { createCustomTeam } from "@ducks/teams/actions";
import { S_REDGUY, S_CORE } from "@utilities";
import { oneOfRoles } from "@views/utils/functions";

class AddTeamModal extends Component {
  state = {
    open: false
  };

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  submit = ({ name }) => {
    this.props.createCustomTeam(name);
    this.close();
  };

  render() {
    const { allowedToCreateTeam } = this.props;
    if (allowedToCreateTeam) {
      return (
        <Modal
          size="tiny"
          trigger={
            <a className="button">
              <StyledSubHeaderLink className="right-link addButton modalTrigger" />
              <span>Add team</span>
            </a>
          }
          open={this.state.open}
          onOpen={this.open}
          onClose={this.close}
          closeIcon
        >
          <Modal.Content>
            <Modal.Description>
              <Header>Create new team</Header>
              <AddTeamForm onSubmit={this.submit} projects={null} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      );
    }

    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allowedToCreateTeam: oneOfRoles(state.user.role, S_REDGUY, S_CORE)
  };
};

const mapDispatchToProps = {
  createCustomTeam
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamModal);
