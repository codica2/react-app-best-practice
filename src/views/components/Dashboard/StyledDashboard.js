import styled from "styled-components";

export default styled.div`
  color: #666;
  padding: 0;

  display: grid;
  ${props => (props.village ? `` : `grid-template-columns: 1fr 2fr 2fr`)};
  grid-gap: 20px;

  & > div > div {
    display: grid;
    grid-auto-rows: 140px;
    grid-gap: 20px;
    grid-auto-flow: dense;
    ${props => (props.village ? `grid-template-columns: repeat(5, 1fr)` : ``)};
  }

  .tasks > div {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1600px) {
    .tasks > div {
      grid-template-columns: 1fr;
    }
  }
`;
