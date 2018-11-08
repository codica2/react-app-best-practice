import { createSelector } from "reselect";
import { S_REDGUY, SPECIALIST, CLIENT } from "@utilities";

export const isSpecialist = () =>
  createSelector(user => user.type === SPECIALIST, value => value);

export const isClient = () =>
  createSelector(user => user.type === CLIENT, value => value);

export const isRedguy = () =>
  createSelector(user => user.role === S_REDGUY, value => value);
