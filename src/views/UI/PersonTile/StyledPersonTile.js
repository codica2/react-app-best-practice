import styled from "styled-components";

import {
  boxShadow,
  colors,
  primaryColors,
  fontColors
} from "@styled/constants/colors";

export default styled.div`
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
    z-index: 100;

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
