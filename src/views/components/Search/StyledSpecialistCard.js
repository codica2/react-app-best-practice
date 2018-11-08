import styled from "styled-components";

import { boxShadow, colors, primaryColors } from "@styled/constants/colors";

export default styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  ${boxShadow.light};

  .ui.button {
    text-transform: uppercase;
    font-weight: 500;
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

  .row {
    display: flex;
    flex-flow: row nowrap;

    &.info {
      img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        object-fit: cover;
        background: ${primaryColors.accentBackground};
      }

      .detailed {
        margin-left: 30px;

        p {
          margin-bottom: 0;
          color: #666;
          font-weight: 500;

          &.name {
            color: ${colors.blue};
          }

          &.title {
            margin-bottom: 6px;
          }
        }
      }
    }

    &.skills {
      display: flex;
      flex-flow: row wrap;
      margin-top: 8px;

      span,
      .skill {
        color: ${primaryColors.grey};
      }

      .skill {
        display: inline-block;
        padding: 0 12px;
        border: 1px solid #dae1ee;
        border-radius: 12px;
        white-space: nowrap;
        font-size: 0.9em;
        line-height: 1.4em;
        margin-left: 6px;

        &.all {
          color: ${colors.blue};
          cursor: pointer;

          .ui.popup {
            color: ${colors.grey};
          }
        }
      }
    }

    &.buttons {
      justify-content: space-between;
      margin-top: 14px;
      .ui.button {
        flex: 0 0 47%;
      }
    }
  }

  .rating {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #fff;
    background: #f7da97;
    padding: 2px 0;
    border-radius: 12px;
    font-size: 0.9em;
    width: 45px;
    text-align: center;

    i {
      margin-left: 4px;
      font-size: 0.85em;
      line-height: 1.4em;
    }
  }
`;
