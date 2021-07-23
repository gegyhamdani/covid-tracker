import styled, { keyframes } from "styled-components";

const opacityFrame = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

export const Main = styled.div`
  animation: ${opacityFrame} 2s linear forwards;
  background-color: #ffd300;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderRow = styled.div`
  margin: 15px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -60px;
  min-height: 100vh;
  padding: 0 0.5rem;
  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const Square1 = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 640px;

  @media screen and (max-width: 1024px) {
    width: 70%;
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
  width: 400px;

  & > img {
    animation: ${rotate} 30s linear infinite;
    transition: transform 1s;
    width: 240px;

    @media screen and (max-width: 900px) {
      width: 0;
    }
  }
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 1024px) {
    width: 0;
  }
`;

export const Date = styled.p`
  color: #0f0100;
  font-size: 1em;
  margin-bottom: 0;
  margin-left: 1px;
  text-align: left;
  @media screen and (max-width: 410px) {
    line-height: 14px;
    font-size: 0.9em;
  }
`;

export const Footer = styled.p`
  color: #0f0100;
  font-size: 1em;
  margin-bottom: 0;
  margin-left: 1px;
  text-align: left;
  @media screen and (max-width: 1024px) {
    margin-top: 36px;
  }
  @media screen and (max-width: 410px) {
    line-height: 14px;
    font-size: 0.9em;
  }
`;

export const Title = styled.h1`
  color: #0f0100;
  font-size: 2.5em;
  line-height: 98%;
  margin: 0;
  padding-top: 15px;
  text-align: left;
  @media screen and (max-width: 1024px) {
    font-size: 2.3em;
  }
  @media screen and (max-width: 410px) {
    font-size: 2em;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    margin-top: 18px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Data = styled.div`
  margin: 20px;

  @media screen and (max-width: 1024px) {
    margin: 5px 0;
  }

  & > h1 {
    font-size: 3em;
    margin: 0;
    transition: font-size 0.3s;

    @media screen and (max-width: 410px) {
      font-size: 2em;
    }

    @media screen and (max-width: 1024px) {
      text-align: left;
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

    @media screen and (max-width: 1024px) {
      text-align: left;
    }
  }
`;

export const Border = styled.div`
  border-left: 2px solid #24334aff;
  height: 100px;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    height: 0;
    margin-top: 0;
  }
`;
