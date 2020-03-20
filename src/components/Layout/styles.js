import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  background-color: #ffd300;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;

  @media screen and (max-width: 710px) {
    justify-content: flex-start;
  }
`;

export const Square1 = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 530px;

  @media screen and (max-width: 530px) {
    width: 330px;
  }
  @media screen and (max-width: 410px) {
    width: 270px;
    margin: 0;
    padding: 0;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Square2 = styled.div`
  margin: 10px;
  text-align: center;
  transition: transform 1s;
  width: 399px;

  & > img {
    animation: ${rotate} 30s linear infinite;
    transition: transform 1s;
    width: 300px;

    @media screen and (max-width: 710px) {
      width: 200px;
    }
    @media screen and (max-width: 600px) {
      width: 120px;
    }
  }
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 710px) {
    width: 300px;
  }
  @media screen and (max-width: 600px) {
    margin-top: -100px;
    margin-left: -70px;
    width: 250px;
  }
  @media screen and (max-width: 410px) {
    margin-top: -100px;
    margin-left: -80px;
    width: 250px;
  }
`;

export const Date = styled.p`
  color: #0f0100;
  font-size: 1em;
  margin-bottom: 0;
  margin-left: 1px;
  text-align: left;
`;

export const Title = styled.h1`
  color: #0f0100;
  font-size: 2.5em;
  margin: 0;
  text-align: left;
  line-height: 98%;
  @media screen and (max-width: 410px) {
    font-size: 2em;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Data = styled.div`
  margin: 20px;

  & > h1 {
    font-size: 3em;
    margin: 0;
    transition: font-size 1s;

    @media screen and (max-width: 410px) {
      font-size: 2em;
    }
  }

  h1:hover {
    font-size: 3.4em;
  }

  & > p {
    line-height: 18px;
    margin: 0;

    @media screen and (max-width: 410px) {
      line-height: 14px;
      font-size: 0.9em;
    }
  }
`;

export const Border = styled.div`
  border-left: 2px solid #24334aff;
  height: 100px;
  margin-top: 20px;

  @media screen and (max-width: 410px) {
    height: 80px;
  }
`;
