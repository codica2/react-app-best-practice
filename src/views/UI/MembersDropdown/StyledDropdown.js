import styled from "styled-components";

import { boxShadow, colors, primaryColors } from "@styled/constants/colors";

export default styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  .dropdownWrapper {
    display: inline-flex;
    position: relative;
    padding: 4px 0;

    .allMembers {
      margin-right: 5px;
      height: 36px;
      width: 36px;
      border-radius: 50%;
      background: ${primaryColors.accentBackground};
      border: 1px solid ${colors.lightGreyBlue};
      color: ${colors.blue};
      text-align: center;
      line-height: 36px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      z-index: 1;
    }

    .membersDropdown {
      position: absolute;
      z-index: 100;
      top: calc(100% + 4px);
      left: 0;
      width: 240px;
      padding: 1rem;
      background: white;
      ${boxShadow.dark};
      border-radius: 3px;

      & > div {
        display: inline-block;
      }

      h3 {
        flex: 0 0 100%;
        font-size: 0.8em;
        text-transform: uppercase;
        color: ${colors.blue};
        padding-bottom: 5px;
        margin-bottom: 4px;
        font-weight: 600;
        font-family: "Roboto";
        border-width: 0px;
        border-bottom-width: 3px;
        border-style: solid;
        -webkit-border-image: -webkit-gradient(left, #2d68ee 0%, #7439e3 100%)
          100% 2 stretch;
        -webkit-border-image: -webkit-linear-gradient(
            left,
            #2d68ee 0%,
            #7439e3 100%
          )
          100% 2 stretch;
        -moz-border-image: -moz-linear-gradient(left, #2d68ee 0%, #7439e3 100%)
          100% 2 stretch;
        -o-border-image: -o-linear-gradient(left, #2d68ee 0%, #7439e3 100%) 100%
          2 stretch;
        border-image: linear-gradient(left, #2d68ee 0%, #7439e3 100%) 100% 2
          stretch;
      }
    }
  }
`;
