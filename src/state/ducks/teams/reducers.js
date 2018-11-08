import * as types from "./types";
import { combineReducers } from "redux";
import omit from "lodash/omit";
import merge from "lodash/merge";

import { createReducer } from "../../utils";
import { FULFILLED } from "@utilities";
import { CREATE_CHANNEL, DELETE_CHANNEL } from "../channels/types";

const teamsById = (state = {}, action) => {
  switch (action.type) {
    case types.SHOW_TEAMS + FULFILLED:
      return merge({ ...state }, action.payload.entities.teams);
    case types.DELETE_CUSTOM_TEAM + FULFILLED:
      return omit(state, action.payload.data.id);
    case CREATE_CHANNEL:
      return addChannel(state, action);
    case DELETE_CHANNEL:
      return deleteChannel(state, action);
    case types.CREATE_CUSTOM_TEAM + FULFILLED:
    case types.SHOW_TEAM:
      return {
        ...state,
        ...action.payload.entities.teams
      };
    default:
      return state;
  }
};

const allTeams = createReducer([])({
  [types.SHOW_TEAMS + FULFILLED]: (state, { payload }) => payload.result,

  [types.DELETE_CUSTOM_TEAM + FULFILLED]: (state, { payload }) =>
    state.filter(id => id !== payload.data.id),

  [types.CREATE_CUSTOM_TEAM + FULFILLED]: (state, { payload }) =>
    state.concat(payload.result)
});

// Reducer helpers

const addChannel = (state, action) => {
  const { team_id, id } = action.payload;
  const team = state[team_id];

  return {
    ...state,
    [team_id]: {
      ...team,
      channels: team.channels.concat(id)
    }
  };
};

const deleteChannel = (state, action) => {
  const { team_id, id } = action.payload;
  const team = state[team_id];

  return {
    ...state,
    [team_id]: {
      ...team,
      channels: team.channels.filter(channel => channel !== id)
    }
  };
};

const teamsReducer = combineReducers({
  byId: teamsById,
  allIds: allTeams
});

export default teamsReducer;
