import * as types from "./types";
import { fetch } from "../../utils";
import {
  POST,
  PUT,
  DELETE,
  createNotification,
  displayError
} from "@utilities";
import { channels } from "../../schemas";

const createChannel = payload => ({
  type: types.CREATE_CHANNEL,
  payload
});

export const createTeamChannel = (team, data) => dispatch => {
  fetch(POST, `/teams/${team}/channels`, data)
    .then(res => {
      dispatch(createChannel(res.data));
    })
    .catch(displayError);
};

const updateChannel = payload => ({
  type: types.UPDATE_CHANNEL,
  payload,
  meta: {
    schema: channels
  }
});

export const updateTeamChannel = (team, channel, data) => dispatch =>
  fetch(PUT, `/teams/${team}/channels/${channel}`, data)
    .then(res => {
      dispatch(updateChannel(res));
    })
    .catch(displayError);

const deleteChannel = payload => ({
  type: types.DELETE_CHANNEL,
  payload
});

export const deleteTeamChannel = (team, channel) => dispatch =>
  fetch(DELETE, `/teams/${team}/channels/${channel}`)
    .then(res => {
      const { data } = res;
      dispatch(deleteChannel(data));
      createNotification({
        type: "success",
        text: `${data.name ? `${data.name} channel ` : "Channel"} was deleted`
      });
    })
    .catch(displayError);

const addToChannel = payload => ({
  type: types.ADD_TO_CHANNEL,
  payload,
  meta: {
    schema: channels
  }
});

export const assignSpecialist = (team, channel, specialist_id) => dispatch =>
  fetch(PUT, `/teams/${team}/channels/${channel}/assign`, {
    specialist_id
  })
    .then(res => {
      dispatch(addToChannel(res));
    })
    .catch(displayError);

const removeFromChannel = payload => ({
  type: types.REMOVE_FROM_CHANNEL,
  payload,
  meta: {
    schema: channels
  }
});

export const removeSpecialist = (team, channel, specialist_id) => dispatch =>
  fetch(DELETE, `/teams/${team}/channels/${channel}/remove/${specialist_id}`)
    .then(res => {
      dispatch(removeFromChannel(res));
    })
    .catch(displayError);
