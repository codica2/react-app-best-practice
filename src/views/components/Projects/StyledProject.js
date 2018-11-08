import styled from "styled-components";

import {
  colors,
  primaryColors,
  fontColors,
  boxShadow,
  miscellaneous
} from "@styled/constants/colors";

export default styled.div`
  transition: 0.6s;
  margin-bottom: 80px;

  &.loading {
    opacity: 0.5;
    pointer-events: none;
  }

  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }

  .projectLogo {
    max-width: 80px;
    margin: 0 20px 0 10px;

    & > div {
      margin-bottom: 0;
    }

    .imgPreview {
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      .image-preloader {
        padding: 0;
      }

      & img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .ui.button {
      padding: 35px !important;
    }
  }

  .ui.grid {
    transition: inherit;

    .row {
      .column {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;

        & > div {
          padding: 20px;
          background: #fff;
          border-radius: 3px;
          ${boxShadow.light};

          &.projectAside {
            flex: 0 0 350px;
            margin-right: 20px;

            .asideInfo {
              font-size: 18px;
              border-bottom: 1px solid #f1f1f5;
              padding-bottom: 20px;
              margin-bottom: 20px;

              &:last-of-type {
                border: none;
              }

              .label {
                font-weight: 500;
                margin-bottom: 13px;
                color: ${fontColors.black};

                &.assignTeam {
                  color: ${primaryColors.lightGrey};
                }
              }

              .text {
                color: ${fontColors.regular};
                font-weight: 400;
              }

              .teamWrapper {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;

                .project-team {
                  display: flex;
                  flex-flow: row nowrap;
                  align-items: center;

                  .allMembers {
                    margin-right: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background: ${colors.blue};
                    color: white;
                    cursor: pointer;
                    z-index: 1;
                  }
                }
              }

              .skillsWrapper {
                display: flex;
                flex-flow: row wrap;

                .skill {
                  padding: 0px 15px;
                  background: ${primaryColors.accentBackground};
                  border: 1px solid #edeff6;
                  color: ${fontColors.blue.inert};
                  border-radius: 20px;
                  white-space: nowrap;
                  font-size: 14px;
                  line-height: 27px;
                  margin-left: 10px;
                  margin-bottom: 10px;
                }
              }

              .projectSkills {
                & > span {
                  padding-left: 0;
                  font-size: 1.2em;
                  font-weight: 500;
                  color: ${primaryColors.darkGrey};
                  text-transform: none;
                }

                .Select-multi-value-wrapper {
                  border-top-width: 1px;
                }
              }

              .projectFiles {
                & > p {
                  margin-bottom: 0;
                }
              }
            }
          }
          &.projectMain {
            flex: 1 1 auto;

            .title {
              font-size: 24px;
              font-weight: 500;
              line-height: 27px;
              margin-bottom: 20px;
              color: ${fontColors.black};
            }

            .projectHeader {
              position: relative;
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              margin-bottom: 2em;

              img,
              .projectNoLogo {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                object-fit: cover;
              }

              .projectNoLogo {
                background: linear-gradient(
                  to top left,
                  #00a2ee 0%,
                  #00e1ce 100%
                );
              }

              p {
                font-size: 24px;
                color: ${fontColors.black};
                line-height: 27px;
                font-weight: 500;
              }

              .status {
                color: ${primaryColors.accentGrey};
                opacity: 0.8;
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
              }
            }

            .controls {
              display: flex;
              justify-content: flex-end;

              button.draft {
                margin-right: 10px;
                margin-left: 10px;
              }
            }
          }

          .projectNoLogo {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
          }

          .projectNoLogo {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 64px;
            width: 70px;
            height: 70px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: -1px;
            text-align: center;
            background-color: ${primaryColors.accentBackground};
            color: #fff;
          }
        }
      }
    }
  }

  .moduleWrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 80px;

    & > .noTasks,
    & > .noModules {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 80px;
      padding-bottom: 160px;
      text-align: center;
      text-transform: uppercase;
      font-size: 28px;
    }

    &::after {
      content: "";
      height: 0;
      flex: 0 0 31.5%;
    }
  }

  .dragContainer {
    flex: 0 0 31.5%;
    margin-bottom: 20px;

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
      text-transform: uppercase;
      font-size: 14px;
      padding-bottom: 5px;

      color: #666;
      border-width: 0px;
      border-bottom-width: 3px;
      border-style: solid;
      ${miscellaneous.gradientBorder};

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
`;
