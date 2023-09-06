
import styled, { keyframes } from "styled-components";


// Define the keyframes for the animation
const spinSlow = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const  RotatingDiv = styled.div`
/* Apply the animation */
animation: ${spinSlow} 5s linear infinite;
`;
