import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import { primaryColors, colors } from "./constants/colors";

export const DvButton = styled(Button)`
  &.ui.button {
    ${props => (props.indentTop ? "margin-top: 60px;" : "")}
    width: ${props => (props.smallbtn ? "50%" : props.midbtn ? "80%" : "100%")};
    border-radius: ${props =>
      props.smallbtn ? "5px" : props.midbtn ? "5px" : "0"};
    margin-left: ${props =>
      props.smallbtn ? "25%" : props.midbtn ? "10%" : "0"};
    font-size: ${props =>
      props.smallbtn ? "18px" : props.midbtn ? "18px" : "24px"};
    font-family: "Roboto";
    text-align: center;

    &.verify-btn {
      padding: 40px;
    }

    &.width200 {
      width: 200%;
    }
  }

  @media (max-width: 1920px) {
    &.ui.button {
      &.verify-btn {
        padding: 15px;
        margin-bottom: 45px;
      }
    }
  }

  @media (max-width: 991px) {
    &.ui.button {
      &.verify-btn {
        font-size: 18px;
      }

      &.width200 {
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    &.ui.button {
      font-size: 18px;
      ${props => (props.xsindent ? `margin-bottom: 30px` : ``)};
    }
  }
`;

export const NewTeamBtn = styled.div`
  max-width: 1260px;
  margin-top: 100px;
  text-align: center;
  font-family: "Roboto";

  a {
    display: inline-block;
    width: 120px;
    height: 120px;
    background: #fff;
    outline: none;
    border: 2px solid #808080;
    position: relative;
    margin-bottom: 50px;

    &:before {
      content: "";
      position: absolute;
      height: 97px;
      width: 2px;
      background: #808080;
      top: 9px;
      transition: all 0.2s ease-in-out;
    }

    &:after {
      content: "";
      position: absolute;
      width: 97px;
      height: 2px;
      background: #808080;
      left: 9px;
      top: 49%;
      transition: all 0.2s ease-in-out;
    }

    &:active {
      &:before {
        content: "";
        position: absolute;
        height: 55px;
        width: 2px;
        background: #808080;
        top: 31px;
      }

      &:after {
        content: "";
        position: absolute;
        width: 55px;
        height: 2px;
        background: #808080;
        left: 31px;
      }
    }
  }

  span {
    display: block;
    font-size: 28px;
    font-weight: bold;
    color: #000;
  }

  @media (max-width: 1920px) {
    max-width: 1275px;
    margin-top: 50px;

    a {
      width: 80px;
      height: 80px;
      border: 1px solid #808080;
      margin-bottom: 30px;

      &:before {
        height: 60px;
        width: 1px;
        top: 9px;
      }

      &:after {
        width: 60px;
        height: 1px;
        left: 9px;
      }

      &:active {
        &:before {
          content: "";
          height: 35px;
          width: 1px;
          top: 22px;
        }

        &:after {
          width: 35px;
          height: 1px;
          left: 22px;
        }
      }
    }

    span {
      display: block;
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
  }
`;

export const AddNewBtn = styled(Button)`
  &.ui.basic.button {
    border: 2px solid #f2f2f2;
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    position: relative;
    padding-left: 50px;
    margin-top: 20px;
    font-family: "Roboto";
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    z-index: 5;
    color: #666 !important; // overwrite semantic theme

    &:before {
      content: "";
      position: absolute;
      height: 2px;
      width: 21px;
      background: #1991fa;
      left: 11px;
      top: 48%;
    }

    &:after {
      content: "";
      position: absolute;
      height: 21px;
      width: 2px;
      background: #1991fa;
      left: 20px;
      top: 16%;
    }
  }

  @media (min-width: 1921px) {
    &.ui.basic.button {
      border: 2px solid #ccc;
      padding-left: 100px;
      font-size: 28px;

      &:before {
        content: "";
        position: absolute;
        height: 2px;
        width: 36px;
        background: #1991fa;
        left: 20px;
        top: 50%;
      }

      &:after {
        content: "";
        position: absolute;
        height: 36px;
        width: 2px;
        background: #1991fa;
        left: 37px;
        top: 25%;
      }
    }
  }
`;

export const SaveBtn = styled(Button)`
  &.ui.primary.button {
    border-radius: 50%;
    min-width: 60px;
    height: 60px;
    background-color: #fff;
    color: #ccc;
    border: 1px solid #ccc;
    position: ${props => (props.static ? `relative` : `absolute`)};
    bottom: ${props => (props.static ? `10px` : `-26px`)};
    right: ${props => (props.static ? `0` : `20px`)};
    ${props => (props.static ? "margin: 10px" : ``)};
    font-family: "Roboto";
    text-align: center;
    color: #fff;

    span {
      position: absolute;
      min-width: 90px;
      bottom: -36px;
      left: 50%;
      text-transform: uppercase;
      font-size: 12px;
      line-height: 36px;
      color: #ccc;
      font-weight: 0;
      transform: translateX(-50%);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #ccc;
    }

    &::before {
      width: ${props => (props.updatebtn ? `14px` : `15px`)};
      top: ${props => (props.updatebtn ? `38px` : `24px`)};
      left: ${props => (props.updatebtn ? `12px` : `22px`)};
      transform: rotate(45deg);
    }

    &::after {
      width: ${props => (props.updatebtn ? `30px` : `15px`)};
      top: ${props => (props.updatebtn ? `32px` : `34px`)};
      left: ${props => (props.updatebtn ? `20px` : `22px`)};
      transform: rotate(-45deg);
    }
  }

  &.ui.primary.button:hover,
  &.ui.primary.button:focus {
    color: #666;
    border-width: 1px;
    border-color: ${props => (props.updatebtn ? colors.blue : "#666")};
    ${props =>
      props.updatebtn &&
      `box-shadow: 0 0 0 3px ${colors.blue};`} border-style: solid;
    background-color: #fff !important;

    span {
      color: #666;
    }
    &::before,
    &::after {
      background-color: ${props =>
        props.updatebtn
          ? `${colors.blue}; box-shadow: 0 0 0 1px ${colors.blue};`
          : "#666"};
    }
  }
`;

export const BackBtn = styled(Button)`
  &.ui.primary.button {
    border-radius: 50%;
    min-width: 60px;
    height: 60px;
    background-color: #fff;
    color: #ccc;
    border: 1px solid #ccc;
    position: ${props => (props.static ? "relative" : "absolute")};
    bottom: ${props => (props.static ? "10px" : "-26px")};
    left: ${props => (props.static ? "0" : "25px")};
    ${props => (props.static ? "margin: 10px" : ``)};
    font-family: "Roboto";
    text-align: center;
    color: #fff;
    z-index: 5;

    span {
      min-width: 90px;
      text-transform: uppercase;
      font-size: 12px;
      position: absolute;
      color: #ccc;
      bottom: -25px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #ccc;
    }

    &::before {
      width: ${props => (props.updatebtn ? `10px` : `15px`)};
      top: ${props => (props.updatebtn ? `33px` : `24px`)};
      left: ${props => (props.updatebtn ? `20px` : `21px`)};
      transform: rotate(-45deg);
    }

    &::after {
      width: ${props => (props.updatebtn ? `20px` : `15px`)};
      top: ${props => (props.updatebtn ? `30px` : `34px`)};
      left: ${props => (props.updatebtn ? `25px` : `21px`)};
      transform: rotate(45deg);
    }

    @media (max-width: 1200px) {
      &.ui.primary.button {
        left: 15px;
      }
    }

    @media (max-width: 992px) {
      &.ui.primary.button {
        bottom: auto;
      }
    }
  }

  &.ui.primary.button:hover,
  &.ui.primary.button:focus {
    color: ${primaryColors.darkGrey};
    border: 1px solid ${primaryColors.darkGrey};
    background-color: transparent;

    span {
      color: ${primaryColors.darkGrey};
    }
    &::before,
    &::after {
      background-color: #666;
    }
  }
`;

export const CancelBtn = styled(Button)`
  &.ui.primary.button {
    border-radius: 50%;
    min-width: 60px;
    height: 60px;
    background-color: #fff;
    color: #ccc;
    border: 1px solid #ccc;
    position: ${props => (props.static ? "relative" : "absolute")};
    bottom: ${props => (props.static ? "10px" : "-26px")};
    ${props => (props.positionbottom ? `bottom: ${props.positionbottom}` : ``)};
    left: ${props => (props.static ? "0" : "25px")};
    ${props => (props.positionleft ? `left: ${props.positionleft}` : ``)};
    ${props => (props.static ? "margin: 10px" : ``)};
    font-family: "Roboto";
    text-align: center;
    color: #fff;
    z-index: 5;

    span {
      min-width: 90px;
      text-transform: uppercase;
      font-size: 12px;
      position: absolute;
      color: #ccc;
      bottom: -25px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #ccc;
    }

    &::before {
      width: 20px;
      top: 30px;
      left: 19px;
      transform: rotate(-45deg);
    }

    &::after {
      width: 20px;
      top: 30px;
      left: 19px;
      transform: rotate(45deg);
    }

    @media (max-width: 1200px) {
      &.ui.primary.button {
        left: ${props => (props.static ? "0" : "15px")};
      }
    }

    @media (max-width: 992px) {
      &.ui.primary.button {
        bottom: ${props => (props.static ? "10px" : "auto")};
      }
    }
  }

  &.ui.primary.button:hover,
  &.ui.primary.button:focus {
    color: ${primaryColors.darkGrey};
    border: 1px solid ${primaryColors.darkGrey};
    background-color: transparent;

    span {
      color: ${primaryColors.darkGrey};
    }
    &::before,
    &::after {
      background-color: #666;
    }
  }
`;

export const NextBtn = styled(Button)`
  &.ui.primary.button {
    border-radius: 50%;
    min-width: 60px;
    height: 60px;
    background-color: #fff;
    color: #ccc;
    border: 1px solid #ccc;
    position: absolute;
    bottom: -26px;
    right: 25px;
    font-family: "Roboto";
    text-align: center;
    color: #fff;
    z-index: 5;

    span {
      min-width: 90px;
      text-transform: uppercase;
      font-size: 12px;
      position: absolute;
      color: #ccc;
      bottom: -25px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #ccc;
    }

    &::before {
      width: ${props => (props.updatebtn ? `10px` : `15px`)};
      top: ${props => (props.updatebtn ? `33px` : `24px`)};
      left: ${props => (props.updatebtn ? `20px` : `22px`)};
      transform: rotate(45deg);
    }

    &::after {
      width: ${props => (props.updatebtn ? `20px` : `15px`)};
      top: ${props => (props.updatebtn ? `30px` : `34px`)};
      left: ${props => (props.updatebtn ? `25px` : `22px`)};
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 1200px) {
    &.ui.primary.button {
      right: 15px;
    }
  }

  @media (max-width: 992px) {
    &.ui.primary.button {
      bottom: auto;
    }
  }

  &.ui.primary.button:hover,
  &.ui.primary.button:focus {
    color: ${colors.blue};
    border: 1px solid ${colors.blue};
    box-shadow: 0 0 0 3px ${colors.blue};
    background-color: transparent;

    span {
      color: ${primaryColors.darkGrey};
    }
    &::before,
    &::after {
      height: 3px;
      background-color: ${colors.blue};
    }
    &::before {
    }
    &::after {
      top: 33px;
    }
  }
`;

export const SubmitBtn = styled(Button)`
  &.ui.primary.button {
    border-radius: 50%;
    min-width: 60px;
    height: 60px;
    background-color: #fff;
    color: #ccc;
    border: 1px solid #ccc;
    position: relative;
    margin-bottom: 10px;
    font-family: "Roboto";
    text-align: center;
    color: #fff;
    z-index: 5;

    span {
      min-width: 90px;
      text-transform: uppercase;
      font-size: 12px;
      position: absolute;
      color: #ccc;
      bottom: -22px;
      right: -16px;
      font-weight: 0;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #ccc;
    }

    &::before {
      width: 15px;
      top: 37px;
      left: 14px;
      transform: rotate(45deg);
    }

    &::after {
      width: 27px;
      top: 33px;
      left: 23px;
      transform: rotate(-45deg);
    }
  }

  &.ui.primary.button:hover,
  &.ui.primary.button:focus {
    color: #666;
    border: 1px solid #666;
    background-color: #fff !important;

    span {
      color: #666;
    }
    &::before,
    &::after {
      background-color: #666;
    }
  }
`;

const DvBtn = styled(Button)`
  &.ui.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 40px;
    padding: 0 20px;
    width: ${props => (props.fixed ? "140px" : "auto")};
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;

    background-color: ${colors.blue};
    color: #fff;
    font-size: ${props => (props.fontSize ? `${props.fontSize}px` : "18px")};
    text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
    font-weight: 700;
    white-space: nowrap;

    &:hover {
      background-color: #487ef2;
    }

    &:active {
      background-color: #3650e7;
    }

    &.inverted {
      border-color: ${colors.blue};
      background-color: #fff;

      color: ${colors.blue};
      font-weight: 500;

      &:hover {
        box-shadow: unset !important;
        background-color: rgba(72, 126, 242, 0.1);

        color: ${colors.blue};
      }

      &:active {
        box-shadow: inset 0px 1px 3px 0px rgba(54, 80, 231, 0.5) !important;
        background-color: rgba(72, 126, 242, 0.15);
      }
    }

    &.transparent {
      border: none;
    }

    &.fluid {
      width: 100%;
    }

    &:disabled {
      background-color: #dbdbdb;
      border: none;
      color: #fff;
    }
  }
`;

export const DvBlueButton = DvBtn.extend`
  &.ui.button.dv-blue {
    background-color: ${colors.blue};
    color: #fff;
    ${props => props.uppercase && "text-transform: uppercase"};

    &:hover {
      background-color: #487ef2;
    }

    &:active {
      background-color: #3650e7;
    }

    &.inverted {
      border: 1px solid ${colors.blue};
      background-color: #fff;
      color: ${colors.blue};

      &:hover {
        box-shadow: unset !important;
        background-color: rgba(72, 126, 242, 0.1);

        color: ${colors.blue};
      }

      &:active {
        box-shadow: inset 0px 1px 3px 0px rgba(54, 80, 231, 0.5) !important;
        background-color: rgba(72, 126, 242, 0.15);
      }
    }

    &.transparent {
      border: none;
    }

    &:disabled {
      background-color: #dbdbdb;
      border: none;
      color: #fff;
    }
  }
`;

export const DvButtonRed = DvBtn.extend`
  &.ui.button.dv-red {
    background-color: ${primaryColors.red};
    color: #fff;

    &:hover {
      background-color: #ee5c5c;
      color: #fff;
    }

    &:active {
      background-color: #ee5c5c;
      box-shadow: inset 0px 1px 3px 0px rgba(54, 80, 231, 0.5) !important;
    }

    &.inverted {
      border: 1px solid ${primaryColors.red};
      background-color: transparent;

      color: ${primaryColors.red};

      &:hover {
        box-shadow: unset !important;
        background-color: #ee5c5c;
        color: #fff;
      }

      &:active {
        box-shadow: inset 0px 1px 3px 0px rgba(54, 80, 231, 0.5) !important;
      }
    }

    &.transparent {
      border: none;
    }

    &.fluid {
      width: 100%;
    }

    &:disabled {
      background-color: #dbdbdb;
      border: none;
      color: #fff;
    }
  }
`;

export const DvButtonBlue = styled(Button)`
  &.ui.button.dv-blue {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    border-radius: 3px;
    background-color: ${colors.blue};
    color: #fff;
    white-space: nowrap;
    box-sizing: border-box;
    height: 40px;
    padding: 0 20px;

    &:hover {
      background-color: #487ef2;
    }

    &:active {
      background-color: #3650e7;
    }

    &.inverted {
      background-color: #fff;
      color: ${colors.blue};
      border: 1px solid ${colors.blue};
      font-weight: 500;

      &:hover {
        color: ${colors.blue};
        box-shadow: unset !important;
        background-color: rgba(72, 126, 242, 0.1);
      }

      &:active {
        box-shadow: inset 0px 1px 3px 0px rgba(54, 80, 231, 0.5) !important;
        background-color: rgba(72, 126, 242, 0.15);
      }
    }

    &.fluid {
      width: 100%;
    }

    &:disabled {
      color: #fff;
      background-color: #dbdbdb;
      border: none;
    }
  }
`;
