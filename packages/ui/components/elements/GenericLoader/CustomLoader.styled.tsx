import styled, { keyframes } from 'styled-components'

const webkitHintLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const hintloading = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;


export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #babbbc;
  animation: ${hintloading} 2s ease-in-out 0s infinite;
  -webkit-animation: ${hintloading} 2s ease-in-out 0s infinite;
`;
