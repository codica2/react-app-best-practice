import styled from "styled-components";
import { colors } from "@styled/constants/colors";

export default styled.div`
  position: relative;
  font-family: "Roboto";
  min-height: 0;
  transition: 0.5s;
  padding-bottom: 40px;

  &.opened {
    .ui.grid {
      .row {
        &.advancedFilter {
          max-height: 300px;
          overflow: visible;
          padding: 20px 0;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  .ui.button {
    text-transform: uppercase;
    &.dv-blue {
      background: ${colors.blue};
      color: #fff;
    }

    &.dv-blue.inverted {
      border: 1px solid ${colors.blue};
      color: ${colors.blue};
      background: #fff;
      font-family: inherit;
    }
  }

  .ui.grid {
    .row {
      .column {
        &.width-one-thrid {
          width: calc(100% / 3);
        }

        &.width-two-thrids {
          width: calc(100% / 3 * 2);
        }

        .pageTitle {
          font-size: 0.95em;
          text-transform: uppercase;
          color: #666;
          font-weight: 500;
        }

        .filterTitle {
          font-size: 0.9em;
          color: #666;

          .payRate {
            margin-left: 20px;
            color: #878c98;
          }
        }

        .ui.input {
          border-color: ${colors.lightGreyBlue};
          height: 40px;

          input:focus {
            border-color: ${colors.blue};
          }
        }

        .ui.selection.active.dropdown {
          border-color: ${colors.blue};

          .menu {
            border-color: inherit;
          }
        }

        .ui.form {
          .ui.input.search {
            .ui.button {
              text-transform: uppercase;
              padding-left: 40px;
              padding-right: 40px;
              background: ${colors.blue};
              color: #fff;
            }
          }
        }

        .input-range {
          height: 38px;

          .input-range__label-container {
            display: none;
          }

          .input-range__track--active {
            background: linear-gradient(270deg, #b654f5 0%, #4861f2 100%);
          }

          .input-range__slider {
            height: 20px;
            width: 20px;
            margin-top: -12px;
            background: #fff;
            border: none;
            box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.3);
          }
        }

        .checkboxWrapper {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          min-height: 38px;

          label {
            display: flex;
            align-items: center;
            cursor: pointer;
            flex: 0 0 70px;
            margin-top: 4px;
            margin-bottom: 4px;

            input {
              display: none;

              &:checked + .checkbox {
                i {
                  display: inline;
                }
              }
            }

            .checkbox {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 16px;
              width: 16px;
              border: 1px solid #dae1ee;
              border-radius: 3px;

              i {
                display: none;
                color: #666;
                font-size: 0.9em;
              }
            }

            .label {
              display: flex;
              align-items: center;
              margin-left: 7px;
              padding: 2px 12px;
              border-radius: 12px;
              background: #f7da97;
              color: #fff;
              font-weight: 500;
              width: 47px;

              i {
                margin-left: 5px;
                font-size: 0.7em;
              }
            }
          }
        }

        .skillsWrapper {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          height: 38px;

          .skill {
            padding: 0 12px;
            color: #989ea9;
            border: 1px solid #dae1ee;
            border-radius: 12px;
            margin-right: 6px;
            white-space: nowrap;
            line-height: 1.5em;
          }

          .ui.dropdown {
            position: absolute;
            top: 100%;

            .text {
              color: ${colors.blue};
              user-select: none;
            }

            .menu {
              border-radius: 0;
              & > .item {
                color: #989ea9;
                min-width: 120px;
                cursor: default;

                &:hover {
                  background: #fff;
                }
              }
            }
          }
        }

        .allSkills {
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
      &.advancedFilter {
        overflow: hidden;
        padding: 0;
        max-height: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
      }
    }
  }

  .ui.button.filterTrigger {
    position: absolute;
    min-width: 140px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: ${colors.blue};
    border-radius: 18px;
    color: #fff;
    font-size: 12px;

    .arrow {
      position: absolute;
      bottom: 0;
      left: calc(50% - 10px);
      z-index: -1;
      transform: translateY(50%);
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #e3e8f9;
    }
  }
`;
