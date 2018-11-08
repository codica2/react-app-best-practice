import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Input, Tab, Loader } from "semantic-ui-react";

import StyledAssignDropdown from "./StyledAssignDropdown";
import StyledTab from "@styled/Tabs";

import { searchOperations } from "@ducks/search";
import { fetchCustomTeams } from "@ducks/teams/actions";
import { getCustomTeams } from "@ducks/teams/selectors";

import { IMAGE_PORT, PORT, BLANK_AVATAR, createNotification } from "@utilities";

class AssignTeamDropdown extends Component {
  state = {
    options: [],
    assignedIds: [],
    showDropdown: false,
    showDeleteConfirmation: false,
    teamInput: "",
    specInput: "",
    searching: false
  };

  openDropdown = e => {
    e.stopPropagation();
    this.fetchTeams();

    this.setState(
      {
        showDropdown: true
      },
      () => {
        document.addEventListener("click", this.closeDropdown);
      }
    );
  };

  closeDropdown = e => {
    if (this.dropdown && !this.dropdown.contains(e.target)) {
      this.setState(
        {
          showDropdown: false
        },
        () => {
          document.removeEventListener("click", this.closeDropdown);
        }
      );
    }
  };

  handleCloseButton = e => {
    this.setState(
      {
        showDropdown: false
      },
      () => {
        document.removeEventListener("click", this.closeDropdown);
      }
    );
  };

  fetchTeams = () => {
    const { specialistId } = this.props;

    if (specialistId) {
      this.props.fetchCustomTeams(specialistId);
    }
  };

  handleSearch = (e, data) => {
    this.setState({
      teamInput: data.value
    });
  };

  searchSpecs = e => {
    e.preventDefault();
    const { specialistId } = this.props;

    this.setState({ searching: true });

    axios({
      method: "GET",
      url: `${PORT}/api/v1/specialists/search?query=${
        this.state.specInput
      }&specialist_id=${specialistId}`
    })
      .then(resp => {
        this.setState({ specialists: resp.data, searching: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ searching: false });
      });
  };

  handleAssignTeam = e => {
    const teamId = e.target.getAttribute("data");

    this.props.handleAssignTeam(teamId);
    this.handleCloseButton();
  };

  inviteSpecialist = e => {
    const specialistId = e.target.getAttribute("data");

    const {
      projectWithId: { id, team }
    } = this.props;
    axios({
      method: "POST",
      url: `${PORT}/api/v1/projects/${id}/teams/${
        team.id
      }/specialist_invitation/${specialistId}`,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`
      }
    })
      .then(response => {
        createNotification({
          type: "success",
          text: "Specialist was invited"
        });
      })
      .catch(error => {
        const {
          response: { data }
        } = error;

        createNotification({
          type: data && data.errors ? "warning" : "error",
          text: data && data.errors
        });

        console.error(error);
      });
    this.handleCloseButton();
  };

  render() {
    const {
      renderToModal,
      userType,
      specialistCustomTeams,
      userRole
    } = this.props;

    const {
      assignedIds,
      teamInput,
      specInput,
      specialists,
      searching,
      showDropdown
    } = this.state;

    const renderCondition = userType.some(type => type === userRole);

    const panes = [
      {
        menuItem: "members",
        render: () => (
          <Tab.Pane>
            <Input
              type="text"
              placeholder="Search specialists"
              name="searchSpec"
              fluid
              onChange={e => this.setState({ specInput: e.target.value })}
              value={specInput}
              loading={searching}
              autoComplete="off"
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  this.searchSpecs(e);
                }
              }}
            />
            <div className="dropdown-list">
              {specialists &&
                specialists.map((specialist, key) => (
                  <div
                    key={key}
                    data={specialist.id}
                    onClick={this.inviteSpecialist}
                  >
                    <img
                      data={specialist.id}
                      src={
                        specialist.avatar.url
                          ? IMAGE_PORT + specialist.avatar.url
                          : BLANK_AVATAR
                      }
                      alt="member"
                    />
                    {specialist.first_name + " " + specialist.last_name}
                  </div>
                ))}
              {!specialists && (
                <span className="noResults">Start searching</span>
              )}
              {specialists && specialists.length === 0 && (
                <span className="noResults">No results</span>
              )}
            </div>
          </Tab.Pane>
        )
      },
      {
        menuItem: "teams",
        render: () => (
          <Tab.Pane>
            <Input
              type="text"
              placeholder="Search teams"
              name="searchTeam"
              fluid
              input={<input type="text" autoComplete="off" />}
              onChange={this.handleSearch}
              onKeyDown={e => e.keyCode === 13 && e.preventDefault()}
            />
            <div className="dropdown-list">
              {specialistCustomTeams ? (
                specialistCustomTeams
                  .filter(team =>
                    team.name.match(new RegExp(`${teamInput}`, "i"))
                  )
                  .map((team, key) => (
                    <div
                      key={key}
                      data={team.id}
                      onClick={this.handleAssignTeam}
                      className={
                        assignedIds.indexOf(team.id) >= 0 ? "assigned" : ""
                      }
                    >
                      {team.name}
                    </div>
                  ))
              ) : (
                <Loader inline="centered" active />
              )}
            </div>
          </Tab.Pane>
        )
      }
    ];

    return (
      renderCondition && (
        <StyledAssignDropdown team blue renderToModal={renderToModal}>
          <a className="dropdownTrigger" onClick={this.openDropdown}>
            <span className="plus">&nbsp;</span>
          </a>
          {showDropdown && (
            <div className="dropdown" ref={el => (this.dropdown = el)}>
              <StyledTab
                panes={panes}
                onTabChange={this.handleTabChange}
                defaultActiveIndex={1}
              />
            </div>
          )}
        </StyledAssignDropdown>
      )
    );
  }
}

const mapStateToProps = state => {
  const makeCustomTeams = getCustomTeams();

  return (state, ownProps) => {
    const {
      teams: { byId: allTeams },
      searchResult,
      projects
    } = state;

    return {
      userRole: state.user.role,
      specialistId: state.user.id,
      specialistCustomTeams: makeCustomTeams(allTeams),
      searchResult,
      projectWithId: projects.byId[ownProps.projectId]
    };
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCustomTeams,
    ...searchOperations
  }
)(AssignTeamDropdown);
