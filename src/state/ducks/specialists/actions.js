import * as types from "./types";
import { fetch } from "../../utils";
import { GET, displayError } from "@utilities";
import { specialist } from "../../schemas";

const showSpecialist = payload => ({
  type: types.SHOW_SPECIALIST,
  payload,
  meta: {
    schema: specialist
  }
});

export const getSpecialist = id => dispatch =>
  fetch(GET, `/specialists/${id}`)
    .then(res => {
      dispatch(showSpecialist(res));
    })
    .catch(displayError);
