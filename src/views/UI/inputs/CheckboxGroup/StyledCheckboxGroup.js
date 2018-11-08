import styled from "styled-components";

export default styled.div`
  margin-bottom: 18px;

  .checkbox-group {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  @media (max-width: 991px) {
    .Select {
      width: 75%;
    }
  }

  @media (max-width: 767px) {
    .Select {
      width: 100%;
    }
  }
`;
