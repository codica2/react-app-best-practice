import * as types from "./types";
import { createReducer } from "../../utils";
import { FULFILLED, REJECTED, PENDING } from "../../../utilities";

const experienceLevels = createReducer([])({
  [types.GET_EXPERIENCE_LEVELS + PENDING]: state => {
    state.loading = true;
    return state;
  },

  [types.GET_EXPERIENCE_LEVELS + FULFILLED]: (state, { payload }) => {
    payload.data.loaded = true;
    return payload.data;
  },

  [types.GET_EXPERIENCE_LEVELS + REJECTED]: (state, { payload }) => {
    state.loading = false;
    state.error = payload.error;
    return state;
  }
});

export default experienceLevels;
