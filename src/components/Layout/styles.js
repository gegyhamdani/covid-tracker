import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;

export const Square1 = styled.div`
  background-color: #f1f1f1;
  width: 700px;
  height: 400px;
  margin: 10px;
  text-align: center;
`;

export const Square2 = styled.div`
  background-color: #f1f1f1;
  width: 399px;
  height: 400px;
  margin: 10px;
  text-align: center;
`;
