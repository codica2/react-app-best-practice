import styled from "styled-components";

import { colors, fontColors } from "../constants/colors";

export default styled.div`
  font-size: 18px;
  color: ${fontColors.light};
  font-weight: 400;
  margin-bottom: 30px;

  & > a {
    color: ${fontColors.light};
    text-decoration: underline;

    &:hover {
      color: ${colors.blue};
    }
  }
`;
