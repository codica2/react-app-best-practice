import * as types from "./types";

export const showSubmitErrorModal = () => ({
  type: types.SUBMIT_ERROR_MODAL_SHOW
});

export const closeSubmitErrorModal = () => ({
  type: types.SUBMIT_ERROR_MODAL_CLOSE
});

export const showConfirmSubmitModal = payload => ({
  type: types.CONFIRM_SUBMIT_MODAL_SHOW,
  payload
});

export const closeConfirmSubmitModal = () => ({
  type: types.CONFIRM_SUBMIT_MODAL_CLOSE
});

export const showConfirmationModal = payload => ({
  type: types.SHOW_CONFIRMATION_MODAL,
  payload
});

export const closeConfirmationModal = () => ({
  type: types.CLOSE_CONFIRMATION_MODAL
});

export const setPromptNextLocation = payload => ({
  type: types.SET_PROMPT_NEXT_LOACATION,
  payload
});

export const clearPromptNextLocation = () => ({
  type: types.CLEAR_PROMPT_NEXT_LOACATION
});
