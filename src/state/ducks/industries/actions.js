import * as types from "./types";
import { fetch } from "../../utils";
import { GET } from "../../../utilities";

export const getIndustries = () => (dispatch, getState) => {
  const state = getState();

  if (!state.industriesReducer.loaded) {
    dispatch({
      type: types.GET_INDUSTRIES,
      payload: fetch(GET, "/industry_areas")
    });
  }
};
