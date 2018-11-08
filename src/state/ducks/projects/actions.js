import * as types from "./types";
import history from "../../../history";
import { fetch } from "../../utils";
import { project } from "../../schemas";
import { postProject, getProjectUrl } from "./utils";

import {
  S_REDGUY,
  GET,
  POST,
  PUT,
  createNotification,
  displayError
} from "@utilities";

export const getAllProjects = () => (dispatch, getState) => {
  const { user } = getState();
  const url = getProjectUrl(user);

  dispatch({
    type: types.SHOW_PROJECTS,
    payload: fetch(GET, url),
    meta: {
      schema: [project]
    }
  });
};

const createProject = payload => ({
  type: types.CREATE_PROJECT,
  payload,
  meta: {
    schema: project
  }
});

/**
 * Create project
 *
 * @param  {object} payload project data
 * @param  {function} calback  calback
 */

export const saveCreatedProgect = (payload, calback) => (
  dispatch,
  getState
) => {
  const state = getState(),
    auth = state.user;

  const logo = payload["logo"] ? payload["logo"][0] : null;

  if (logo) {
    let reader = new FileReader();
    reader.readAsDataURL(logo);

    reader.onload = () => {
      return fetch(POST, `/projects`, {
        project: postProject(auth, payload, reader.result)
      })
        .then(res => {
          const { data } = res;
          createNotification({
            type: "success",
            text: `${
              data.name ? `${data.name} project ` : "Project"
            } was created`
          });

          dispatch(createProject(res));

          calback();
          history.push(`/dashboard/project/${data.id}`);
        })
        .catch(displayError)
        .catch(calback);
    };
  } else {
    return fetch(POST, `/projects`, {
      project: postProject(auth, payload)
    })
      .then(res => {
        const { data } = res;
        createNotification({
          type: "success",
          text: `${data.name ? `${data.name} project ` : "Project"} was created`
        });

        dispatch(createProject(res));

        calback();
        history.push(`/dashboard/project/${data.id}`);
      })
      .catch(error => {
        createNotification({
          type: "error"
        });

        calback();
      });
  }
};

const showProject = payload => ({
  type: types.SHOW_PROJECT,
  payload
});

export const getProject = id => dispatch => {
  fetch(GET, `/projects/${id}`)
    .then(res => {
      dispatch(showProject(res));
    })
    .catch(displayError);
};

export const updateProject = payload => ({
  type: types.UPDATE_PROJECT,
  payload,
  meta: {
    schema: project
  }
});

/**
 * Publish project
 *
 * @param  {object} payload project data
 */

export const publishProject = payload => (dispatch, getState) => {
  const userRole = getState().user.role;

  let skill_ids =
    payload["skills"] &&
    payload["skills"].map(skill => {
      return skill.value;
    });

  let files = payload.file
    ? payload.file.map(file => {
        return {
          document: file,
          entity_type: "Project"
        };
      })
    : [];

  let state = null,
    redGuyId = payload["red_guy_id"];

  if (userRole === S_REDGUY) {
    state = "discovery";
  } else {
    if (redGuyId) {
      state = "reviewed_by_admin";
    } else {
      state = payload["state"];
    }
  }

  return fetch(PUT, `/projects/${payload.id}`, {
    project: {
      ...payload,
      state: state,
      attached_files_attributes: files,
      skill_ids
    },
    review: payload.state === "reviewed_by_admin"
  })
    .then(res => {
      const { data } = res;

      createNotification({
        type: "success",
        text: `${data.name ? `${data.name} project ` : "Project"} was published`
      });

      dispatch(updateProject(res));
    })
    .catch(displayError);
};

//TODO: move promise from form container to HERE
