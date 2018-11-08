import styled from "styled-components";

import { fontColors, colors } from "../constants/colors";

export default styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: 1.2px;
  color: #666;
  flex-basis: ${props =>
    props.columns ? Math.round(100 / props.columns) + "%" : "33%"};}
  margin-bottom: 5px;

  &:nth-child(even) {
    ${props => props.columns === 2 && "padding-left: 1rem"};
  }


  .ui.radio.checkbox {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      z-index: 9999999999;
      width: 100%;
      height: 100%;
    }
  }

  .ownRadio,
  .ownCheckbox,
  .ownInput {
    cursor: pointer;
  }

  .ownRadio,
  .ownCheckbox {
    position: relative;
    padding-left: 20px;
    font-size: 14px;
    color: ${fontColors.regular};
  }

  .ownInput {
    opacity: 0;
    position: absolute;

    &:checked + .ownRadio,
    &:checked + .ownCheckbox {
      &::after {
        content: "";
        position: absolute;
      }
    }

    &:checked + .ownRadio {
      &::after {
        border-radius: 50%;
        width: 9px;
        height: 9px;
        background-color: ${colors.blue};
        top: 3px;
        left: 3px;
      }
    }

    &:checked + .ownCheckbox {
      &::after {
        left: 5px;
        top: 1px;
        width: 6px;
        height: 10px;
        border: solid ${colors.blue};
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  .ownRadio,
  .ownCheckbox {
    &:before {
      top: 0;
      left: 0;
      content: "";
      position: absolute;
      display: block;
      width: 15px;
      height: 15px;
      border: 1px solid #ccc;
    }
  }

  .ownRadio {
    &:before {
      border-radius: 50%;
    }
  }
`;
