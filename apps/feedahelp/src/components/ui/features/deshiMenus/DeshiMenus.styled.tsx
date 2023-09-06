import styled, { keyframes } from "styled-components";
import Image from "next/image";
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
  padding-top: 1.875rem;
  padding-left: 0.625rem;
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
  DeshiGrid
};