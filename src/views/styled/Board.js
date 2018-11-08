import styled from "styled-components";
import {
  boxShadow,
  miscellaneous,
  fontColors,
  colors
} from "./constants/colors";

export default styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  transition: 0.4s ease-in-out;
  position: relative;

  .resp-error {
    min-height: 560px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: ${fontColors.black};
  }

  &.loading {
    opacity: 0.7;
    pointer-events: none;
  }

  div.hidden.transition {
    display: none;
  }

  h3 {
    text-transform: uppercase;
    font-size: 14px;
    padding-bottom: 5px;

    color: #666;
    border-width: 0px;
    border-bottom-width: 3px;
    border-style: solid;
    ${miscellaneous.gradientBorder};
  }

  .dragContainer {
    flex: 0 0 31.5%;
    margin-bottom: 20px;

    .addModule {
      min-height: auto;
    }

    &.addModuleContainer {
      h3 {
        padding-top: 8px;
        padding-bottom: 15px;
      }
    }

    & > h3 {
      display: flex;
      flex-flow: row nowrap;
      position: relative;

      .number {
        position: absolute;
        top: 10px;
        left: 5px;
        line-height: 22px;
        font-family: "Roboto";
        font-weight: 700;
        transition: 0.3s;

        &.hidden {
          opacity: 0;
          visibility: hidden;
          left: -10px;
        }
      }

      .ui.form {
        flex: 1 1 auto;
        color: #666;

        &:hover {
          button {
            opacity: 1;
          }
        }
        .ui.input {
          color: inherit;

          &.disabled {
            user-select: none;
            opacity: 1;
          }

          input {
            padding: 10px 0;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            color: inherit;
            background: none;
            border: none;
            transition: 0.3s;
            padding-left: 27px;

            &:focus {
              padding-left: 10px;
              background: rgba(216, 216, 216, 0.18);
            }
          }
        }
        .editModule {
          padding: 0;
          height: 20px;
          width: 20px;
          background: none;
          border: none;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          opacity: 0;
          transition: 0.3s;
          outline: none;
          cursor: pointer;

          img {
            height: 100%;
            width: 100%;
          }

          &.hidden {
            opacity: 0;
            visibility: hidden;
            right: -10px;
          }
        }
      }
    }
  }

  .kanban {
    width: 100%;

    display: flex;
    justify-content: space-between;
    background: none;
    height: auto;
    overflow-y: visible;
    transition: 0.4s;
    opacity: 1;
    z-index: 10;

    &.visible {
      display: flex !important;
    }

    &.show {
    }

    &.fade {
      opacity: 0.5;
      pointer-events: none;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade {
      from {
        opacity: 1;
      }
      to {
        opacity: 0.8;
      }
    }

    & > section {
      flex: 0 0 24%;
      max-width: 24%;
      background: none;
      max-height: 100%;
      height: 100%;
      overflow: visible;
      margin: 0;
      padding: 10px;
      padding-bottom: 20px;
      background: #dce0ee;

      & > header {
        text-transform: uppercase;
        font-size: 14px;
        padding-bottom: 15px;
        margin-bottom: 20px;
        z-index: 998;
        color: black;
        padding-left: 0;

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

      & > div {
        width: 100%;
        overflow: visible;
        min-width: auto;

        article {
          max-width: 100%;
          width: 100%;
          padding-top: 30px;
          border: none;
        }
      }
    }
  }

  .noTasks,
  .noModules {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 160px;
    text-align: center;
    text-transform: uppercase;
    font-size: 28px;
  }

  .moduleWrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;

    &::after {
      content: "";
      height: 0;
      flex: 0 0 31.5%;
    }
  }

  .dragItem {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    position: relative;
    padding: 5px 15px;
    ${boxShadow.dark};
    border-radius: 2px;
    color: #666;
    min-height: 160px;
    cursor: pointer;

    text-transform: uppercase;

    & > h4,
    & > div {
      flex: 0 0 100%;
    }

    h4 {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 13px;
      letter-spacing: 1.04px;
      word-wrap: break-word;
      max-width: calc(100% - 30px);
    }

    .persons {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      max-width: 80%;
      font-family: "Roboto";
      margin-top: 10px;
      align-self: flex-end;
    }

    .line {
      display: flex;
      align-items: center;

      i {
        margin-right: 10px;
        width: 16px;
        color: ${colors.blue};
        text-align: center;
      }

      span {
        text-transform: uppercase;
        color: #989898;
        font-weight: 600;
        padding-top: 5px;
      }
    }

    .bell-line {
      display: flex;
      align-items: center;
      height: 40px;

      .bell {
        margin-left: 5px;
        margin-right: 5px;
        height: 20px;
        width: 20px;
        background: url("/images/bell.png") no-repeat center center;
        background-size: 14px auto;
      }

      .dot {
        height: 5px;
        width: 5px;
        border: 2px solid #ababab;
        border-radius: 50%;
        margin-left: 2px;
      }
    }

    .ddtw {
      position: absolute;
      bottom: 10px;
      right: 20px;

      font-weight: 600;
      font-size: 12px;
      color: #989898;
    }

    .dropdown {
      position: absolute;
      top: 5px;
      right: 20px;
      font-size: 24px;

      button {
        padding: 0;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
      }

      .menu {
        display: block;
        position: absolute;
        top: 30px;
        right: 0;
        min-width: 70px;
        background: #fff;
        border: 1px solid rgba(34, 36, 38, 0.15);
        border-radius: 5px;

        .item {
          padding-left: 10px;
          width: 100%;
          line-height: 28px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.43);
          text-transform: uppercase;
          cursor: pointer;

          &:hover {
            background: rgba(0, 0, 0, 0.05);
            font-weight: 600;
            color: #666;
          }
        }
      }

      .trigger {
        color: #666;
        outline: none;
        cursor: pointer;
      }
    }
  }

  .module {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    position: relative;
    min-height: 250px;
    margin-top: 30px;
    padding: 30px;
    ${boxShadow.light};
    background-color: white;
    cursor: pointer;

    .dropdown {
      position: absolute;
      top: 5px;
      right: 20px;
      font-size: 24px;

      button {
        padding: 0;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
      }

      .menu {
        display: none;
        position: absolute;
        top: 30px;
        right: 0;
        min-width: 70px;
        background: #fff;
        border: 1px solid rgba(34, 36, 38, 0.15);
        border-radius: 5px;

        &.open {
          display: block;
        }

        .item {
          padding-left: 10px;
          width: 100%;
          line-height: 28px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.43);
          text-transform: uppercase;
          cursor: pointer;

          &:hover {
            background: rgba(0, 0, 0, 0.05);
            font-weight: 600;
            color: #666;
          }
        }

        &:hover {
          display: block;
        }
      }

      .trigger {
        color: #666;
        outline: none;
        cursor: pointer;
      }
    }

    h4 {
      max-width: 80%;
      color: #666;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;
    }

    p {
      color: #666;
      font-weight: 600;
      font-size: 14px;
    }

    .subline {
      display: flex;
      align-items: center;
      margin-top: 5px;
      margin-bottom: 5px;

      .subline-icon {
        width: 15px;
        margin-right: 10px;
        text-align: center;
        color: ${colors.blue};
      }

      span {
        text-transform: uppercase;
        color: #989898;
        font-weight: 600;
      }
    }

    .addButton {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      text-align: center;

      .plus {
        position: relative;
        height: 50px;
        width: 50px;

        font-size: 36px;
        font-weight: 100;
        color: #c8d8d7;
        line-height: 39px;
        border: 2px solid #c8d8d7;
        border-radius: 50%;
        cursor: pointer;

        &::before,
        &::after {
          content: "";
          position: absolute;
          height: 24px;
          width: 2px;
          top: 50%;
          left: 50%;
          border-radius: 2px;
          background: #c8d8d7;
          transform: translate(-50%, -50%) rotate(var(--rotateCross, 0deg));
        }

        &::after {
          --rotateCross: 90deg;
        }
      }

      .add {
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        color: #bbb;
      }
    }
  }
`;
