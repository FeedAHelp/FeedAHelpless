import styled, { keyframes } from "styled-components";
import Image from "next/image";

const iconwidth = "1.25rem";
const iconheight = "1.25rem";
const height = "1.5rem";
const fontsize = "0.75rem";
const fontweight = "500";
const iterationCount = "infinite";

const BoxShadow = () => `
  box-shadow: -0.0625rem -0.0625rem 0.125rem rgba(255, 255, 255, 0.25),
      inset 0.125rem 0.125rem 0.3125rem rgba(255, 255, 255, 0.25),
      0.5rem 1.875rem 1.875rem rgba(0, 0, 0, 0.4), inset -0.125rem -0.125rem 0.3125rem rgba(0, 0, 0, 0.4);
`;

const DonateHover = () => `
  &:hover ${SliderRange} {
    width: 80%;
    transition: transform 0.5s;
  }

  &:hover ${SliderOutput} {
    opacity: 1;
    transition: transform 0.5s;
  }

  &:hover ${DonateAmount} {
    left: 8.75rem;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1.5em;
  }

  &:hover ${DonateButton} {
    right: 0;
    transform: scale(1);
  }

  &:hover ${QtyInput} {
    margin: 0;
  }
`;

const DeshiShareIcon = styled(Image)`
  transition: 0.5s;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%)
    contrast(100%);
  &:hover {
    filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
    transform: scale(1.5);
  }
`;

const DeshiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625rem, 21.875rem));
  grid-gap: 0.9375rem 0.9375rem;
  justify-content: center;
  align-items: baseline;
`;

const BoxDown = styled.div`
  width: 100%;
  height: 2.5rem;
  position: relative;
  overflow: hidden;
`;

const Cart = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;

const DonateAmount = styled.div`
  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -webkit-transition-delay: 100ms;
  -o-transition-delay: 100ms;
  transition-delay: 100ms;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: #252525;
`;

const DonateButton = styled.span`
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-delay: 100ms;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.9375rem;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transform: scale(0);
`;

const QtyInput = styled.div`
  position: relative;
  color: #000;
  background: $white;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 3.125rem;
`;

const Slider = styled.div``;
const SliderOutput = styled.div`
  font-size: 0.625rem;
  opacity: 0;
`;

const SliderRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 0%;
  background: #fa792e;
  outline: none;
  border-radius: 1.25rem;
  cursor: pointer;
`;

const ElWrapper = styled.div`
  width: 16.25rem;
  padding: 0.625rem;
  margin: 10.0625rem auto;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.5s;

  ${DonateHover}
`;

const DonateButtonIcon = styled.div`
  ackground: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  z-index: 99;
  ${BoxShadow}
`;

export const Styled = {
  DeshiShareIcon,
  DeshiGrid,
  ElWrapper,
  BoxDown,
  Cart,
  DonateAmount,
  DonateButton,
  QtyInput,
  DonateButtonIcon,
  Slider,
  SliderOutput,
  SliderRange,
};
