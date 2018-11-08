import * as types from "./types";
import { fetch } from "../../utils";
import { GET } from "../../../utilities";

export const getSkills = () => dispatch => {
  fetch(GET, "/skills").then(({ data }) => {
    dispatch({
      type: types.GET_SKILLS,
      payload: data
    });
  });
};
