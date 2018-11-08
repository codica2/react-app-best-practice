import styled from "styled-components";
import { colors, primaryColors, fontColors } from "@styled/constants/colors";

export default styled.div`
  .react-phone-number-input {
    .react-phone-number-input__country.rrui__select--collapsed {
      .react-phone-number-input__icon {
        fill: ${colors.blue};
        font-size: 18px;
        opacity: 0.8;
      }
    }

    .rrui__input {
      height: auto;

      .rrui__input-element.rrui__button-reset.rrui__select__button {
        padding: 9px 10px;
        border: 1px solid ${colors.lightGreyBlue};
        border-radius: 6px;
        max-height: 38px;

        &:focus {
          border: 1px solid ${colors.blue};
          .react-phone-number-input__icon {
            opacity: 1;
          }

          .rrui__select__arrow {
            color: ${colors.blue};
          }
        }
      }
    }

    .rrui__select__button {
      border: none;
    }

    input {
      border: 1px solid ${colors.lightGreyBlue};
      border-radius: 6px;
      font-size: 16px;
      height: auto;
      padding: 8px 10px;
      line-height: 22px;
      max-height: 38px;
      color: ${fontColors.regular};

      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: ${fontColors.light};
      }

      &:focus {
        border-color: ${colors.blue};
      }
    }

    .rrui__select__options {
      border: 1px solid ${colors.blue};
      max-width: 100%;
      left: 0;

      .rrui__select__options-list-item {
        font-size: 16px;
        color: ${fontColors.regular};

        .rrui__select__option:hover {
          background-color: ${colors.lightGreyBlue};
        }

        .rrui__select__option--focused {
          background-color: ${colors.lightGreyBlue};
        }
      }
    }

    &.error {
      .rrui__input-element.rrui__button-reset.rrui__select__button,
      input {
        border-color: ${primaryColors.red} !important;
      }
    }
  }
`;
