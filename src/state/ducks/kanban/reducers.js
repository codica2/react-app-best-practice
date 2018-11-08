import * as types from "./types";
import { createReducer } from "../../utils";

const initialState = {
  myTasks: false
};

const tasksReducer = createReducer(initialState)({
  [types.TOGGLE_MY_TASKS]: (state, action) => ({
    ...state,
    myTasks: !state.myTasks
  })
});

export default tasksReducer;
