import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #ffd300;
`;

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
  padding: 10px;
  width: 530px;
  height: 300px;
  margin: 10px;
  text-align: center;
`;

export const Square2 = styled.div`
  background-color: #f1f1f1;
  width: 399px;
  height: 300px;
  margin: 10px;
  text-align: center;
`;

export const Date = styled.p`
  font-size: 1em;
  text-align: left;
  margin-left: 1px;
  color: #0f0100;
`;

export const Title = styled.h1`
  text-align: center;
  color: #0f0100;
`;

export const Information = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Data = styled.div`
  background-color: #f1f1f1;
  margin: 20px;
  text-align: center;

  & > h1 {
    font-size: 3em;
    margin: 0;
  }

  & > p {
    margin: 0;
    line-height: 18px;
  }
`;

export const Border = styled.div`
  border-left: 2px solid #24334aff;
  height: 100px;
`;
