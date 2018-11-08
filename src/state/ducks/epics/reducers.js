import * as types from "./types";
import omit from "lodash/omit";
import { createReducer } from "../../utils";
import { REJECTED } from "@utilities";
import { DELETE_FILE } from "../../../utilities";

const initialState = {
  current: null,
  loading: false,
  loaded: false,
  error: null,
  byId: {},
  allIds: []
};

const epicsReducer = createReducer(initialState)({
  [types.SET_PROJECT]: (state, { payload }) => ({
    ...state,
    current: payload,
    loading: true,
    error: null
  }),

  [types.SHOW_EPICS]: (state, { payload, projectId }) => ({
    ...state,
    loading: false,
    loaded: projectId,
    byId: { ...payload.entities.epics },
    allIds: payload.result
  }),

  [types.SHOW_EPICS + REJECTED]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),

  [types.CREATE_EPIC]: (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      [payload.data.id]: {
        ...payload.data
      }
    },
    allIds: [...state.allIds, payload.data.id]
  }),

  [types.UPDATE_EPIC]: (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      [payload.data.id]: {
        ...payload.data
      }
    }
  }),

  [types.DELETE_EPIC]: (state, { payload }) => ({
    ...state,
    byId: omit(state.byId, payload.data.id),
    allIds: state.allIds.filter(id => id !== payload.data.id)
  }),

  [DELETE_FILE]: (state, { payload }) => {
    const { id, entity_id: epicId, entity_type } = payload.data;
    if (entity_type === "Epic") {
      const epic = state.byId[epicId];
      return {
        ...state,
        byId: {
          ...state.byId,
          [epicId]: {
            ...epic,
            attached_files: epic.attached_files.filter(file => file.id !== id)
          }
        }
      };
    }

    return state;
  }
});

export default epicsReducer;
