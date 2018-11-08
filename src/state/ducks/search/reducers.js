import * as types from "./types";
import { createReducer } from "../../utils";
import { FULFILLED, PENDING, REJECTED } from "../../../utilities";

const initialState = {
  loading: false,
  loaded: false,
  result: null,
  error: null
};

const searchReducer = createReducer(initialState)({
  [types.SEARCH_SPECIALIST + PENDING]: (state, action) => ({
    ...initialState,
    loading: true
  }),

  [types.SEARCH_SPECIALIST + FULFILLED]: (state, { payload }) => ({
    ...initialState,
    loading: false,
    loaded: true,
    result: [...payload.data]
  }),

  [types.SEARCH_SPECIALIST + REJECTED]: (state, action) => ({
    ...initialState,
    error: true
  }),

  [types.SEARCH_SPECIALIST_FOR_PROJECT + PENDING]: (state, action) => ({
    ...initialState,
    loading: true
  }),

  [types.SEARCH_SPECIALIST_FOR_PROJECT + FULFILLED]: (state, { payload }) => ({
    ...initialState,
    loading: false,
    loaded: true,
    result: [...payload.data]
  }),

  [types.SEARCH_SPECIALIST_FOR_PROJECT + REJECTED]: (state, action) => ({
    ...initialState,
    error: true
  })
});

export default searchReducer;
