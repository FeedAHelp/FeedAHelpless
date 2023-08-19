import styled from "@emotion/styled";

const Background = styled.div`
  background-image: url('/assets/hero-cover.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  padding: 1rem; /* Adjust the padding as needed */

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 33.3333%; /* Adjust the width as needed */
    background: linear-gradient(to right, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0));
  }
`;


export const Styled = {
   Background
  };
