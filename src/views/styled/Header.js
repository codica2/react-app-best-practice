import styled from "styled-components";
import {
  colors,
  boxShadow,
  fontColors,
  miscellaneous
} from "./constants/colors";

export default styled.header`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 87px;
  display: flex;
  background-color: #fff;
  ${boxShadow.light};

  .nav-logo,
  .nav-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 240px;
    border-width: 0px;
    border-style: solid;
    border-color: ${miscellaneous.lightBorder};
    box-sizing: content-box;
  }

  .nav-logo {
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        padding: 12px;
        max-width: 100%;
      }

      span {
      }
    }
    &.bordered {
      border-right-width: 1px;
    }
  }

  .nav-links {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;

    .nav-link {
      display: flex;
      align-items: center;
      border-bottom: 2px solid transparent;
      margin: 0 24px;
      font-size: 16px;
      color: ${fontColors.light};

      i {
        margin-right: 14px;
        color: ${colors.blue};
        font-size: 1.4em;
      }

      &.active {
        border-color: ${colors.blue};

        color: ${colors.darkBlue};
      }
    }
  }

  .nav-profile {
    border-left-width: 1px;

    .user-avatar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-name {
      flex: 0 0 120px;
      padding-left: 20px;
      color: ${fontColors.black};
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    }

    .dropdown-trigger {
      cursor: pointer;
      color: ${colors.blue};
    }
  }
`;
