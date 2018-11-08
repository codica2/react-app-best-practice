import styled from "styled-components";
import {
  boxShadow,
  colors,
  primaryColors,
  fontColors
} from "@styled/constants/colors";
import { Popup } from "semantic-ui-react";

export const StyledAssignDropdown = styled.div`
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

export const StyledDropdown = styled(Popup)`
  &.ui.popup {
    &.nav-profile-dropdown {
      width: 180px;
      border: none;
      padding: 16px 0;
      ${boxShadow.grey};

      .inner-wrapper {
        display: flex;
        flex-flow: column nowrap;

        .nav-link {
          padding: 0 20px;
          color: black;
          font-size: 16px;
          line-height: 32px;

          i {
            width: 30px;
            color: ${colors.blue};
          }

          &:hover {
            background: ${colors.lightGreyBlue};
          }

          &.active {
            color: ${colors.darkBlue};
          }
        }
      }
    }
  }
`;

export const StyledPersonTile = styled.div`
  font-size: 500;
  padding: 4px 0;
  position: relative;
  cursor: pointer;
  text-transform: none;
  font-weight: 400;
  margin-right: ${props => (props.compressed ? "-8px" : "0")};

  .img-wrapper {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: ${props => (props.compressed ? "0 " : "5px")};

    .user-avatar {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 50%;
      object-fit: cover;

      &.blank {
        background: ${primaryColors.accentBackground};
        ${props =>
          props.compressed ? `border: 1px solid ${colors.lightGreyBlue}` : ""};
        object-fit: contain;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${colors.blue};
      opacity: 0;
    }
  }

  a {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-decoration: none;
    color: ${fontColors.regular};
    outline: none;

    &:focus {
      .img-wrapper {
        &::before {
          opacity: 0.15;
        }
      }
    }
  }

  .delete {
    position: absolute;
    z-index: 1;

    display: flex;
    opacity: 0;
    visibility: hidden;
    flex-flow: column nowrap;

    top: calc(100% + 4px);
    left: 0;
    min-width: 220px;
    padding: 10px 15px 15px 15px;

    background: #fff;
    border-radius: 5px;
    font-family: "Roboto";
    white-space: nowrap;
    text-align: left;
    ${boxShadow.dark};
    cursor: default;

    &.show {
      opacity: 1;
      visibility: visible;
    }

    .profileLink {
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 16px;
      color: ${primaryColors.darkGrey};
      white-space: normal;

      &:hover {
        text-decoration: underline;
      }
    }

    .dropdownTitle {
      font-size: 10px;
      text-transform: uppercase;
    }

    .info {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        background: #fff;
        border-radius: 50%;
      }

      div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        padding: 0 8px;

        p {
          color: #666;
          font-weight: 500;
          font-size: 16px;
          text-transform: none;
        }

        button {
          padding: 7px 7px 3px 7px;

          p {
            margin-bottom: 5px;
          }

          color: #fff;
          font-size: 12px;
          font-weight: 500;
          border: none;
          border-radius: 2px;
          background: ${primaryColors.red};
          cursor: pointer;
        }
      }
    }
  }
`;

export const StyledSpecialist = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 3px 0;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    .avatar {
      button {
        opacity: 0.7;
      }
    }
  }

  .avatar-wrapper {
    position: relative;
    height: 48px;
    width: 48px;
    flex: 0 0 48px;
    border-radius: 50%;
    overflow: hidden;

    .user-avatar {
      height: 100%;
      width: 100%;
      object-fit: cover;
      background: #fff;

      &.blank {
        background: ${primaryColors.accentBackground};
        object-fit: contain;
      }
    }

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 100%;
      width: 100%;
      border: none;
      transform: translate(-50%, -50%);
      background: ${primaryColors.red};
      cursor: pointer;
      opacity: 0;
      transition: 0.3s;

      &::before,
      &::after {
        content: "";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(var(--crossRotate, 0));
        position: absolute;
        height: 24px;
        width: 2px;
        background: white;
      }

      &::before {
        --crossRotate: 45deg;
      }

      &::after {
        --crossRotate: -45deg;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  p,
  .spec-costs {
    flex: 1 1 auto;
    margin-left: 10px;
    margin-bottom: 0;
    font-size: 1.1em;
    color: #666;
  }

  .ui.input {
    flex: 0 0 80px;
    margin-right: 8px;

    input {
      padding: 0.67em;
    }
  }
`;

export const StyledMembersWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  .dropdownWrapper {
    display: inline-flex;
    position: relative;
    padding: 4px 0;

    .allMembers {
      margin-right: 5px;
      height: 36px;
      width: 36px;
      border-radius: 50%;
      background: ${primaryColors.accentBackground};
      border: 1px solid ${colors.lightGreyBlue};
      color: ${colors.blue};
      text-align: center;
      line-height: 36px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      z-index: 1;
    }

    .membersDropdown {
      position: absolute;
      z-index: 100;
      top: calc(100% + 4px);
      left: 0;
      width: 240px;
      padding: 1rem;
      background: white;
      ${boxShadow.dark};
      border-radius: 3px;

      & > div {
        display: inline-block;
      }

      h3 {
        flex: 0 0 100%;
        font-size: 0.8em;
        text-transform: uppercase;
        color: ${colors.blue};
        padding-bottom: 5px;
        margin-bottom: 4px;
        font-weight: 600;
        font-family: "Roboto";
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
    }
  }
`;
