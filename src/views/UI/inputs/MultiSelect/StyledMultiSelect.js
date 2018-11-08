import styled from "styled-components";

import { colors, fontColors, primaryColors } from "@styled/constants/colors";

export default styled.div`
  margin: ${props => props.padded && `20px`};

  .Select--multi.is-open {
    .Select-multi-value-wrapper:after {
      --rotate: -45deg;
    }
  }

  .Select-input > input {
    width: 5px;
    padding: 8px 0px;
    margin-top: 27px;
  }

  .Select-input {
    margin: 0;
    padding: 0;
    height: 28px;
  }

  .Select-input > input {
    position: absolute;
    top: -15px;
    left: 0;
    width: calc(100% - 22px) !important;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 22px;
    color: ${fontColors.regular};
    border: 1px solid ${colors.lightGreyBlue};
    border-radius: 6px;
    padding: 7px 10px;
    margin-top: 16px;

    &:focus {
      border-color: ${colors.blue};
    }
  }

  .Select-control {
    border-radius: 0;
    border: none;
    box-shadow: none !important;

    &:hover {
      box-shadow: none;
    }

    &::before {
      content: "${props => props.placeholder}";
      position: absolute;
      top: 16px;
      left: 10px;
      width: 100%;
      height: 30px;
      cursor: text;
      color: #bbb;
      font-weight: 400;
    }
  }

  .Select-placeholder {
    font-family: "Roboto";
    font-size: 16px;
    color: ${fontColors.light};
    font-weight: 400;
    letter-spacing: .5px;
    cursor: text;
    line-height: 38px;
  }

  .Select-multi-value-wrapper {
    font-size: 14px;
    margin-top: ${props => (props.padded ? "34px" : "40px")};
    width: 100%;

    &:after {
      content: "";
      position: absolute;
      top: calc(38px / 2);
      right: 20px;
      transform: translateY(-50%) rotate(var(--rotate,45deg));
      height: 10px;
      width: 10px;
      border: solid #4861f2;
      border-width: 0 0 2px 2px;
      transition: 0.4s;
    }


    .Select-value {
      position: relative;
      display: inline-block;
      color: ${fontColors.blue.inert};
      margin: 10px 10px 0 5px;
      font-size: 14px;
      letter-spacing: 1.2px;
      background: ${primaryColors.accentBackground};
      border: 1px solid #edeff6;
      padding: 0 15px;
      border-radius: 20px;

      &:hover .Select-value-icon {
        opacity: 1;
      }

      .Select-value-icon {
        position: absolute;
        transition: opacity ease .5s;
        opacity: 0;
        top: 0;
        right: 0;
        color: ${colors.blue};
        padding: 0 5px 0 0;
        line-height: 22px;
      }
    }
  }

  .Select--multi .Select-value-icon {
    border: none;

    &:hover {
      background: transparent;
    }
  }

  .is-focused:not(.is-open) > .Select-control {
    box-shadow: none;
  }

  .Select-menu-outer {
    border-radius: none;
    position: absolute;
    border: none;
    border: 1px solid ${colors.blue};
    top: 42px;
    z-index: 2;

    .Select-option {
      font-size: 16px;
      color: ${fontColors.regular};

      &.is-focused {
        background-color: ${colors.lightGreyBlue};
      }

      &:hover {
        background-color: ${colors.lightGreyBlue};
      }
    }

    .Select-menu {
      max-height: 140px;
    }
  }

  .is-focused {
    .Select-control {
      border-color: ${colors.blue};

      &::before {
        content: "";
      }
    }
  }

  .skillsField {
    display: flex;
    flex-wrap: wrap;
  }

  .Select-value.Select-create-option-placeholder .skillItem {
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 3px 7px;
    color: #666;
    border: 1px solid #666;
    border-radius: 25px;
  }

  .Select-arrow-zone {
    display: none;
  }

  @media (max-width: 767px) {
    .Select-multi-value-wrapper {
      .Select-value {
        margin: 10px 0 0 10px;
      }
    }

    .Select-input > input {
      margin-top: 10px;
    }
  }
`;
