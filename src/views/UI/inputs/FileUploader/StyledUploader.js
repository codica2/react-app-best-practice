import styled from "styled-components";

import {
  colors,
  fontColors,
  boxShadow,
  primaryColors
} from "@styled/constants/colors";

export default styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  &.projectFiles {
    .ui.loader {
      margin-right: 30px;
    }
  }

  &::after,
  &::before,
  span {
    content: "";
    display: inline-block;
    width: 100px;
    order: 1;
  }

  ${props => (props.indentTop ? `margin-top: 24px` : ``)};
  ${props => (props.padded ? `padding: 0 20px` : ``)};

  & > p {
    text-transform: uppercase;
  }

  input {
    display: none;
  }
  label {
    width: 100%;
  }

  .imgPreview {
    display: inline-block;
    margin-left: ${props => (props.projectLogo ? "0" : "30px")};

    & img {
      width: ${props => (props.projectLogo ? "70px" : "120px")};
      height: ${props => (props.projectLogo ? "70px" : "120px")};
      border-radius: 50%;
      object-fit: cover;
      background: ${primaryColors.accentBackground};
    }
  }

  .preloader {
    padding: 0;

    img {
      width: 120px;
    }
  }

  .upload {
    display: flex;
    align-items: center;

    .upload-image {
      position: relative;
    }

    .upload-label {
      font-size: 14px;
      padding: 15px;
      color: ${fontColors.light};
      line-height: 20px;
      font-weight: 400;
    }
  }

  .dropzone {
    width: 100%;
    height: ${props => (props.small ? "60px" : "50px")};
    display: flex;
    flex-flow: row wrap;
    position: relative;
    border-color: rgba(0, 3, 51, 0.4);
    border-style: dashed;
    border-width: ${props => (props.small ? "1px" : "1px")};
    border-radius: ${props => (props.small ? "0px" : "3px")};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s, border-color 0.3s;
    margin-bottom: 14px;

    .dropzone-label {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      color: ${fontColors.light};
      transition: inherit;
    }

    i {
      font-size: 2em;
      color: #ccc;
      transition: inherit;
    }

    &.active {
      border-style: solid;
      border-color: ${colors.lightBlue};
      &::after {
        content: "Drop here";
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        text-transform: uppercase;
        font-family: "Roboto";
        font-size: 1.6em;
        color: #666;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #fff;
      }
    }

    &:hover {
      border-color: ${colors.blue};

      .dropzone-label,
      i {
        color: ${colors.blue};
      }
    }
  }

  .ui.button {
    display: ${props => (props.disabled ? "none" : "inline-block")};
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => (props.projectLogo ? "70px" : "120px")};
    height: ${props => (props.projectLogo ? "70px" : "120px")};
    padding: 0;
    border-radius: 50%;
    background-color: transparent !important;
    ${props => (props.projectLogo ? null : "left: 30px;")};
  }

  .ui.button::after,
  .ui.button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 2px;
    transform: translate(-50%, -50%);
    background-color: ${colors.blue};
    opacity: ${props => (props.createProject ? "1" : "0")};
  }
  .ui.button::after {
    height: 14px;
    width: 2px;
  }

  .ui.button:hover.ui.button::after,
  .ui.button:hover.ui.button::before {
    opacity: 1;
  }

  p {
    flex: 0 0 100%;
    font-size: 12px;
    color: #666;
    font-weight: bold;
    word-spacing: 1.5px;
    padding-left: ${props => (props.small ? "0" : "7px")};
    margin-bottom: 24px;
  }

  .filePreview {
    display: flex;
    align-items: center;
    height: 40px;
    min-width: 72px;
    margin: 5px 5px 10px 5px;
    padding-right: 10px;
    position: relative;

    .fileIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 36px;
      background: rgba(72, 97, 242, 0.1);
      border-radius: 3px;
      cursor: pointer;

      i {
        font-size: 22px;
        color: ${colors.blue};
      }
    }

    &.active {
      &:hover {
        .fileIcon {
          i:before {
            content: "\f358";
          }
        }
      }
    }

    .fileInfo {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      margin-left: 3px;
      user-select: none;

      p {
        padding: 0;
        margin: 0;
        font-size: 13px;
        line-height: 16px;
        color: ${primaryColors.accentGrey};
        font-weight: 500;

        &.fileName {
          color: ${primaryColors.darkGrey};
        }
        &.fileSize {
        }
      }
    }

    .detailedInfo {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      z-index: 100;

      a {
        display: inline-block;
        height: 10px;
        width: 10px;
        margin-left: 5px;
        outline: none;

        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          height: 6px;
          width: 6px;
          top: 40%;
          left: 50%;
          border-color: #ccc;
          border-style: solid;
          border-width: 0;
          border-bottom-width: 2px;
          border-left-width: 2px;
          transform: rotate(-45deg);
        }

        &:focus ~ .dropDown {
          display: inline-block;
        }
      }

      .dropDown {
        position: absolute;
        display: none;
        right: 0;
        top: calc(100% + 10px);

        min-width: 100px;
        min-height: 50px;
        padding: 8px;
        white-space: nowrap;

        background-color: #fff;
        ${boxShadow.dark};
      }
    }

    &.disabled {
      opacity: 0.5;

      &.selfSubmit {
        display: none;
      }
    }

    &:hover {
      .fileInfo {
        filter: blur(1px);
      }
      .file-delete {
        opacity: 1;
        visibility: visible;
      }
    }

    .file-delete {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      top: 2px;
      height: 36px;
      width: 36px;
      font-size: 20px;
      color: #666;
      background: #fbc4c3;
      border-radius: 3px;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s;
      cursor: pointer;

      i {
        color: white;
      }
    }
  }

  .ui.loader:after {
    border-color: #666 transparent transparent transparent !important;
  }

  .uploadFile {
    position: relative;
    height: 36px;
    width: 36px;
    background: rgba(72, 97, 242, 0.1);
    margin-bottom: 10px;
    margin-left: 5px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    outline: none;
    transition: 0.3s;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: calc(50% - 8px);
      left: calc(50% - 1px);
      height: 16px;
      width: 2px;
      background-color: ${colors.blue};
      border-radius: 2px;
      transition: inherit;
    }

    &::after {
      transform: rotate(90deg);
    }

    &:hover {
      background: rgba(72, 97, 242, 0.3);

      &::before,
      &::after {
        background-color: white;
      }
    }
  }

  .errorMessage {
    font-size: 14px;
    color: #db4538;
    width: 100%;
    padding: 5px;

    span {
      width: 100%;
    }
  }

  @media (max-width: 499px) {
    flex-direction: column;

    .imgPreview {
      margin: 0 0 30px 0;
    }
  }
`;
