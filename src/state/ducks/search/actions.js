import * as types from "./types";
import { fetch } from "../../utils";
import { GET } from "../../../utilities";

/**
 * Search specialist by name\skill
 *
 * @param {number} id The id of the user. Optional parameter only for core specialist
 */

export const searchSpecialist = payload => (dispatch, getState) => {
  const id = getState().user.id;

  let payloadQuery = payload
    ? `?query=${payload}`
    : id
    ? `?specialist_id=${id}`
    : "";

  if (payload && id) {
    payloadQuery += `&specialist_id=${id}`;
  }

  dispatch({
    type: types.SEARCH_SPECIALIST,
    payload: fetch(GET, `/specialists/search${payloadQuery}`),
    id
  });
};

/**
 * Search specialist for project
 *
 * @param {number} project The id of the project.
 */

export const searchSpecialistForProject = project => (dispatch, getState) => {
  const id = getState().user.id;

  dispatch({
    type: types.SEARCH_SPECIALIST_FOR_PROJECT,
    payload: fetch(
      GET,
      `/specialists/search?project_id=${project}&specialist_id=${id}`
    )
  });
};
