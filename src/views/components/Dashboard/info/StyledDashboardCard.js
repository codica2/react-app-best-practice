import styled from "styled-components";

import { primaryColors, boxShadow, fontColors } from "@styled/constants/colors";

export default styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: ${props =>
    props.justifyContentStart ? "flex-start" : "space-between"};
  position: relative;
  padding: 12px 30px 16px 20px;
  background: ${props =>
    props.backgroundImg
      ? `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
          props.backgroundImg
        })`
      : props.background || `white`};
  background-size: cover;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.titleColor || `${fontColors.regular}`};
  grid-row-end: span ${props => props.size.row};
  ${props => (props.village ? `grid-column-end: span ${props.size.col}` : ``)};
  ${boxShadow.light};

  .titleWrapper {
    display: flex;
    flex-direction: ${props => (props.type === "project" ? "row" : "column")};
    flex-wrap: nowrap;
    margin-bottom: ${props => (props.titleMargin ? "20px" : "5px")};

    img,
    .projectNoLogo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 10px;
      object-fit: cover;
    }

    img {
      background: #fff;
    }

    .projectNoLogo {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 64px;
      font-weight: 600;
      flex-shrink: 0;
      text-transform: uppercase;
      letter-spacing: -1px;
      text-align: center;
      background: linear-gradient(to top left, #00a2ee 0%, #00e1ce 100%);
      color: #fff;
    }

    .title {
      margin-bottom: 3px;
      ${props => props.type === "project" && "margin-top: 14px;"};
    }

    .subTitle {
      color: ${props => {
        switch (props.type) {
          case "task_due":
            return "#1991fa";
          case "project":
            return "#8f1ae5";
          case "overview":
            return "#38ffbf";
          default:
            return "inherit";
        }
      }};
    }
  }

  .project {
    color: #fff;
    position: relative;
  }

  .progress {
    display: flex;
    justify-content: flex-end;
    flex-flow: row wrap;
    max-width: 300px;
  }

  .container {
    position: absolute;
  }

  .progressItem {
    position: relative;
    width: 55px;
    height: 55px;
    margin: 10px 0 10px 10px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    font-size: ${props => (props.type === "module_info" ? "24px" : "15px")};
    color: #4d4d4d;
    font-weight: 500;
    text-align: center;

    &.disabled {
      color: #ccc;
      border: 1px solid #ccc;
    }

    .progressBar {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .progressBar + .container {
      border: none !important;
      width: 57px;
      height: 57px;
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translateX(-50%);
    }

    & > span,
    & + span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      font-size: 11px;
      font-weight: 600;
      line-height: 27px;
      text-transform: uppercase;
    }

    & + span {
      bottom: -16px;
    }

    &.addModule {
      border-color: #ccc;
      transition: 0.3s;
      &::after,
      &::before {
        content: "";
        position: absolute;
        height: 25px;
        width: 2px;
        background: #ccc;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: inherit;
      }
      &::after {
        height: 2px;
        width: 25px;
      }
    }
  }

  .progressCount {
    line-height: 52px;
  }

  .button {
    font-size: inherit;
    position: relative;
    color: #ccc;

    .progressItem {
      margin-left: 0;
    }

    &:hover {
      color: #666;
      .progressItem {
        border-color: #666;
        &.addModule {
          &::after,
          &::before {
            background: #666;
          }
        }
      }
    }
  }

  span.progressDescription {
    bottom: -11px;
  }

  .progressDescription {
    position: absolute;
    width: auto;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 10px;
    transition: 0.3s;
  }

  .projectContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &.centered {
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &.project {
      position: absolute;
      bottom: 10px;
      display: flex;
      justify-content: space-between;
      width: 88%;

      .team {
        flex: 0 0 200px;
        align-items: center;
        .next,
        .prev {
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          transition: 0.3s;

          &:disabled {
            opacity: 0;
          }

          i {
            transition: 0.3s;
            color: ${primaryColors.lightGrey};

            &:hover {
              color: ${primaryColors.darkGrey};
            }
          }
          &.hidden {
            display: none;
          }
        }
      }

      .progress {
        flex: 1 1 70%;
        display: inline-flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 10px;
      }
    }
  }

  .team {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    margin-bottom: 5px;
    position: relative;
  }

  .person {
    width: 22px;
    height: 22px;
    margin-right: 10px;
    background-image: url("../../images/user.png");
    background-size: cover;
  }

  .day {
    margin-bottom: 15px;
  }

  .dayTitle,
  .taskInfo {
    margin-bottom: 3px;
    text-transform: none;
    font-style: italic;
    color: #bbb;
  }

  .taskInfo {
    text-transform: uppercase;
  }

  .content > div {
    display: flex;
    position: relative;

    ${props =>
      props.type === "overview" &&
      `
            justify-content: space-between;
            align-items: center;
        `} progress {
      position: relative;
      width: 140px;
      height: 16px;
    }

    p:first-of-type {
      margin-right: 5px;
      margin-bottom: 5px;
    }

    &:last-of-type {
      p:first-of-type {
        margin-right: 0;
      }
    }
  }
`;
