import * as types from "./types";
import { createReducer } from "../../utils";
import { FULFILLED, PENDING, REJECTED } from "@utilities";

const initialState = {
  loading: false,
  loaded: false,
  projectTypes: [],
  error: false
};

const projectTypesReducer = createReducer(initialState)({
  [types.GET_PROJECT_TYPES + PENDING]: (state, action) => ({
    ...state,
    loading: true
  }),

  [types.GET_PROJECT_TYPES + FULFILLED]: (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: false,
    projectTypes: payload.data
  }),

  [types.GET_PROJECT_TYPES + REJECTED]: (state, action) => ({
    ...state,
    error: true
  })
});

export default projectTypesReducer;
