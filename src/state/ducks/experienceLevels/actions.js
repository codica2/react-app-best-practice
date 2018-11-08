import * as types from "./types";
import { fetch } from "../../utils";
import { GET } from "../../../utilities";

export const getExperienceLevels = () => (dispatch, getState) => {
  const state = getState();

  if (!state.experienceLevels.loaded) {
    dispatch({
      type: types.GET_EXPERIENCE_LEVELS,
      payload: fetch(GET, "/experience_levels")
    });
  }
};
