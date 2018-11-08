import * as types from "./types";
import { fetch } from "../../utils";
import { GET } from "../../../utilities";

/**
 * Get all project types
 */

export const getProjectTypes = () => (dispatch, getState) => {
  const state = getState();

  if (!state.projectTypesReducer.loaded) {
    dispatch({
      type: types.GET_PROJECT_TYPES,
      payload: fetch(GET, "/project_types")
    });
  }
};
