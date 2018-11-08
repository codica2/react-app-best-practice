import * as types from "./types";
import { fetch } from "../../utils";
import {
  GET,
  POST,
  createNotification,
  DELETE,
  displayError
} from "../../../utilities";
import { teams, team, channels } from "../../schemas";

export const showTeams = (user, id) => {
  return {
    type: types.SHOW_TEAMS,
    payload: fetch(GET, `/${user}/${id}/teams`),
    meta: {
      schema: [teams]
    }
  };
};

const showTeam = payload => ({
  type: types.SHOW_TEAM,
  payload,
  meta: {
    schema: team
  }
});

const showCustomTeams = payload => ({
  type: types.SHOW_CUSTOM_TEAMS,
  payload,
  meta: {
    schema: [teams]
  }
});

export const fetchCustomTeams = id => dispatch => {
  fetch(GET, `/specialists/${id}/custom_teams`).then(res => {
    dispatch(showCustomTeams(res));
  });
};

export const showProjectTeam = projectId => dispatch => {
  fetch(GET, `/projects/${projectId}/teams`)
    .then(response => dispatch(showTeam(response)))
    .catch(displayError);
};

export const showCustomTeam = id => dispatch => {
  fetch(GET, `/custom_team/${id}`)
    .then(response => dispatch(showTeam(response)))
    .catch(displayError);
};

export const createCustomTeam = name => {
  return (dispatch, getState) => {
    dispatch({
      type: types.CREATE_CUSTOM_TEAM,
      payload: fetch(POST, "/teams", {
        team: {
          name,
          specialist_id: getState().user.id,
          custom_team: true
        }
      }),
      meta: {
        schema: team
      }
    })
      .then(({ value: { data } }) => {
        createNotification({
          type: "success",
          text: `${data.name ? `${data.name} team ` : "Team"} was created`
        });
      })
      .catch(error => {
        createNotification({
          type: "error"
        });

        console.error(error);
      });
  };
};

export const removeCustomTeam = team => {
  const { id, specialist_id } = team;

  return dispatch => {
    dispatch({
      type: types.DELETE_CUSTOM_TEAM,
      payload: fetch(DELETE, `/teams/${id}/remove_team/${specialist_id}`)
    })
      .then(({ value: { data } }) => {
        createNotification({
          type: "success",
          text: `${data.name ? `${data.name} team ` : "Team"} was deleted`
        });
      })
      .catch(error => {
        createNotification({
          type: "error"
        });

        console.error(error);
      });
  };
};

export const showChannels = team => ({
  type: types.SHOW_TEAM_CHANNELS,
  payload: fetch(GET, `/teams/${team}/channels`),
  meta: {
    schema: [channels]
  }
});

export const removeSpecialistFromTeam = (team, specialist) => dispatch => {
  fetch(DELETE, `/teams/${team}/remove/${specialist}`)
    .then(response => {
      dispatch(showTeam(response));
    })
    .catch(displayError);
};
