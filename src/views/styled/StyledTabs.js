import styled from "styled-components";

import { colors, fontColors, miscellaneous } from "./constants/colors";

export default styled.div`
    margin-top: ${props => props.mTop || "0px"};
    width: ${props => (props.widthAuto ? "100%" : "850px")};

    font-family: "Roboto", sans-serif;
    font-weight: 400;

    .form-header {
      height: 73px;
      line-height: 73px;
      text-align: center;
      color: #fff;
      background-color: #1991fa;
    }

    .form-body {
      padding: 72px;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }

    .form-footer {
      height: 73px;
      text-align: center;
      color: #fff;
      background-color: #1991fa;
      border-radius: 0;
      width: 100%;
      font-size: 24px;
      font-family: Roboto, sans-serif;
    }

    .ui.segment.active.tab {
      color: #000;
    }

    .ui {
      &.text.menu {
        margin: 0 auto;

        .item {
          font-family: 'Roboto', medium;
          width: 50%;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
          text-align: center;
          display: inline-block;
          text-transform: uppercase;
          padding: 20px 0;
          color: ${fontColors.blue.inert};
          border-bottom: 1px solid ${miscellaneous.lightBorder};

          &.active {
            color: ${fontColors.blue.active};
            font-weight: 500;
            border-bottom: 2px solid ${colors.blue};

            &:hover {

            }
          }
        }
      }

      &.segment.active.tab {
        margin-top: 0;
        border-radius: 0;
        box-shadow: none;
        border-top: 0;
        border-bottom: 0;
        border: none;
      }
    }

    .radio-group .ui.radio.checkbox {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        z-index: 9999999999;
        width: 100%;
        height: 100%;
      }
    }

    .ownRadio {
      position: relative;
    }

    .ownInput {
      opacity: 0;

      &:checked + .ownRadio {

        &::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          width: 9px;
          height: 9px;
          background-color: #1991fa;
          top: 3px;
          left: -17px;
          box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
        }
      }
    }

    .ownRadio::before {
      top: 0;
      left: -20px;
      content: '';
      position: absolute;
      border-radius: 50%;
      display: block;
      width: 15px;
      height: 15px;
      border: 1px solid #000;
    }

    @media(min-width: 1921px) {
      .ui.segment {
        .radio-group {
          font-size: 28px;
          padding-left: 40px;
          margin-bottom: 40px;
        }
      }

      .ownRadio::before {
          height: 30px;
          width: 30px;
          left: -55px;
      }

      .ownInput:checked + .ownRadio::after {
          width: 20px;
          height: 20px;
          top: 5px;
          left: -50px;
      }
    }

    @media (max-width: 1920px) {
     ${props => (props.widthAuto ? `width: 100%` : `width: 650px`)};
    }

    @media (max-width: 1499px) {

       ${props => (props.widthAuto ? `width: 100%` : `width: 475px`)};

       .ui {
        &.text.menu {
          .item {
            line-height: 45px;
          }
        }
      }
    }

    @media (max-width: 1024px) {
        ${props => (props.widthAuto ? `width: 100%` : `width: 400px`)};
    }

    @media (max-width: 767px) {
        ${props => (props.widthAuto ? `width: 100%` : `width: 560px`)};
        margin 40px auto 0;
        border: none;

        .ui {
            &.segment.active.tab {
                border: none;
            }
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        margin 40px auto 0;
        border: none;
    }
`;
