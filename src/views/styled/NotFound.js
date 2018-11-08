import styled from "styled-components";

export default styled.div`
  height: 100%;
  min-height: 60vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  h1 {
    margin-bottom: 60px;

    a {
      font-size: 80px;
    }
  }

  span {
    display: inline-block;
    margin-bottom: 25px;
  }

  p {
    line-height: 2;
  }
`;
