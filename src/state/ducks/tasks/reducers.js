import * as types from "./types";
import omit from "lodash/omit";
import { createReducer } from "../../utils";
import { REJECTED, DELETE_FILE } from "../../../utilities";

const initialState = {
  current: null,
  loading: false,
  loaded: false,
  error: null,
  byId: {},
  allIds: []
};

const tasksReducer = createReducer(initialState)({
  [types.SET_EPIC]: (state, { payload }) => ({
    ...state,
    current: payload,
    loading: true,
    error: null
  }),

  [types.SHOW_EPIC_TASKS]: (state, { payload, epic }) => ({
    ...state,
    loading: false,
    loaded: epic,
    byId: { ...payload.entities.tasks },
    allIds: payload.result
  }),

  [types.SHOW_EPIC_TASKS + REJECTED]: (state, { payload, epic }) => ({
    ...state,
    loading: false,
    loaded: epic,
    error: payload
  }),

  [types.CREATE_EPIC_TASK]: (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      [payload.data.id]: payload.data
    },
    allIds: [...state.allIds, payload.data.id]
  }),

  [types.UPDATE_EPIC_TASK]: (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      [payload.data.id]: { ...state.byId[payload.data.id], ...payload.data }
    }
  }),

  [types.DELETE_EPIC_TASK]: (state, { payload }) => ({
    ...state,
    byId: { ...omit(state.byId, payload.data.id) },
    allIds: state.allIds.filter(id => id !== payload.data.id)
  }),

  [DELETE_FILE]: (state, { payload }) => {
    const { id, entity_id: taskId, entity_type } = payload.data;
    if (entity_type === "Task") {
      const task = state.byId[taskId];
      return {
        ...state,
        byId: {
          ...state.byId,
          [taskId]: {
            ...task,
            attached_files: task.attached_files.filter(file => file.id !== id)
          }
        }
      };
    }

    return state;
  }
});

export default tasksReducer;
