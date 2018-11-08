import styled from "styled-components";
import { Popup } from "semantic-ui-react";

import { boxShadow, colors } from "@styled/constants/colors";

export default styled(Popup)`
  &.ui.popup {
    &.nav-profile-dropdown {
      width: 180px;
      border: none;
      padding: 16px 0;
      ${boxShadow.grey};

      .inner-wrapper {
        display: flex;
        flex-flow: column nowrap;

        .nav-link {
          padding: 0 20px;
          color: black;
          font-size: 16px;
          line-height: 32px;

          i {
            width: 30px;
            color: ${colors.blue};
          }

          &:hover {
            background: ${colors.lightGreyBlue};
          }

          &.active {
            color: ${colors.darkBlue};
          }
        }
      }
    }
  }
`;
