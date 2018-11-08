import styled from "styled-components";
import {
  colors,
  primaryColors,
  fontColors,
  boxShadow
} from "./constants/colors";

export default styled.div`
  font-size: 16px;

  .profile-image {
    position: relative;
    display: flex;
    flex: 0 0 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    text-align: center;

    .image-wrapper {
      width: 160px;
      height: 160px;
      background: ${primaryColors.accentBackground};
      overflow: hidden;
      border-radius: 50%;
      border: 0px solid #fff;
      max-width: 291px;
      max-height: 291px;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .edit-btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .profile-name {
    font-size: 18px;
    color: ${fontColors.black};
    margin: 18px 0;
  }

  .pfofile-title {
    font-size: 18px;
    font-weight: 500;
    color: ${fontColors.black};
  }

  .profile-info {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 20px;
    padding: 20px 20px 0;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid ${colors.lightGreyBlue};
    ${boxShadow.light};
  }

  .profile-header {
    display: flex;
    justify-content: space-between;
  }

  .profile-content {
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    padding-bottom: 16px;

    &.experience-cards {
      flex: auto;
    }

    &.profile-client-description {
      border-left: 1px solid ${colors.lightGreyBlue};

      .profile-subtitle,
      .profile-description {
        padding-left: 16px;
      }
    }

    &.profile-experience {
      flex: 0 0 100%;
      margin-bottom: 16px;
    }

    .profile-subtitle {
      margin-bottom: 16px;
      padding-bottom: 16px;
      font-size: 18px;
      color: ${fontColors.black};
      font-weight: 500;
      border-bottom: 1px solid ${colors.lightGreyBlue};
    }

    .profile-block {
      padding-bottom: 10px;

      & > span {
        color: ${fontColors.light};
      }
    }

    .profile-row {
      display: flex;

      .profile-column {
        width: 50%;

        &:first-of-type {
          border-right: 1px solid ${colors.lightGreyBlue};
          margin-right: 15px;
        }
      }
    }
  }

  .profile-item {
    margin-bottom: 20px;
    flex: 1;
  }

  .profile-label {
    width: 100%;
    color: ${fontColors.black};
    font-weight: 500;
    margin-bottom: 5px;

    & > i {
      color: ${colors.blue};
    }
  }

  .profile-about {
    margin: 15px 0;
  }

  .profile-description,
  .profile-about {
    color: ${fontColors.regular};
  }

  .profile-skills,
  .profile-communications {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    & > span {
      font-size: 14px;
      margin: 4px 10px 6px 0;
      padding: 0 15px;
      border-radius: 20px;
    }
  }

  .profile-skills > span {
    color: ${fontColors.blue.inert};
    background-color: ${colors.lightGreyBlue};
  }

  .profile-communications > span {
    color: ${fontColors.light};
    border: 1px solid ${colors.light};
  }
`;
