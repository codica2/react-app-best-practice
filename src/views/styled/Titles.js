import styled, { css } from "styled-components";

export const DvTitleBig = styled.h1`
  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
    `};

  ${props => (props.mTop ? `margin-top: ${props.mTop}px` : `margin-top: 0px`)};
  font-family: "Roboto";
  ${props => (props.fz ? `font-size: ${props.fz}px` : `font-size: 324px`)};
  font-weight: 700;
  line-height: 300px;

  &:first-child {
    margin-top: ${props => (props.mTop ? `${props.mTop}px` : `0px`)};
    font-family: "Roboto";
    ${props => (props.fz ? `font-size: ${props.fz}px` : `font-size: 324px`)};
    font-weight: 700;
    line-height: 300px;
  }

  @media (max-width: 1920px) {
    &:first-child {
      margin-top: 0;

      ${props =>
        props.sm
          ? css`
              font-size: 275px;
              line-height: 215px;
              margin-top: 60px;
              margin-left: -20px;
            `
          : ``};
    }
  }

  @media (max-width: 1499px) {
    &:first-child {
      font-size: 200px;
      line-height: 200px;
    }
  }

  @media (max-width: 1499px) {
    &:first-child {
      font-size: 150px;
      line-height: 150px;
    }
  }

  @media (max-width: 767px) {
    justify-content: flex-start;
    max-width: 560px;
    margin: 0 auto;

    &:first-child {
      font-size: 140px;
      line-height: 140px;

      ${props =>
        props.sm
          ? css`
              font-size: 125px;
              line-height: 110px;
              margin-top: 0px;
              margin-left: -10px;
            `
          : ``};
    }
  }

  @media (max-width: 496px) {
    &:first-child {
      ${props =>
        props.sm
          ? css`
              font-size: 80px;
              line-height: 75px;
            `
          : ``};
    }
  }
`;

export const DvTitle = styled.h1`
  font-family: "Roboto";
  font-weight: 300;

  ${props => (props.mTop ? `margin-top: ${props.mTop}px` : `margin-top: 0px`)};
  ${props => (props.mBot ? `margin-bottom: ${props.mBot}px` : ``)};
  ${props => (props.fz ? `font-size: ${props.fz}px` : `font-size: 84px`)};

  &:first-child {
    font-family: "Roboto";
    font-weight: 300;

    ${props =>
      props.mTop ? `margin-top: ${props.mTop}px` : `margin-top: 0px`};
    ${props => (props.fz ? `font-size: ${props.fz}px` : `font-size: 84px`)};
  }

  @media (max-width: 1920px) {
    margin-top: 30px;
    font-size: 60px;

    &:first-child {
      margin-top: 30px;
      font-size: 60px;
    }
  }

  @media (max-width: 991px) {
    &:first-child {
      font-size: 50px;
    }
  }
`;

export const DvTitleMedium = styled.h2`
  font-family: "Roboto";
  font-size: 260px;
  line-height: 0.8;

  @media (max-width: 1200px) {
    font-size: 220px;

    ${props =>
      props.left
        ? css`
            text-align: left;
          `
        : `text-align: right`};
  }

  @media (max-width: 991px) {
    font-size: 165px;
  }

  @media (max-width: 768px) {
    font-size: 140px;
    text-align: left;
    line-height: 1;
    margin-bottom: 30px !important; //overwrite semantic style

    ${props =>
      props.left &&
      css`
        font-size: 85px;
      `};
  }

  @media (max-width: 414px) {
    ${props =>
      props.xs &&
      css`
        font-size: 62px;
      `};
  }
`;

export const DvTitleSmall = styled.h2`
  font-size: 18px;
  margin-bottom: 90px;
  font-weight: 400;
  text-transform: uppercase;
  color: #666;
  margin-left: 5px
    ${props =>
      props.indentNull &&
      css`
        margin: 0;
      `};
  ${props =>
    props.fz &&
    css`
      font-size: ${props.fz}px;
    `};
  ${props =>
    props.negative &&
    css`
      margin-left: -15px;
    `};

  ${props =>
    props.mTop ? `margin-top: ${props.mTop}px !important` : `margin-top: 0px`};

  ${props =>
    props.asButton ? `cursor: pointer;` : ``} @media (max-width: 1920px) {
    font-size: 18px;
    margin-bottom: 40px;
  }

  @media (max-width: 1099px) {
    ${props =>
      props.xsCenter &&
      css`
        text-align: center;
        margin-left: 0;
        margin-bottom: 30px;
      `};
  }
`;
