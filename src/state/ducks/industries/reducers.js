import * as types from "./types";
import { createReducer } from "../../utils";
import { FULFILLED, PENDING, REJECTED } from "../../../utilities";

const initialState = {
  loading: false,
  loaded: false,
  industries: [],
  error: false
};

const industriesReducer = createReducer(initialState)({
  [types.GET_INDUSTRIES + PENDING]: (state, action) => ({
    ...state,
    loading: true
  }),

  [types.GET_INDUSTRIES + FULFILLED]: (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    industries: payload.data,
    error: false
  }),

  [types.GET_INDUSTRIES + REJECTED]: (state, action) => ({
    ...state,
    error: true
  })
});

export default industriesReducer;
