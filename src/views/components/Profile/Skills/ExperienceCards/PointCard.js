import styled from "styled-components";

export default styled.div`
  position: absolute;
  right: 0px;
  ${props => (props["data-edit"] ? "right: 40px;" : "")} top: 0px;
  width: 40px !important;
  height: 40px !important;
  padding-top: 13px;
  cursor: pointer;
`;
