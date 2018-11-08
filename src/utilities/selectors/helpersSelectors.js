import { createSelector } from "reselect";

const prepareForSelect = (state, value = "value", label = "text") => {
  let data = [];

  if (!state) {
    return data;
  }

  switch (state.constructor) {
    case Array:
      state.forEach(item => {
        data.push({ [value]: item.id, [label]: item.name });
      });
      break;

    case Object:
      Object.keys(state).forEach(id => {
        data.push({ [value]: id, [label]: state[id].name });
      });
      break;

    default:
      break;
  }

  return data;
};

export const getDataForSelect = () =>
  createSelector(prepareForSelect, data => data);
