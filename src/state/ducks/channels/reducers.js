import * as types from "./types";
import omit from "lodash/omit";
import merge from "lodash/merge";
import {
  SHOW_TEAM_CHANNELS,
  CREATE_CUSTOM_TEAM,
  SHOW_TEAM
} from "../teams/types";
import { FULFILLED } from "@utilities";

const channelsReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_TEAM:
    case CREATE_CUSTOM_TEAM + FULFILLED:
    case SHOW_TEAM_CHANNELS + FULFILLED:
      return merge({ ...state }, action.payload.entities.channels);
    case types.CREATE_CHANNEL:
      return { ...state, [action.payload.id]: action.payload };
    case types.UPDATE_CHANNEL:
      return { ...state, ...action.payload.entities.channels };
    case types.DELETE_CHANNEL:
      return omit(state, action.payload.id);
    case types.ADD_TO_CHANNEL:
    case types.REMOVE_FROM_CHANNEL:
      return { ...state, ...action.payload.entities.channels };
    default:
      return state;
  }
};

export default channelsReducer;
