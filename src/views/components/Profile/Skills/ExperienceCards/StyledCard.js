import styled from "styled-components";
import { Card } from "semantic-ui-react";

export default styled(Card)`
  &.ui.card {
    flex: 49% 0 0;
    border-radius: 0;
    margin: 25px 0 0 0 !important;
    width: 100%;
    max-height: 350px;
    transition: max-height 0.5s;
    box-sizing: border-box;
    overflow: hidden;

    &.show {
      max-height: 1000px;
    }

    ${props =>
      props.expanded
        ? `
        &:before {
          content:'';  
          height:150px; 
          position:absolute; 
          bottom:0px; left:0; 
          width:100%; 
          background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%); 
          transition:height .25s ease;
        }
        &:after {
          height:70px;
        }
      `
        : ``};

    .show-btn {
      background-color: #ccc;
      border: none;
      border-radius: 50% !important;
      bottom: 20px;
      color: #fff;
      padding: 10px;
      cursor: pointer;
      left: 50%;
      margin-left: -20px;
      position: absolute;
      transition: background-color 0.5s ease;
      font-size: 20px;

      &:hover {
        background-color: #666;
      }

      &.rotate {
        transform: rotate(180deg);
      }
    }

    & > .content {
      padding: 40px 30px;

      > .header:not(.ui) {
        font-size: 20px;
        margin-bottom: 15px;
      }

      > .description {
        color: #000;
      }
    }

    .meta {
      font-size: 18px;
      color: #000;
      font-weight: 300;
    }

    .period,
    .location {
      display: flex;
      align-items: center;
      margin: 25px 0;

      img {
        width: 30px;
        margin-right: 15px;
      }
    }

    & .icon {
      opacity: 0;
      color: #666;
      font-size: 1.2em;
    }

    &:hover .icon {
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    & .edit-icon,
    & .delete-icon {
      opacity: 0;
      color: #666;
      font-size: 1.2em;
    }

    &:hover .edit-icon,
    &:hover .delete-icon {
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    &.ui.card {
      width: 75%;
      margin: 15px 0;
    }
  }

  @media (max-width: 499px) {
    &.ui.card {
      width: 100%;
    }
  }
`;
