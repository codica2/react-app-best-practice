import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Form, Input } from "semantic-ui-react";

import { teamsOperations } from "@ducks/teams";
import { createTeamChannel } from "@ducks/channels/actions";
import { S_REDGUY, S_CORE } from "@utilities/constants";
import Channel from "./Channel";

const allowedUsers = [S_REDGUY, S_CORE];

class Team extends Component {
  state = {
    name: "",
    error: null
  };

  componentWillMount() {
    const { showProjectTeam, showCustomTeam, team, showChannels } = this.props;

    if (team.custom_team) {
      showCustomTeam(team.id);
    } else showProjectTeam(team.project_id);
    showChannels(team.id);
  }

  handleChange = (e, { name, value }) => {
    let validated = value.length > 16;

    if (value.length <= 16) {
      this.setState({
        [name]: value
      });
    }

    this.setState({
      error: validated
    });
  };

  renderToDashboard() {
    const { team, user } = this.props;

    return (
      <Grid>
        <Grid.Row className="section-header">
          <Grid.Column computer={6} textAlign="left" floated="left">
            <p className="title team-name">
              {team.name} {team.project_id && "project"}
            </p>
          </Grid.Column>
          {allowedUsers.some(role => role === user.role) &&
            team.custom_team &&
            +team.specialist_id === user.id && (
              <Grid.Column
                computer={6}
                textAlign="right"
                verticalAlign="bottom"
                floated="right"
              >
                <div
                  className="dv-btn"
                  onClick={() => this.props.removeCustomTeam(team)}
                >
                  <i className="fas fa-trash" />
                </div>
              </Grid.Column>
            )}
        </Grid.Row>
        <Grid.Row className="channels">
          {team.channels &&
            team.channels.map(id => (
              <Channel
                channelId={id}
                key={id}
                allSpecialists={team.specialists}
              />
            ))}
          {allowedUsers.some(role => role === user.role) ? (
            <Form className="addChannel" onSubmit={this.submit}>
              {this.state.error && (
                <span className="addChannel-label">
                  Must be less then 16 characters
                </span>
              )}
              <Input
                type="text"
                placeholder="#Add channel"
                name="name"
                value={this.state.name}
                onKeyUp={e => e.keyCode === 13 && e.target.blur()}
                onChange={this.handleChange}
                onBlur={() => this.setState({ error: false })}
                autoComplete="off"
              />
            </Form>
          ) : (
            team.channels &&
            team.channels.length === 0 && <p>There is no channels yet :(</p>
          )}
        </Grid.Row>
      </Grid>
    );
  }

  renderToRightSidebar() {
    const { team } = this.props;

    return (
      <div className="team-wrap">
        <div className="team-name">{team.name}</div>

        {team.channels && !!team.channels.length
          ? team.channels.map(id => (
              <Channel
                channelId={id}
                key={id}
                allSpecialists={team.specialists}
                renderToRightSidebar
              />
            ))
          : "There is no channels"}
      </div>
    );
  }

  render() {
    const { renderToSidebar } = this.props;

    return renderToSidebar
      ? this.renderToRightSidebar()
      : this.renderToDashboard();
  }

  submit = () => {
    const { team, createTeamChannel } = this.props;
    const { name } = this.state;
    createTeamChannel(team.id, { name });
    this.setState({ name: "", error: false });
  };
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  ...teamsOperations,
  createTeamChannel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);
