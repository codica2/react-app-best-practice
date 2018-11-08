import decode from "jwt-decode";
import * as types from "./types";
import * as profile from "../profile/types";
import { createReducer } from "../../utils";
import { getUserType, FULFILLED } from "@utilities";

const initialState = {};

const signInReducer = createReducer(initialState)({
  [types.SIGN_IN]: (state, { token }) => {
    const { user_id: id, aud: role, status } = decode(token);

    return {
      token,
      id,
      type: getUserType(role),
      role,
      status
    };
  },

  [types.SIGN_IN_FAIL]: (state, { payload }) => ({
    signInFail: true
  }),

  [types.LOG_OUT]: (state, action) => {
    return initialState;
  },

  [types.USER_DATA_SHOW + FULFILLED]: (state, { payload }) => {
    return { ...state, ...payload.data };
  },

  [profile.USER_PROFILE_UPDATE + FULFILLED]: (state, { payload }) => {
    return { ...state, ...payload.data };
  },

  [profile.USER_INDUSTRY_UPDATE + FULFILLED]: (state, { payload }) => {
    return { ...state, ...payload.data };
  },

  [profile.USER_COMPANY_UPDATE + FULFILLED]: (state, { payload }) => {
    return { ...state, ...payload.data };
  },

  [profile.USER_BILLINGS_UPDATE + FULFILLED]: (state, { payload }) => {
    return { ...state, ...payload.data };
  }
});

export default signInReducer;
