import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import normalizrMiddleware from "./utils/normalizrMiddleware";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./ducks";
import { LOG_OUT } from "./ducks/user/types";

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) state = undefined;
  return combineReducers(reducers)(state, action);
};

const reduxDevTools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(); // before production {}

export default createStore(
  rootReducer,
  reduxDevTools,
  applyMiddleware(thunkMiddleware, promiseMiddleware(), normalizrMiddleware())
);
