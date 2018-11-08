import * as types from "./types";
import { createReducer } from "../../utils";
import { getCookie, setCookie } from "@utilities/helpers";

const initialState = {
  opened: !!getCookie("rightSidebarOpened") || false
};

const sidebarReducer = createReducer(initialState)({
  [types.SIDEBAR_TOOGLE]: (state, action) => {
    setCookie("rightSidebarOpened", state.opened ? "" : "open", 1460);

    return {
      opened: !state.opened
    };
  }
});

export default sidebarReducer;
