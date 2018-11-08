import * as types from "./types";
import { fetch } from "../../utils";
import {
  GET,
  POST,
  DELETE,
  REJECTED,
  createNotification,
  displayError,
  PUT
} from "../../../utilities";
import { task } from "../../schemas";
import { getFiles, getSpecialistIds } from "./utils";

const setEpic = payload => ({
  type: types.SET_EPIC,
  payload
});

const showEpicTasks = (payload, epic) => ({
  type: types.SHOW_EPIC_TASKS,
  payload,
  epic,
  meta: {
    schema: [task]
  }
});

const setTasksFail = (payload, epic) => ({
  type: types.SHOW_EPIC_TASKS + REJECTED,
  payload,
  epic
});

export const getEpicTasks = epic => (dispatch, getState) => {
  dispatch(setEpic(epic));
  fetch(GET, `/epics/${epic}/tasks`)
    .then(res => {
      if (getState().tasks.current === epic) {
        dispatch(showEpicTasks(res, epic));
      }
    })
    .catch(error => {
      dispatch(setTasksFail(error, epic));
      console.error(error);
    });
};

const createTask = payload => ({
  type: types.CREATE_EPIC_TASK,
  payload
});

export const createEpicTask = values => dispatch =>
  fetch(POST, `/epics/${values.epic}/tasks`, {
    task: {
      ...values,
      epic_id: values.epic,
      state: 0,
      specialist_ids: getSpecialistIds(values.specIds),
      attached_files_attributes: getFiles(values.file)
    },

    attached_files_attributes: {
      document: values["file"]
    }
  })
    .then(res => {
      const { data } = res;

      createNotification({
        type: "success",
        text: `${data.name ? `${data.name} epic ` : "Epic"} was created`
      });

      dispatch(createTask(res));
    })
    .catch(displayError);

const deleteTask = payload => ({
  type: types.DELETE_EPIC_TASK,
  payload
});

export const updateTask = payload => ({
  type: types.UPDATE_EPIC_TASK,
  payload
});

export const taskUpdated = (res, dispatch) => {
  dispatch(updateTask(res));
};

export const updateTaskFetch = payload =>
  fetch(PUT, `/epics/${payload.epic_id}/tasks/${payload.id}`, {
    task: {
      ...payload
    }
  });

/**
 * Delete task by epic
 *
 * @param  {number} epic epic id
 * @param  {number} task task id
 * @param  {function} callback delete card from board
 */

export const deleteEpicTask = (epic, task) => dispatch =>
  fetch(DELETE, `/epics/${epic}/tasks/${task}`)
    .then(res => {
      const { data } = res;
      createNotification({
        type: "success",
        text: `${data.name ? `${data.name} epic ` : "Epic"} was deleted`
      });
      dispatch(deleteTask(res));
    })
    .catch(displayError);

export const assignSpecialistToTask = (epic, task, id) => dispatch => {
  fetch(PUT, `/epics/${epic}/tasks/${task}/assign`, { specialist_id: id })
    .then(res => {
      dispatch(updateTask(res));
    })
    .catch(displayError);
};

export const removeSpecialistFromTask = (epic, task, id) => dispatch => {
  fetch(DELETE, `/epics/${epic}/tasks/${task}/remove/${id}`)
    .then(res => {
      dispatch(updateTask(res));
    })
    .catch(displayError);
};
