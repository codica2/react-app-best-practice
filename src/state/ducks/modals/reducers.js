import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";

const initialState = null;

const submitErrorModalReducer = createReducer(initialState)({
  [types.SUBMIT_ERROR_MODAL_SHOW]: (state, action) => {
    return true;
  },

  [types.SUBMIT_ERROR_MODAL_CLOSE]: (state, action) => {
    return initialState;
  }
});

const confirmSubmitModalReducer = createReducer(initialState)({
  [types.CONFIRM_SUBMIT_MODAL_SHOW]: (state, { payload }) => ({
    ...payload
  }),

  [types.CONFIRM_SUBMIT_MODAL_CLOSE]: (state, action) => {
    return initialState;
  }
});

const confirmModalReducer = createReducer(initialState)({
  [types.SHOW_CONFIRMATION_MODAL]: (state, { payload }) => ({
    ...payload
  }),

  [types.CLOSE_CONFIRMATION_MODAL]: (state, action) => {
    return initialState;
  }
});

const nextLocationPromptReducer = createReducer(initialState)({
  [types.SET_PROMPT_NEXT_LOACATION]: (state, { payload }) => ({ ...payload }),
  [types.CLEAR_PROMPT_NEXT_LOACATION]: (state, action) => initialState
});

export default combineReducers({
  submitError: submitErrorModalReducer,
  confirmSubmit: confirmSubmitModalReducer,
  confirmModal: confirmModalReducer,
  nextLocation: nextLocationPromptReducer
});
