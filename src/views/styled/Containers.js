import styled from "styled-components";
import { boxShadow, fontColors, colors } from "./constants/colors";

export const ContainerLarge = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${props => (props.containerHeader ? `94%` : `1280px`)};
  width: 100%;
  transition: 0.4s ease-in-out;

  & > .ui.grid {
    margin: 0;
  }

  ${props => (props.indentBot ? `margin-bottom: 250px` : ``)};

  @media screen and (min-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 1920px) {
    max-width: 1910px;
    padding: 0;
  }

  ${props =>
    props.sidebarCondition &&
    `
    @media (min-width: 1441px) {
      max-width: 100%;
      padding-left: 260px;
      padding-right: 60px;
    }

    @media (max-width: 1440px) {
      padding-left: 100px;
      padding-right: 60px;
    }
    `};
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: ${props =>
    props.dashboardContainer
      ? `0 0 80px 0`
      : props.fluid
      ? `0 20px 0 20px`
      : `0px 20px 80px 20px`};
  margin-bottom: 50px;

  max-width: 1280px;
  margin-top: 0;
  background-color: ${props => (props.transparent ? `transparent` : `#fff`)};
  ${props => (props.transparent ? `` : boxShadow.light)};
  ${props => (props.indentTop ? `margin-top: 100px` : ``)};
  ${props => (props.indentTopXs ? `margin-top: 40px` : ``)};
  ${props => (props.relative ? `position: relative` : ``)};
  transition: 0.4s ease-in-out;

  &.loading {
    .preloader {
      opacity: 1;
      visibility: visible;
    }
    .ui.grid {
      opacity: 0;
      pointer-events: none;
    }
  }

  .preloader {
    position: absolute;
    top: 300px;
    left: 50%;
    margin-left: -21px;
    opacity: 0;
    visibility: hidden;
  }

  & .navigation-wrap {
    display: flex;
    justify-content: space-between;
  }

  & > .default {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    font-size: 30px;
    text-transform: uppercase;
    color: ${fontColors.black};
  }

  & > .default-dashboard {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    min-height: 600px;
    font-size: 22px;
    line-height: 30px;
    color: ${fontColors.black};

    & > h1 {
      text-transform: uppercase;
    }

    & > p {
      margin: 15px 0;
    }

    .link-green {
      color: ${colors.green};
    }
    .link-purple {
      color: ${colors.purple};
    }
  }

  @media (max-width: 1920px) {
    max-width: 1280px;
  }

  ${props =>
    props.sidebarCondition &&
    !props.small &&
    `
        @media (min-width: 1441px) {
            max-width: 100%;
        }

        @media (max-width: 1440px) {

        }
    `} @media (max-width: 992px) {
    padding-bottom: 100px;
  }
`;

export const IntroContainer = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  border-radius: 3px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  align-self: center;
  margin-top: -87px;

  & .confirm-msg {
    font-family: "Roboto";
    /* margin-top: 40px; */

    & > p {
      color: #666;
      font-size: 1.1rem;
      margin-top: 30px;

      b {
        font-weight: 500;
      }
    }

    & > div {
      font-family: "Roboto";
      font-size: 1.1rem;
      font-weight: 500;
      color: #666;
      padding-bottom: 10px;
    }
  }

  .bottom-annot {
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translate(-50%, 100%);

    color: ${fontColors.blue.inert};
    opacity: 0.8;

    a {
      color: ${fontColors.blue.active};
    }
  }

  .controls {
    display: flex;
    justify-content: flex-end;

    &.space-between {
      justify-content: space-between;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 10%;
    margin: 40px auto 0;
  }
`;
