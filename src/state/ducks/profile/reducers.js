import { combineReducers } from "redux";
import findIndex from "lodash/findIndex";

import * as types from "./types";
import * as utils from "./utils";
import { createReducer } from "../../utils";
import { FULFILLED } from "../../../utilities";

const initialState = {};

const infoReducer = createReducer(initialState)({
  [types.USER_DATA_SHOW + FULFILLED]: (state, { payload }) => ({
    ...utils.getUserInfo(payload.data)
  }),

  [types.USER_PROFILE_UPDATE + FULFILLED]: (state, { payload }) => ({
    ...state,
    ...utils.getUserInfo(payload.data)
  }),

  [types.EDUCATION_CARD_ADD]: (state, { payload }) => ({
    ...state,
    educations: [...state.educations, payload]
  }),

  [types.EDUCATION_CARDS_UPDATE]: (state, { payload }) => {
    const educations = state.educations.filter(item => !item.id);

    return {
      ...state,
      educations: [...payload.educations, ...educations]
    };
  },

  [types.EDUCATION_CARD_EDIT]: (state, { payload }) => {
    const index = findIndex(state.educations, { succesId: payload.successId });

    const newEducations = [...state.educations];
    newEducations.splice(index, 1, payload);

    return {
      ...state,
      educations: newEducations
    };
  },

  [types.EDUCATION_CARD_DELETE]: (state, { payload }) => ({
    ...state,
    educations: state.educations.filter(
      item => item.successId !== payload.successId
    )
  }),

  [types.EXPERIENCE_CARD_ADD]: (state, { payload }) => ({
    ...state,
    work_experiences: [...state.work_experiences, payload]
  }),

  [types.EXPERIENCE_CARD_UPDATE]: (state, { payload }) => {
    const experiences = state.work_experiences.filter(item => !item.id);

    return {
      ...state,
      work_experiences: [...payload.work_experiences, ...experiences]
    };
  },

  [types.EXPERIENCE_CARD_EDIT]: (state, { payload }) => {
    const index = findIndex(state.work_experience, {
      succesId: payload.successId
    });

    const newExperience = [...state.work_experiences];
    newExperience.splice(index, 1, payload);

    return {
      ...state,
      work_experiences: newExperience
    };
  },

  [types.EXPERIENCE_CARD_DELETE]: (state, { payload }) => ({
    ...state,
    work_experience: state.work_experiences.filter(
      item => item.successId !== payload.successId
    )
  })
});

const industryReducer = createReducer(initialState)({
  [types.USER_DATA_SHOW + FULFILLED]: (state, { payload }) => ({
    ...utils.getSpecialistIndustry(payload.data)
  }),

  [types.USER_INDUSTRY_UPDATE + FULFILLED]: (state, { payload }) => ({
    ...state,
    ...utils.getSpecialistIndustry(payload.data)
  })
});

const companyRecuder = createReducer(initialState)({
  [types.USER_DATA_SHOW + FULFILLED]: (state, { payload }) => ({
    ...payload.data.company
  }),

  [types.USER_COMPANY_UPDATE + FULFILLED]: (state, { payload }) => ({
    ...payload.data.company
  })
});

const billingsReducer = createReducer(initialState)({
  [types.USER_DATA_SHOW + FULFILLED]: (state, { payload }) => ({
    ...payload.data.billing
  }),

  [types.USER_BILLINGS_UPDATE + FULFILLED]: (state, { payload }) => ({
    ...payload.data.billing
  })
});

export default combineReducers({
  info: infoReducer,
  industry: industryReducer,
  company: companyRecuder,
  billings: billingsReducer
});
