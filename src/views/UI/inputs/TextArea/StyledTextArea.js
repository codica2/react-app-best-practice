import styled from "styled-components";

import { colors, primaryColors, fontColors } from "@styled/constants/colors";

export default styled.div`
  position: relative;
  ${props => (props.padded ? `padding: 0 20px` : ``)};
  padding-bottom: ${props =>
    props.padBottom ? `${props.padBottom}px` : `20px`};
  margin-bottom: 10px;

  p,
  .textarea-label {
    display: block;
    font-size: 18px;
    margin-bottom: 13px;
    font-weight: 500;
    color: ${fontColors.black};
  }

  textarea {
    width: 100%;
    min-height: 100px;
    resize: vertical;
    outline: none;
    ${props => props.disabled && "pointer-events: none"};

    &:disabled {
      background-color: transparent;
    }
  }

  &.transparent {
    p,
    .textarea-label {
      padding-left: 10px;
    }

    textarea {
      overflow: hidden;
      resize: none;
      min-height: auto;
      letter-spacing: normal;
      border: 1px solid var(--bdcolor, transparent);
      cursor: pointer;

      &.editing {
        --bdcolor: #ccc;
        margin-bottom: 7px;
      }

      &.error {
        --bdcolor: ${primaryColors.red};
      }

      &:focus,
      &.editing:focus {
        border-color: ${colors.blue};
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
        cursor: text;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.02);
      }
    }
  }

  .controls {
    margin-bottom: 14px;
    .ui.button {
      padding: 4px 14px 6px 14px;
      color: var(--butcolor, #666);
      line-height: normal;
      font-weight: 600;
      background: var(--butbgcolor, transparent);
      border: 1px solid var(--butbdcolor, #ccc);
      border-radius: 4px;
      transition: 0.3s;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
      }

      &.save {
        --butbdcolor: ${primaryColors.green};
        --butcolor: #fff;
        --butbgcolor: ${primaryColors.green};
        margin-right: 14px;
      }

      &.cancel {
        --butbdcolor: transparent;
        --butcolor: ${primaryColors.grey};

        &:hover {
          --butbdcolor: ${primaryColors.lightGrey};
        }
      }
    }
  }
`;

export const StyledLabelArea = styled.label`
  position: relative;

  span {
    top: -40px;
  }
`;
