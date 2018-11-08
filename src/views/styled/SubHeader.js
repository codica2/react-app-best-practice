import styled from "styled-components";
import { boxShadow, secondaryColors, miscellaneous } from "./constants/colors";

export default styled.div`
  height: 131px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 20px;

  background: ${miscellaneous.gradient.blue};

  margin-bottom: ${props =>
    props.profileForm
      ? "80px"
      : props.about || props.projectSubHeader
      ? "calc(20px + 1rem)"
      : "20px"};
  text-align: center;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px 15px;
  ${boxShadow.light};
  transition: 0.4s ease-in-out;

  & > div {
    display: flex;

    &.moduleSubHeader {
      padding-left: 25px;
    }

    a.button,
    section,
    button {
      position: relative;
      color: #fff;
      opacity: 0.7;
      font-family: "Roboto", sans-serif;
      font-size: 11px;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      text-decoration: none;
      transition: 0.2s;
      width: 90px;
      ${props => props.disabled && "pointer-events: none"};

      &.disabled {
        pointer-events: none;
      }

      i {
        font-size: 2em;

        &.small {
          font-size: 1.2em;
        }
      }

      .container {
        border: none !important;
        width: 67px;
        height: 67px;
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
      }

      &:hover,
      &.active {
        color: #fff;
        opacity: 1;

        .allModules {
          font-weight: 500;
          &::before {
            opacity: 1;
          }
        }

        &.container {
          border: none;
        }
      }

      .boldLink {
      }

      .profileLink,
      .teamLink {
        font-size: 14px;
      }

      .dashboard {
        font-size: 10px;
      }

      &.active {
        div {
          border: 2px solid #fff;
        }
      }

      .addButton {
        border: 2px solid #fff;
        &::after,
        &::before {
          content: "";
          height: 24px;
          width: 2px;
          border-radius: 2px;
          background: #fff;
          position: absolute;
          opacity: 0.8;
        }
        &::after {
          transform: rotate(90deg);
        }
      }
    }

    &.statements {
      a {
        div {
          font-size: 12px;
        }
      }
    }

    &.teamSubHeader {
      font-size: 12px;
    }

    &.kanbanSubHeader {
      a:not(:first-of-type) {
        margin-left: -12px;
      }
    }

    &.board-progress-bars {
      transition: 0.2s;

      &.fade {
        opacity: 0;
        visibility: hidden;
      }
      a {
        &:not(.add-button) {
          opacity: 1;
        }

        div {
          border: 2px solid #fff;
        }
      }
      &.visible {
        display: flex !important;
      }
    }
  }

  .progressBarsLink {
    a,
    section {
      width: 75px;
    }
    section {
      position: relative;
    }
  }

  .button {
    cursor: pointer;
  }

  .right-link {
    font-size: 15px;

    & + span {
      transition: inherit;
    }

    &.my-tasks {
      &.active {
        border-color: ${secondaryColors.green};
        box-shadow: 0 0 0 1px ${secondaryColors.green};
      }

      &.unactive {
        opacity: 0.6;

        &:hover {
          opacity: 1;

          & + span {
            opacity: 1;
          }
        }

        & + span {
          opacity: 0.6;
        }
      }
    }
  }

  .accountSub {
    font-size: 10px;
    width: 74px;
    height: 74px;
  }

  .saveBtn {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .close::after,
  .close::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 1px;
    background-color: #fff;
    top: 33px;
  }
  .close::after {
    transform: rotate(45deg);
  }
  .close::before {
    transform: rotate(135deg);
  }

  .addLink::before,
  .addLink::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 1px;
    background-color: #fff;
  }

  .addLink::after {
    transform: rotate(90deg);
  }

  .arrow {
    & + span {
      display: inline-block;
      position: absolute;
      top: 33px;
      right: 45%;
      width: 46px;
      height: 1px;
      background-color: #fff;
      opacity: 0.7;
    }
  }

  .arrow-down {
    & + span {
      display: inline-block;
      position: absolute;
      top: -8px;
      right: 50%;
      width: 1px;
      height: 46px;
      background-color: #fff;
      opacity: 0.7;
    }
  }

  .arrow::after,
  .arrow::before {
    content: "";
    position: absolute;
    top: 33px;
    right: 45%;
    width: 10px;
    height: 1px;
    background-color: #fff;
    transform: rotate(45deg);
    transform-origin: 100% 50%;
  }

  .arrow::before {
    transform: rotate(-45deg);
  }

  .arrow-down::after,
  .arrow-down::before {
    content: "";
    position: absolute;
    top: 38px;
    right: 50%;
    width: 10px;
    height: 1px;
    background-color: #fff;
    transform: rotate(141deg);
    transform-origin: 100% 50%;
  }

  .arrow-down::before {
    transform: rotate(38deg);
  }

  .completeLaterLink:hover {
    border: none;

    & > div {
      border: none;
    }
  }

  .filterVillage,
  .arrowVillage {
    border: none !important;
    font-size: 12px;
    font-weight: normal;
  }

  .arrowVillage {
    margin: 0;
    width: 10px;
  }

  .filterVillage:hover,
  .arrowVillage:hover,
  .filterVillage:focus,
  .arrowVillage:focus {
    border: none;
  }

  .arrowVillage::before,
  .arrowVillage::after {
    content: "";
    position: absolute;
    top: 33px;
    left: 0;
    width: 8px;
    height: 1px;
    transform: rotate(45deg);
    background-color: #fff;
  }

  .arrowVillage::before {
    top: 28px;
    transform: rotate(-45deg);
  }

  a {
  }

  section {
    position: relative;
    color: #fff;
    opacity: 0.7;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    font-weight: 600;
    line-height: 27px;
    text-transform: uppercase;
    text-decoration: none;

    & + section {
      margin-left: 12px;
    }

    &.active {
      color: #fff;
      opacity: 1;

      & > div {
        border: 1px solid #fff;
      }

      &.container {
        border: none;
      }
    }
  }

  @media (max-width: 1920px) {
    height: 131px;
  }

  ${props =>
    props.sidebarCondition &&
    !props.module &&
    `
        @media (min-width: 1441px) {
            max-width: 100%;
        }
    `} @media (max-width: 991px) {
    a {
      font-size: 10px;
    }
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: space-between;

    a {
      margin: 0 18px !important;
    }
  }

  @media (max-width: 401px) {
    a {
      font-size: 10px;

      & + a {
        margin-left: 20px;
      }
    }
  }
`;
