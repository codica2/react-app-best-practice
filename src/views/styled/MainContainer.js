import styled from "styled-components";

export default styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 87px;
  display: flex;
  justify-content: center;

  ${props => (props.indentBot ? `margin-bottom: 250px` : ``)};
  ${props => (props.indentTop ? `margin-top: 100px` : ``)};
  ${props => (props.relative ? `position: relative` : ``)};

  .frame {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame-load {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    transform: rotateY(0deg);
    background-color: rgba(0, 0, 0, 0.3);

    &.transparent {
      background-color: transparent;
    }
  }

  .frame-loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    transform: rotateY(180deg);
  }

  .loading {
    transition: transform 0.7s ease-in-out;
    backface-visibility: hidden;

    &.content-load {
      transform: rotateY(0deg);
    }

    &.content-loading {
    }
  }

  ${props =>
    props.sidebarCondition &&
    `
      @media (min-width: 1441px) {
        max-width: ${props.passive ? "1280px" : "100%"};
        padding-left: ${props.passive ? "0" : "260px"};
        padding-right: ${
          !props.passive ? (props.sidebarOpened ? "260px" : "60px") : "0"
        };
      }

      @media (max-width: 1440px) {
        padding-left: 100px;
        padding-right: ${props.sidebarOpened ? "260px" : "60px"};
      }
  `};
`;
