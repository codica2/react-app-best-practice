import styled from "styled-components";

export default styled.div`
  &.moduleNumber {
    margin-left: 28px;

    a {
      color: #666;
      &:hover {
        color: #666;
      }
    }
  }

  &.moduleBreadcrumb {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 18px;
      transform: translateY(-50%) rotate(-135deg);
      height: 10px;
      width: 10px;
      border: solid #fff;
      border-width: 0 0 2px 2px;
      transition: 0.4s;
    }

    &:last-of-type {
      &:after {
        content: none;
      }
    }

    a {
      position: relative;
      color: rgba(255, 255, 255, 0.7);
      font-size: 18px;
      font-weight: 500;
      padding-right: 40px;

      &.active {
        color: #fff;
      }

      &:hover {
        color: #fff;
      }
    }
  }
`;
