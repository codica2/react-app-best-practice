import styled from "styled-components";
import { Tab } from "semantic-ui-react";

export default styled(Tab.Pane)`
  &.ui.segment {
    padding: 50px 0 14px;
    border: none;

    .radio-group {
      padding-left: 7px;
      margin-bottom: 25px;
    }

    @media (max-width: 1920px) {
      padding: 40px 0 14px;
    }

    @media (max-width: 1024px) {
      padding: 20px 0 14px;
    }

    @media (max-width: 767px) {
      padding: 20px 0 0;
    }
  }
`;
