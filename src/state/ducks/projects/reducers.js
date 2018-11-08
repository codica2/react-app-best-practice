import * as types from "./types";
import { createReducer } from "../../utils";
import { FULFILLED, PENDING, REJECTED, DELETE_FILE } from "../../../utilities";

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  byId: {},
  allIds: []
};

const projectsReducer = createReducer(initialState)({
  [types.SHOW_PROJECTS + PENDING]: (state, action) => ({
    ...state,
    loading: true
  }),

  [types.SHOW_PROJECTS + FULFILLED]: (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    byId: { ...action.payload.entities.projects },
    allIds: [...action.payload.result]
  }),

  [types.SHOW_PROJECTS + REJECTED]: (state, action) => ({
    ...state,
    error: true
  }),

  [types.CREATE_PROJECT]: (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      ...payload.entities.projects
    },
    allIds: [...state.allIds, payload.result]
  }),

  [types.UPDATE_PROJECT]: (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      ...payload.entities.projects
    }
  }),

  [DELETE_FILE]: (state, { payload }) => {
    const { id, entity_id: projectId, entity_type } = payload.data;
    if (entity_type === "Project") {
      const project = state.byId[projectId];
      return {
        ...state,
        byId: {
          ...state.byId,
          [projectId]: {
            ...project,
            attached_files: project.attached_files.filter(
              file => file.id !== id
            )
          }
        }
      };
    }

    return state;
  }
});

export default projectsReducer;
