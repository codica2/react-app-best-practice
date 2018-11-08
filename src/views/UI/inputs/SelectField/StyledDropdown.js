import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";

import { fontColors, colors } from "@styled/constants/colors";

export default styled(Dropdown)`
  &.ui.selection.dropdown {
    font-family: "Roboto";
    font-size: 16px;
    color: ${fontColors.regular};
    padding: 7px 10px;
    line-height: 22px;
    letter-spacing: 1.5px;
    border-radius: 6px;
    border: 1px solid ${colors.lightGreyBlue};
    min-height: auto;
    max-height: 38px;

    & > .dropdown.icon {
      line-height: 1em;
    }

    & > .text {
      max-width: 100%;
      padding-right: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &.default {
        color: ${fontColors.light};
      }
    }

    &.search > input.search {
      line-height: inherit;
      padding: inherit;
    }

    &.button {
      & > .text {
        color: ${fontColors.regular};
        font-weight: 400;
      }

      &:hover {
        background-color: inherit;
    }

    i.icon {
      color: ${fontColors.light};
    }
  }

  &.ui.selection.active.dropdown {
    border-color: ${colors.blue};

    .menu {
      border-color: inherit;
    }
  }
`;
