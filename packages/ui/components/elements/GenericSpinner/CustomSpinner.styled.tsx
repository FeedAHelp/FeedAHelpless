import styled, { keyframes } from 'styled-components'

export const loaderAnimation = keyframes`
  0% {
    width: 10%;
    transform: rotate(0deg);
  }
  10% {
    left: 0%;
    transform: rotate(0deg);
  }
  20% {
    width: 0%;
    left: 20%;
  }
  30% {
    width: 25%;
  }
  50% {
    left: 15%;
    width: 35%;
  }
  70% {
    width: 30%;
    left: 18%;
    transform: rotate(240deg);
  }
  90% {
    width: 30%;
    left: 10%;
  }
  100% {
    width: 2%;
    left: 25%;
    transform: rotate(360deg);
  }
`;

export const panAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    transform-origin: top right;
  }
  10% {
    transform: rotate(-2deg);
    transform-origin: top right;
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const shadowAnimation = keyframes`
  0% {
    width: 30%;
  }
  50% {
    width: 40%;
    left: 1.25rem;
  }
  100% {
    width: 30%;
  }
`; 

export const PanLoaderContainer = styled.div`
  position: fixed;
  top: calc(50% - 5.625rem); /* Corrected top value */
  left: calc(50% - 5.625rem); /* Corrected left value */
  width: 180px;
  height: 180px;
`;


export const Loader = styled.div`
  position: relative;
  top: 10%;
  left: 0;
  z-index: -1;
  width: 60%;
  height: 45%;
  border: 0.625rem solid transparent;
  border-bottom: 0.625rem solid #FDD835;
  border-radius: 50%;
  animation: ${loaderAnimation} 2s infinite linear;
`;

export const PanContainer = styled.div`
  display: flex;
  width: 100%;
  animation: ${panAnimation} 2s infinite;
`;

export const Pan = styled.div`
  width: 60%;
  height: 1.25rem;
  background: linear-gradient(#3949AB, #5C6BC0);
  border-bottom-right-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
`;

export const Handle = styled.div`
  width: 40%;
  height: 0.625em;
  background: linear-gradient(#3949AB, #5C6BC0);
  border-top-right-radius: 0.625em;
  border-top-left-radius: 0.625em;
  border-bottom-right-radius: 0.625em;
  border-bottom-left-radius: 0.625em;
`;

export const Shadow = styled.div`
  position: relative;
  top: 15%;
  left: 15%;
  width: 30%;
  height: 0.5rem;
  background: lightgray;
  border-radius: 1.25rem;
  animation: ${shadowAnimation} 2s infinite;
`;