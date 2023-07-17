import styled from "@emotion/styled";

const Logo = styled.div`
  font-weight: 800;
  margin: 0;
  padding: 0 1rem 0 0;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
  .container {
    display: flex;
    height: 100%;
    align-items: center;
  }
  svg {
    display: block;
    font: 10.5em "Montserrat";
    width: 4.125rem;
    height: 3.125rem;
    margin: 0 auto;
    transform-origin: center center;
    transform: translateY(-20%);
  }
  .text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 0.313rem;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
    &:nth-of-type(1) {
      stroke: #4d163d;
      animation-delay: -1;
    }
    &:nth-of-type(2) {
      stroke: #840037;
      animation-delay: -2s;
    }
    &:nth-of-type(3) {
      stroke: #bd0034;
      animation-delay: -3s;
    }
    &:nth-of-type(4) {
      stroke: #bd0034;
      animation-delay: -4s;
    }
    &:nth-of-type(5) {
      stroke: #fdb731;
      animation-delay: -5s;
    }
  }
`;
const LogoTransparent = styled.div`
  font-weight: 800;
  margin: 0;
  padding: 0 1rem 0 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
  .container {
    display: flex;
    height: 100%;
    align-items: center;
  }
  svg {
    display: block;
    font: 10.5em "Montserrat";
    width: 4.125rem;
    height: 3.125rem;
    margin: 0 auto;
    transform-origin: center center;
    transform: translateY(-20%);
  }
  .text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 0.313rem;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
    &:nth-of-type(1) {
      stroke: #4d163d;
      animation-delay: -1;
    }
    &:nth-of-type(2) {
      stroke: #840037;
      animation-delay: -2s;
    }
    &:nth-of-type(3) {
      stroke: #bd0034;
      animation-delay: -3s;
    }
    &:nth-of-type(4) {
      stroke: #bd0034;
      animation-delay: -4s;
    }
    &:nth-of-type(5) {
      stroke: #fdb731;
      animation-delay: -5s;
    }
  }
`;
const LogoText = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #230958;
  margin-left: -1.256rem;
`;

export const Styled = {
  Logo,
  LogoText,
  LogoTransparent,
};
