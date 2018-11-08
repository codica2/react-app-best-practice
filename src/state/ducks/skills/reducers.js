import * as types from "./types";
import { createReducer } from "../../utils";

const initialState = [];

const skillsReducer = createReducer(initialState)({
  [types.GET_SKILLS]: (state, action) => {
    return action.payload;
  }
});

export default skillsReducer;
