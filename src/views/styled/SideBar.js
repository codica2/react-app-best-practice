import styled from "styled-components";

import {
  boxShadow,
  colors,
  primaryColors,
  fontColors,
  miscellaneous
} from "./constants/colors";

export default styled.aside`
  position: fixed;
  z-index: 998;
  top: 87px;

  width: 100%;
  max-width: 240px;
  height: calc(100vh - 87px);

  background-color: white;
  color: #b3b3b3;
  ${boxShadow.light};

  transition: 0.4s ease-in-out, height 0s;
  outline: none;

  &.left {
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;

    .title {
      z-index: 1;
      flex: 0 0 60px;
      display: flex;
      align-items: center;
      padding: 0 22px;

      text-transform: uppercase;
      color: ${colors.darkBlue};

      h4 {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.88px;
      }
    }

    .title:not(:first-of-type) {
      border-top: 1px solid ${miscellaneous.lightBorder};
    }

    .title {
      z-index: 1;
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 22px;

      text-transform: uppercase;
      color: ${colors.darkBlue};

      h4 {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.88px;
      }
    }

    .projects:not(:last-of-type) {
      margin-bottom: 20px;
    }

    .project-link {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding-right: 30px;

      text-align: center;

      .project-logo,
      .add-project-button {
        height: 50px;
        width: 50px;
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 50px;
        margin: 5px 12px;

        border-radius: 50%;
        border: 1px solid ${colors.lightGreyBlue};
      }

      img {
        object-fit: cover;
        background: #fff;
      }

      .project-logo.no-logo {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        font-size: 40px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: -1px;
        text-align: center;

        background: linear-gradient(to top left, #00a2ee 0%, #00e1ce 100%);
        color: #fff;
      }

      .project-name {
        padding: 8px;

        font-size: 18px;
        color: ${fontColors.black};
        font-weight: 500;
        text-align: left;
        max-width: 120px;
        word-wrap: break-word;

        transition: 0.4s;
      }

      .add-project-button {
        display: inline-block;
        position: relative;
        background: ${primaryColors.accentBackground};

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          height: 12px;
          width: 2px;

          background: ${colors.blue};
        }

        &::after {
          height: 2px;
          width: 12px;
        }
      }

      .add-project-label {
        padding: 8px;
        color: ${fontColors.light};
        font-size: 18px;
        font-weight: 500;
        line-height: normal;

        &:hover {
          color: ${fontColors.black};
        }
      }

      &.with-epics::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%) rotate(var(--rotate, 45deg));

        height: 10px;
        width: 10px;

        border: solid ${colors.blue};
        border-width: 0 0 2px 2px;

        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
      }

      &:not(.add-project) {
        &:hover {
          &::after {
            opacity: 1;
            visibility: visible;
          }
        }

        &.active {
          background: ${primaryColors.accentBackground};

          &.with-epics::after {
            opacity: 1;
            visibility: visible;
            --rotate: -45deg;
          }

          & + .modules {
            display: flex;
          }
        }
      }
    }

    .modules {
      display: none;
      position: relative;
      flex-flow: column nowrap;
      padding: 7px 7px 7px 36px;
      min-height: 60px;

      color: ${fontColors.regular};
      font-size: 16px;
      font-weight: 400;

      animation: fadeIn 0.6s forwards;
      opacity: 0;

      .project-module {
        display: block;
        padding: 6px 0;
        color: inherit;
        word-wrap: break-word;

        &.active {
          color: ${fontColors.blue.active};
        }
      }
    }
  }

  &.right {
    right: 0;

    transform: translateX(100%);

    &.open {
      transform: translateX(0);

      &:hover {
        .trigger {
          right: calc(100% + 15px);
          &::before,
          &::after {
            left: 15px;
          }
        }
      }

      .trigger {
        right: calc(100% - 30px);
        &::before {
          top: calc(50% - 8px);
        }
        &::after {
          top: calc(50% + 8px);
        }
      }
    }

    .trigger {
      position: absolute;
      top: 50%;
      right: 100%;

      height: 200px;
      width: 120px;
      border-radius: 50%;
      border: none;
      background: #ababab;
      transform: translate(75%, -50%);
      transition: 0.4s;
      outline: none;
      opacity: 0.7;
      cursor: pointer;

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 30px;

        height: 24px;
        width: 4px;
        border-radius: 4px;
        background: #fff;
        transform-origin: center 0;
        transition: 0.4s;
        transform: rotate(var(--rotate, 0));
      }

      &::before {
        --rotate: -45deg;
        top: calc(50% - 1px);
      }

      &::after {
        --rotate: -135deg;
        top: calc(50% + 1px);
      }

      &:hover {
        right: calc(100% + 15px);
        opacity: 1;

        &::before,
        &::after {
          left: 15px;
        }
      }
    }

    .tabs-wrapper {
      width: 100%;
      height: 100%;

      .ui.attached.tabular.menu {
        border: none;

        .item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 60px;

          border: none;
          border-bottom: 1px solid ${miscellaneous.lightBorder};
          border-radius: 0px !important;

          font-size: 14px;
          font-weight: 600;
          color: ${fontColors.blue.inert};
          text-align: center;

          &.active {
            color: ${fontColors.blue.active};
            font-weight: 600;
            border-bottom: 2px solid ${colors.blue};
          }
        }
      }
      .attached.segment.tab {
        padding: 20px;
        border: none;
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        max-height: calc(100% - 44px);

        .team-tab-project {
          margin-bottom: 30px;

          .teams-placeholder {
            font-size: inherit;
          }
        }

        .activity-placeholder {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 460px;
          font-size: 16px;
          font-weight: 500;
          color: #dbdbdb;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1440px) {
    &.left {
      max-width: 80px;
      overflow-x: hidden;
      overflow-y: hidden;

      .projects {
        .projectName {
          display: none;
        }

        .modules {
          max-height: 0;
        }
      }

      &:hover {
        max-width: 240px;
        overflow-y: auto;

        .modules {
          max-height: 500px;
        }
      }
    }
  }
`;
