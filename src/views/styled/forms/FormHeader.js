import styled from "styled-components";

import { fontColors } from "../constants/colors";

export default styled.div`
  font-family: "Roboto", medium;
  margin-top: 10px;
  padding-bottom: 1rem;
  margin-bottom: 40px;

  & > .form-title {
    font-size: 24px;
    text-transform: uppercase;
    color: ${fontColors.black};
    line-height: 3rem;
  }

  & > .form-subtitle {
    font-size: 14px;
    color: ${fontColors.light};
  }
`;
