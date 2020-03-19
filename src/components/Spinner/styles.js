/* adapted from https://loading.io/css/ */
import styled, { keyframes } from "styled-components";

const animated = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }

`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 50;
`;

export const Container = styled.div`
  display: inline-block;
  height: 5em;
  position: relative;
  width: 5em;

  & > div {
    animation: ${animated} 1.2s linear infinite;
    background: #737373;
    border-radius: 50%;
    height: 6px;
    position: absolute;
    width: 6px;
  }

  & > div:nth-child(1) {
    animation-delay: 0s;
    left: 66px;
    top: 37px;
  }
  & > div:nth-child(2) {
    animation-delay: -0.1s;
    left: 62px;
    top: 22px;
  }
  & > div:nth-child(3) {
    animation-delay: -0.2s;
    left: 52px;
    top: 11px;
  }

  & > div:nth-child(4) {
    animation-delay: -0.3s;
    left: 37px;
    top: 7px;
  }
  & > div:nth-child(5) {
    animation-delay: -0.4s;
    left: 22px;
    top: 11px;
  }
  & > div:nth-child(6) {
    animation-delay: -0.5s;
    left: 11px;
    top: 22px;
  }
  & > div:nth-child(7) {
    animation-delay: -0.6s;
    left: 7px;
    top: 37px;
  }
  & > div:nth-child(8) {
    animation-delay: -0.7s;
    left: 11px;
    top: 52px;
  }
  & > div:nth-child(9) {
    animation-delay: -0.8s;
    left: 22px;
    top: 62px;
  }
  & > div:nth-child(10) {
    animation-delay: -0.9s;
    left: 37px;
    top: 66px;
  }
  & > div:nth-child(11) {
    animation-delay: -1s;
    left: 52px;
    top: 62px;
  }
  & > div:nth-child(12) {
    animation-delay: -1.1s;
    left: 62px;
    top: 52px;
  }
`;
