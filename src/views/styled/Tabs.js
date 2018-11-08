import styled from "styled-components";

import { Tab } from "semantic-ui-react/dist/commonjs";

export default styled(Tab)`
  .ui.tabular.menu {
    border: none;

    .item {
      position: relative;
      justify-content: center;
      font-size: 14px;
      color: #949494;
      text-transform: uppercase;
      width: 50%;
      padding: 0;
      text-align: center;
      border: none;

      &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background: transparent;
        bottom: 2px;
        left: 0;
      }

      &.active {
        border: none;
        font-weight: 500;
        color: #232323;
        margin-bottom: 0;

        &:after {
          background: #1991fa;
        }
      }
    }
  }

  .ui.segment {
    border: none !important;
    box-shadow: none;
    padding: 8px 0;

    .custom-select {
      .dropdown.icon {
        top: 55%;
        right: 2em;
        margin: 0;
        padding: 0;
        transform: translateY(-50%);
        padding: 0;
        transition: transform 0.4s ease;

        &:before,
        &:after {
          content: " " !important;
          width: 8px;
          height: 1px;
          position: absolute;
          top: 50%;
          right: 0;
          background: #c1c6d0 !important;
          transform: rotate(-45deg);
          transform-origin: 0;
        }

        &:before {
          transform: rotate(-135deg);
        }
      }

      & > .text {
        font-size: 14px;
        line-height: 17px;
        color: #666;
      }

      .menu {
        .item {
          font-size: 14px;
          color: #666;
          border: none;
          background: transparent;

          &:hover {
            color: #232323;
          }
        }
      }

      &.disabled {
        opacity: 1;
      }

      &.active {
        border-color: #aeb8f3;

        &:hover {
          border-color: #aeb8f3;
        }

        .menu {
          border-color: #aeb8f3;

          &:hover {
            border-color: #aeb8f3;
          }
        }
      }
    }
  }
`;
