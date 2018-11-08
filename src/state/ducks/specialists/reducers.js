import * as types from "./types";
import * as team from "../teams/types";
import * as channel from "../channels/types";
import { FULFILLED } from "@utilities";

const specialists = (state = {}, action) => {
  switch (action.type) {
    case types.SHOW_SPECIALIST:
    case team.SHOW_PROJECT_TEAM + FULFILLED:
    case team.SHOW_TEAM_CHANNELS + FULFILLED:
    case channel.UPDATE_CHANNEL:
    case channel.ADD_TO_CHANNEL:
    case channel.REMOVE_FROM_CHANNEL:
      return { ...state, ...action.payload.entities.specialists };
    default:
      return state;
  }
};

export default specialists;
