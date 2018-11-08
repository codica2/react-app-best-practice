import React, { Component } from "react";
import { connect } from "react-redux";

import { teamsOperations } from "@ducks/teams";

import Team from "./Team";
import { getUserUrl } from "@utilities";

class Teams extends Component {
  componentWillMount() {
    const { showTeams, user } = this.props;
    showTeams(getUserUrl(user.type), user.id);
  }

  render() {
    const { teams, renderToSidebar } = this.props;

    if (teams.allIds.length === 0) {
      return (
        <div className="teams-placeholder">
          <p>No teams for now</p>
        </div>
      );
    }

    return teams.allIds.map(id => (
      <Team key={id} team={teams.byId[id]} renderToSidebar={renderToSidebar} />
    ));
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    teams: state.teams
  };
};

const mapDispatchToProps = {
  ...teamsOperations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
