import styled from "styled-components";
import { fontColors, colors, boxShadow } from "./constants/colors";

export default styled.div`
  .module {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;

    .module-aside,
    .module-main {
      width: 100%;
      padding: 30px;
      background: #fff;
      border-radius: 3px;
      ${boxShadow.light};

      .module-title {
        font-size: 24px;
        ${props => props.edit && "padding-left: 10px;"};
        font-weight: 500;
        line-height: 27px;
        margin-bottom: 20px;
        color: ${fontColors.black};
      }

      .controls {
        display: flex;
        justify-content: flex-end;
      }
    }

    .module-aside {
      flex: 0 0 350px;
      margin-right: 20px;

      .module-info {
        font-size: 18px;
        border-bottom: 1px solid #f1f1f5;
        padding-bottom: 20px;
        margin-bottom: 20px;

        .label {
          font-size: 18px;
          font-weight: 500;
          color: #000333;
          margin-bottom: 13px;
        }

        .estimate {
          padding: 0;

          .ui.input.error {
            & + span {
              right: 0;
              left: auto;
              bottom: -20px;
            }
          }
        }

        &:last-of-type {
          border: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }
      }
    }

    .module-costs {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      font-size: 14px;
      font-weight: 500;

      span {
        color: ${fontColors.black};
        width: 130px;
      }

      i {
        color: ${colors.blue};
        margin-right: 10px;
      }
    }
  }
`;
