import styled from "styled-components";
import { fontColors } from "../constants/colors";

export default styled.span`
  color: ${fontColors.red};
  position: absolute;
  bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
  left: ${props => (props.paddedError ? "20px" : "0px")};
  padding-left: inherit;
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 1921px) {
    top: -22px;
    font-size: 20px;
  }
`;
