import styled from "styled-components";
import {
  boxShadow,
  primaryColors,
  fontColors,
  colors
} from "./constants/colors";

export default styled.div`
  color: #666;
  font-size: 16px;
  font-weight: 500;
  color: #999;

  .ui.grid {
    margin: 0 !important;

    .row {
      padding-top: 10px;
      padding-bottom: 10px;
      .column {
        padding-left: 2px;
        padding-right: 2px;
      }
    }
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid ${colors.blue};

    .title {
      font-size: 20px;
      margin-top: 28px;
    }
  }

  .team-wrap {
    margin-bottom: 20px;
  }

  .team-name {
    color: ${fontColors.black};
    font-weight: 500;
  }

  .team-channel {
    color: ${fontColors.blue.inert};
    font-size: 14px;
  }

  .team-channel {
    margin: 10px 0;
  }

  .buttonAdd {
    margin-top: 15px;
    width: 23px;
    height: 23px;
    display: block;
    border: 1px solid #ccc;
    border-radius: 50%;
    position: relative;
  }

  .buttonAdd::before,
  .buttonAdd::after {
    content: "";
    width: 15px;
    height: 1px;
    top: 10px;
    left: 3px;
    position: absolute;
    background-color: #ccc;
  }

  .buttonAdd::after {
    transform: rotate(90deg);
  }

  .buttonAdd:hover {
    border: 1px solid #666;
  }

  .team {
    width: 100%;
    font-size: 12px;
    display: flex;
    margin-top: 15px;
  }

  .teams-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 460px;

    text-align: center;
    font-size: 3em;
    color: #dbdbdb;
  }

  .ui.grid .row.channels {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    padding: 24px 8px;

    .channel {
      display: inline-block;
      flex-basis: 20%;
      margin-bottom: 20px;

      .title {
        position: relative;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;

        min-width: 90%;
        border-radius: 5px;
        transition: 0.2s;

        h4 {
          margin-bottom: 0;
        }

        &:hover {
          .delete {
            opacity: 1;
            visibility: visible;
          }
        }

        .delete {
          background: none;
          position: absolute;
          top: 50%;
          right: 5px;

          height: 18px;
          width: 18px;
          padding: 0;
          margin-left: 5px;

          transform: translateY(-50%);

          border: none;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: inherit;

          img {
            height: 100%;
            width: 100%;
          }
        }

        .ui.form.editChannel {
          height: 100%;
          width: 100%;

          .ui.input {
            width: 100%;
            height: 100%;
            padding: 5px;
            border-radius: 5px;

            &::before {
              content: "#";
              color: ${fontColors.blue.inert};
              line-height: 22px;
              font-weight: 600;
            }

            input {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              padding: 0 13px;
              color: ${fontColors.blue.inert};
              border: none;
              font-weight: 500;
              background: none;
              cursor: pointer;
              border: 1px solid transparent;
              letter-spacing: normal;
              transition: 0.2s;

              &:hover,
              &:focus {
                background: rgba(216, 216, 216, 0.18);
              }

              &::placeholder {
                color: inherit;
              }
            }

            &.disabled {
              opacity: 1;
            }
          }

          &.show {
            display: block;
          }
        }
        .deleteConfirmation {
          display: none;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-radius: 5px;

          &::before {
            content: "Delete channel?";
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: center;
            font-size: 14px;
            opacity: 0;
            animation: fadeUp 0.2s forwards;
            z-index: -1;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              bottom: 0;
            }
            to {
              opacity: 1;
              bottom: 100%;
            }
          }

          button {
            border: none;
            width: 50%;
            height: 100%;
            color: #fff;
            outline: none;
            cursor: pointer;

            &:first-of-type {
              border-bottom-left-radius: 5px;
              border-top-left-radius: 5px;
              background: #00e6ac;
            }
            &:last-of-type {
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
              background: #ff8080;
            }
          }

          &.show {
            display: block;
          }
        }
      }

      .channel-label_error {
        position: absolute;
        text-align: center;
        color: ${primaryColors.errorColor};
        width: 100%;
        bottom: 100%;
        font-size: 14px;
        font-weight: 300;
      }
    }

    .addChannel {
      display: inline-block;
      .ui.input {
        input {
          width: 150px;
          color: ${fontColors.blue.inert};
          font-size: 14px;
          font-weight: 500;
          border: none;
          border-radius: 5px;
          background: ${primaryColors.accentBackground};

          &::placeholder {
            color: ${fontColors.blue.inert};
            font-weight: 600;
          }
        }
      }

      .addChannel-label {
        position: absolute;
        text-align: center;
        top: 100%;
        color: ${primaryColors.errorColor};
        font-size: 14px;
        font-weight: 300;
      }
    }

    .person {
    }

    .addPerson {
      position: relative;
      margin: 5px 7px 5px 0;

      color: #ddd;
      cursor: pointer;

      .dropdownTitle {
        color: #5366e5;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1.3px;
      }

      .close {
        position: absolute;
        top: 5px;
        right: 10px;
        height: 10px;
        width: 10px;
        cursor: pointer;

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 1px;
          background: #bbb;
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        color: inherit;
        outline: none;

        span {
          display: inline-block;
          height: 30px;
          width: 30px;
          border: 1px solid #ddd;
          border-radius: 50%;

          text-align: center;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: -1px;
          margin-right: 5px;
          font-weight: 300;
        }
      }

      .dropdown {
        position: absolute;
        z-index: 2;
        display: none;

        top: calc(100% + 5px);
        left: 10px;
        min-width: 230px;
        max-height: 300px;
        overflow-y: scroll;

        border-radius: 3px;
        background: #fff;
        ${boxShadow.dark};

        &.visible {
          display: block;
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

        .dropdown-list {
          z-index: 2;
          display: flex;
          flex-flow: column nowrap;
          width: 100%;

          background: #fff;
          div {
            position: relative;
            display: flex;
            order: 1;
            align-items: center;
            padding: 5px 15px;

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
              width: 30px;
              height: 30px;
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
            }
          }
        }
      }
    }
  }
`;
