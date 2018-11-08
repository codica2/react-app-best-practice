import styled from "styled-components";

export default styled.div`
  margin-bottom: 30px;

  .cards-wrapper {
    display: flex;
    flex-flow: column wrap;
    align-items: start;
  }

  .addButton {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100px;
    margin-top: 50px;

    .plus {
      height: 50px;
      width: 50px;
      font-size: 36px;
      font-weight: 100;
      text-align: center;
      color: #b7b7b7;
      line-height: 48px;
      border: 2px solid #b7b7b7;
      border-radius: 50%;
      cursor: pointer;
    }

    .add {
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      color: #bbb;
    }
  }
`;
