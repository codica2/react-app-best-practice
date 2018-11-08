import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const FullScreen = styled.div`
    
    position: relative;
    min-height: 800px;
    height: 100vh;
    
    & > p {
        text-align: center;
    }
    
    ${props =>
      props.centered &&
      css`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      `};
    
    ${props => props.indent && `margin-top: 160px;`};
    
    @media (max-width: 1200px) {
    
        height: auto;
        min-height: 100vh;
    }
    
    @media (max-width: 768px) {
    
        padding: 80px 0;
    
        ${props =>
          props.border &&
          css`
            &:after {
                content: '';
                position: absolute;
                height: 18px;
                width: calc(100% + 30px);
                background: ${props.border};
                bottom: 0;`}
        }
    }
`;

export const ColoredLinks = styled(NavLink)`
  ${props =>
    props.color &&
    css`
        color: ${props.color};
        position: relative;
        
        &:after {
            content: '';
            transition: all .5s ease-in-out;
            position: absolute;
            left: 0;
            bottom -2px;
            height: 2px;
            width: 100%;
            background: ${props.color};
        }
        
        &:hover {
            color: ${props.color};
            
            :after {
                width: 0;
                background: transparent;
            }
        }
    `};
`;

export const StyledHome = styled.div`
  font-size: 30px;
  line-height: 1;

  img {
    max-width: 650px;
    margin-bottom: 30px;
  }

  p {
    font-weight: 300;

    &.bolder {
      font-weight: bolder;
      color: #1991fa;
    }
  }

  .values {
    border-top: 3px solid #1991fa;
    padding: 20px 0;
    margin-top: 30px;

    span {
      font-weight: 300;
      display: block;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      font-weight: 400;
    }
  }

  .title {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 70px 20% 70px 0;
    font-size: 44px;
    border-right: 3px solid #1991fa;
  }

  .description {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 21px;
    font-weight: 300;
    padding-left: 10%;
    line-height: 1;
  }

  @media (max-width: 1200px) {
    font-size: 24px;

    br {
      display: none;
    }

    .limit-width {
      max-width: 440px;
    }
  }

  @media (max-width: 991px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 30px;

    img {
      max-width: 550px;
    }

    .title {
      justify-content: start;
      padding: 0 0 40px 0;
      font-size: 34px;
      border-right: none;
    }

    .description {
      border-bottom: 3px solid #1991fa;
      text-align: justify;
      align-items: center;
      font-size: 18px;
      padding: 0 0 20px 0;
    }
  }

  @media (max-width: 569px) {
    font-size: 24px;

    img {
      max-width: 310px;
    }
  }
`;
