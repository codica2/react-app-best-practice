import styled from "styled-components";
import { Modal } from "semantic-ui-react";

import {
  primaryColors,
  colors,
  miscellaneous,
  fontColors
} from "./constants/colors";

export default styled(Modal)`
  &.ui.modal {
    font-family: "Roboto";

    & > .close {
      top: 14px;
      right: 14px;
      border: none;
      background: none;
      position: absolute;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 7px;
        height: 1px;
        width: 21px;
        background: #666;
        transform: rotate(var(--rotate, 0));
      }

      &::before {
        --rotate: 45deg;
      }

      &::after {
        --rotate: -45deg;
      }
    }
    .modalHeader {
      padding: 0 21px;
      text-transform: uppercase;
      color: ${primaryColors.darkGrey};

      &.centered {
        text-align: center;
      }
    }

    .ui.header {
      padding: 20px 34px;

      background: ${miscellaneous.gradient.blue};

      font-size: 24px;
      font-weight: 500;
      color: white;
    }

    form.ui.grid {
      .row {
        &.fluid {
          padding: 0;
        }

        .column {
          &.wrapper {
            padding-top: 1rem;

            .grid {
              padding-top: 20px;
            }

            &.aside {
              border-right: 2px solid ${miscellaneous.lightBorder};

              .row {
                &:not(:first-of-type) {
                  border-top: 1px solid ${miscellaneous.lightBorder};
                }
              }
            }

            &.main {
            }
          }
        }

        .ui.input {
          &.disabled {
            input {
              border: none;
            }
          }
        }
      }
    }

    .specialistsWrapper {
      padding: 0 20px 24px;
      .totalCostWrapper {
        .totalCosts {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${primaryColors.darkGrey};

          .label {
            font-weight: 500;
            font-size: 18px;
            color: ${fontColors.black};
            margin-bottom: 14px;
          }

          .total {
            font-size: 16px;
            font-weight: bold;
            color: ${fontColors.black};

            i {
              color: ${colors.blue};
              margin-right: 5px;
            }
          }
        }

        .fees {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;

          .ui.checkbox {
            padding: 5px 0;
            line-height: 18px;
            transition: 0.2s;

            &:not(.checked) {
              label {
                color: #ccc;
              }
            }

            label {
              font-size: 16px;
              color: ${primaryColors.darkGrey};
              opacity: 1;

              &::before,
              &::after {
                height: 18px;
                width: 18px;
                color: ${colors.blue};
                font-size: 16px;
              }
            }
          }
        }
      }

      .specialistsInnerWrapper {
        &::-webkit-scrollbar {
          width: 4px;
        }

        &::-webkit-scrollbar-thumb {
          background: rgba(72, 97, 242, 0.2);

          &:hover {
            background: rgba(72, 97, 242, 0.4);
          }
        }

        &::-webkit-scrollbar-track {
          background: rgba(72, 97, 242, 0.1);
        }
      }
    }

    &.addTask {
      .specialistsWrapper {
        padding-left: 20px;
      }
    }
  }
`;
