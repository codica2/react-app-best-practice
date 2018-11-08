import styled from "styled-components";

import {
  boxShadow,
  colors,
  primaryColors,
  fontColors
} from "@styled/constants/colors";

export default styled.div`
  position: relative;
  margin: 5px 7px 5px 0;
  outline: none;

  color: #ddd;
  cursor: default;

  .dropdownTitle {
    color: #5366e5;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.3px;
  }

  .close {
    position: absolute;
    top: 3px;
    right: 3px;
    height: 10px;
    width: 10px;
    padding: 10px;
    cursor: pointer;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 1px;
      background: #666;
      transform: translate(-50%, -50%) rotate(var(--crossRotate, 45deg));
    }
    &::after {
      --crossRotate: -45deg;
    }
  }

  .dropdownTrigger {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    outline: none;
    color: white;
    transition: 0.2s;
    cursor: pointer;

    ${props =>
      props.renderToModal &&
      `
      margin: 0px;
      display: flex;
      align-items: center;
    `};

    &:hover {
      color: #999;

      .label {
        color: ${fontColors.regular};
      }
    }

    span {
      transition: inherit;
    }

    .plus {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: ${props => (props.renderToModal ? "0" : "4px 0")};
      height: ${props => (props.renderToModal ? "48px" : "36px")};
      width: ${props => (props.renderToModal ? "48px" : "36px")};
      color: ${colors.blue};
      border-radius: 50%;
      ${props => props.bordered && `border: 1px solid ${colors.lightGreyBlue}`};
      background: ${primaryColors.accentBackground};

      text-align: center;
      font-size: ${props => (props.renderToModal ? "36px" : "21px")};
      line-height: ${props => (props.renderToModal ? "42px" : "unset")};
      margin-right: ${props => (props.renderToModal ? "8px" : "5px")};
      font-weight: 300;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: ${props => (props.renderToModal ? "20px" : "12px")};
        width: 2px;
        border-radius: 2px;
        background: ${colors.blue};
      }

      &::after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }

    .label {
      font-size: ${props => (props.renderToModal ? "1.2em" : "16px")};
      color: #999;
      font-weight: 400;

      &.assignTeam {
        font-size: 14px;
        color: ${primaryColors.lightGrey};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .preloader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    i {
      font-size: 2em;
    }
  }

  .dropdown {
    position: absolute;
    z-index: 1001;

    top: calc(100% + 5px);
    left: 10px;
    min-width: 220px;

    border-radius: 3px;
    background: #fff;
    ${boxShadow.dark};

    .dropdownTitle {
      padding: 10px 15px 0 15px;
      margin-bottom: 0;
    }

    .ui.input {
      width: 100%;
      padding: 10px 15px;

      input {
        display: inline-block;
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 1;
        font-size: 12px;

        &::placeholder {
          color: #a1a1a1;
        }

        &:focus {
          border-color: #dbdbdb;
        }
      }

      i.spinner {
        z-index: 1;
        right: 15px;
      }
    }

    .dropdown-list {
      z-index: 2;
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      max-height: 240px;
      overflow-y: auto;
      border-radius: inherit;
      background: #fff;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      .no-specs:hover {
        background: none;
      }

      div {
        position: relative;
        display: flex;
        flex: 0 0 auto;
        order: 1;
        align-items: center;
        padding: 5px 15px;
        top: calc(100% + 5px);
        overflow-y: hidden;

        font-family: "Roboto";
        font-size: 16px;
        font-weight: 500;
        color: #666;
        cursor: pointer;

        &:hover {
          background: #f7f7f7;
        }

        text-transform: none;

        img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 10px;
        }

        &.assigned {
          order: 0;

          &::before,
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 25px;
            width: 6px;
            height: 2px;
            background: #38ffbf;
            transform: rotate(45deg);
            transform-origin: 100% 50%;
            border-radius: 2px;
          }
          &::before {
            width: 13px;
            transform: rotate(133deg);
          }

          .dropdownTitle {
            padding: 10px 15px 0 15px;
            margin-bottom: 0;
          }

          .ui.input {
            width: 100%;
            padding: 10px 15px;

            input {
              display: inline-block;
              position: relative;
              height: 100%;
              width: 100%;
              z-index: 1;
              font-size: 12px;

              &::placeholder {
                color: #a1a1a1;
              }

              &:focus {
                border-color: #dbdbdb;
              }
            }
          }
        }
      }

      .noResults {
        padding: 5px 15px;
        color: ${primaryColors.accentGrey};
      }
    }
  }
`;
