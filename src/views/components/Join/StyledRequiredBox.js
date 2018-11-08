import styled from "styled-components";

import { primaryColors, fontColors } from "@styled/constants/colors";

export default styled.div`
  display: flex;
  margin-bottom: 80px;
  position: relative;
  font-size: 1rem;
  font-weight: 300;

  & div.ui.checkbox > label:before {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border-color: ${primaryColors.darkGrey};
  }

  & div.ui.checkbox input:checked:focus ~ label:before {
    border-color: ${primaryColors.darkGrey};
  }

  & div.ui.checked.checkbox > label:after {
    content: "";
    width: 12px;
    height: 12px;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    padding: 4px;
    background-color: ${primaryColors.darkGrey};
  }

  & div.ui.checkbox input:checked:focus ~ label:after {
    border-color: ${primaryColors.darkGrey};
  }

  b {
    cursor: pointer;
  }

  .privacy {
    margin-left: 15px;
    color: ${fontColors.blue.inert};

    .privacy-bold {
      font-weight: 400;
      color: ${fontColors.blue.active};
      cursor: pointer;
    }
  }

  @media (min-width: 1921px) {
    & > p {
      margin-left: 25px;
    }

    .ui.checkbox label {
      &:before {
        width: 28px;
        height: 28px;
      }

      &:after {
        font-size: 23px;
        top: 5px;
        left: 3px;
      }
    }
  }

  @media (max-width: 1920px) {
    margin-bottom: 30px;
    font-size: 14px;
  }

  @media (max-width: 1920px) {
    & > p {
      margin-right: 100px;
    }
  }
`;
