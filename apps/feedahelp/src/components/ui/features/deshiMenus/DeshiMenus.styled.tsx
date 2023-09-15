import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { devices } from "~/utils/devices";

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

const ButtonHover = () => `
  display: flex;
  background: #e3edf7;
  padding: 1.4em;
  border-radius: 0.625rem;
  box-shadow: 0.375rem 0.375rem 0.625rem -0.0625rem rgba(0, 0, 0, 0.15),
    -0.375rem -0.375rem 0.625rem -0.0625rem rgba(255, 255, 255, 0.7);
  border: 0.0625rem solid rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    transform: translateY(0.5em);
  }
  `;

const Container = styled.div`
  width: 17.5rem;
  height: 31.25rem;
  margin: 2.5rem auto;
  border-radius: 0.625rem;
`;

const Logo = styled.img`
  width: 3.4375rem;
  margin-top: 1.5625rem;
  transition: transform 0.9s;
`;

const Title = styled.div`
  font-size: 0.625rem;
  color: #fff;
  transition: transform 0.5s;
  transform: scale(1);
  font-weight: 500;
  font-size: 1.1875rem;
  padding-top: 1.25rem;
`;

const Body = styled.div`
  position: relative;
  z-index: 0;
  background: #fff;
  height: 15rem;
  border-radius: 0.625rem;
  padding-top: 0.875rem;
  padding-left: 0.025rem;
  padding-right: 0.625rem;
  ${BoxShadow}
`;

const Badge = styled.span`
  position: relative;
  background: red;
  color: #fff;
  font-size: 0.5rem;
  padding: 0.1875rem 0.625rem;
  top: -0.1875rem;
  border-radius: 0.1875rem;
  margin-left: 0.4375rem;
`;

const Caption = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 0.3125rem;
  padding: 0.3125rem;
`;

const Rating = styled.div`
  padding-top: 0.4375rem;
  font-size: 0.75rem;
`;

const Price = styled.div`
  width: 100%;
  font-size: 0.9375rem;
  background: #fa792e;
  text-align: center;
  font-weight: 300;
  color: #fff;
  border-radius: 0.4375rem;
  ${BoxShadow}
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

const DeshiUl = styled.ul`
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  bottom: -0.9375rem;
  padding-left: 0.625rem;
`;

const DeshiLi = styled.li`
  background: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  ${BoxShadow}
`;

const pulseAuxiliarLow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(179, 62, 150, 1);
  }
  100% {
    box-shadow: 0 0 0 0.3125rem transparent;
  }
`;

const Highlight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${iconwidth};
  height: ${iconheight};

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${iconwidth};
    height: ${iconheight};
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border: none;
    transition: all 0.3s;
    z-index: 2;
    border-radius: 50%;
    background-image: url("/assets/Rice.png");
  }

  &::after {
    border: 0.0625rem solid #fff;
    animation: ${pulseAuxiliarLow} 1s ease ${iterationCount};
  }
`;

const StatusTag = styled.div`
  position: relative;
  width: auto;
  display: inline-flex;
  height: ${height};
  padding: 0 0.625rem 0 0.3125rem;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  border-top-left-radius: 0.8125rem;
  border-bottom-left-radius: 0.8125rem;
  border-top-right-radius: 0.8125rem;
  border-bottom-right-radius: 0.8125rem;
`;

const StatusTagText = styled.span`
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex: 0 0 auto;
  font-family: Graphik, Helvetica, sans-serif;
  font-size: ${fontsize};
  line-height: ${fontsize};
  font-weight: ${fontweight};
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover > ${Logo} {
    transform: scale(6) translate(1.5625rem, 0.625rem);
  }

  &:hover > ${Title} {
    transition: transform 0.5s;
    transform: scale(0);
  }

  &:hover > ${Caption} {
    transition: transform 0.5s;
    transform: scale(0);
  }
`;

const Header = styled.div`
  position: relative;
  z-index: 1;
  height: 11.25rem;
  border-radius: 0.625rem;
  background-color: #fa792e;
  background-image: linear-gradient(left top, #fa792e 17%, #bf212f 100%);
  cursor: pointer;
  padding-top: 0.0625rem;
  ${BoxShadow}
`;

const DeshiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625rem, 21.875rem));
  grid-gap: 0.9375rem 0.9375rem;
  justify-content: center;
  align-items: baseline;
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 3.125rem;
  opacity: 0;
  transform: scale(0.5) translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;
  curson: pointer;
`;

const InfoIcon = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  opacity: 1;
  cursor: pointer;
`;

const InsideContainer = styled.div`
  z-index: 9;
  background: #92879b;
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: -2.5rem;
  right: 0rem;
  border-radius: 0 0 12.5rem 12.5rem;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;
  ${BoxShadow}

  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0.625rem;
    height: 80%;

    ${InfoIcon} {
      opacity: 0;
      right: 1.5625rem;
      top: 1.5625rem;
      transition: all 0.3s;
    }

    ${InfoContent} {
      opacity: 1;
      transform: scale(1.5) translateY(0);
    }
  }
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

const MainContent = styled.div`
  position: absolute;
  overflow: auto;
  height: 9.6875rem;
  width: 100%;
`;

const ListWithIconsUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  padding: 0.625rem;
`;

const ListWithIconsLI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.625rem;
  margin: 0.3125rem;
  line-height: 1;
  font-family: "Arial";
  font-size: 1.25rem;
  background-color: #f1f1f1;
  border-right: 0.0625rem dashed #ccc;
  border-radius: 0.1875rem;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.16);
  position: relative;
  transition: all 0.35s ease;
  color: #000;
`;

const TextSpan = styled.span`
  font-size: 0.8rem;
  display: flex;
`;
const TextInformation = styled.div`
  font-size: 0.8rem;
`;

const ButtonIngredient = styled.button`
  ${ButtonHover}

  img {
    transition: transform 0.5s;
    object-fit: contain;
  }

  &:hover img {
    transform: scale(2);
  }
`;
const ButtonDirections = styled.button`
  ${ButtonHover}
`;

export const Styled = {
  Container,
  Header,
  Heading,
  Logo,
  Title,
  Body,
  Badge,
  Caption,
  Rating,
  Price,
  DeshiShareIcon,
  DeshiUl,
  DeshiLi,
  Highlight,
  StatusTag,
  StatusTagText,
  pulseAuxiliarLow,
  DeshiGrid,
  InsideContainer,
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
  MainContent,
  ListWithIconsUL,
  ListWithIconsLI,
  TextSpan,
  TextInformation,
  ButtonIngredient,
  ButtonDirections,
  InfoContent,
  InfoIcon,
};
