import styled, { keyframes } from "styled-components";
import Image from "next/image";

const iconwidth = '12px'
const iconheight = '12px'
const height = '24px'
const fontsize = '12px'
const fontweight = '500'
const iterationCount = 'infinite'

const Container = styled.div`
  width: 280px;
  height: 500px;
  margin: 40px auto;
  border-radius: 10px;
`;

const Logo = styled.img`
  width: 55px;
  margin-left: 25px;
  margin-top: 25px;
  transition: transform 0.9s;
`;

const Title = styled.div`
  padding: 5px 25px;
  padding-right: 80px;
  font-size: 10px;
  color: #fff;
  transition: transform 0.5s;
  transform: scale(1);

  h2 {
    font-weight: 500;
    font-size: 19px;
  }
`;

const Header = styled.div`
  position: relative;
  z-index: 1;
  height: 180px;
  border-radius: 10px;
  background-color: #fa792e;
  background-image: linear-gradient(left top, #fa792e 17%, #bf212f 100%);
  cursor: pointer;
  padding-top: 1px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    inset 2px 20px 5px rgba(255, 255, 255, 0.25),
    8px 30px 30px rgba(0, 0, 0, 0.4), inset -2px -2px 5px rgba(0, 0, 0, 0.4);

  &:hover > ${Logo} {
    transform: scale(6) translate(25px, 10px);
  }

  &:hover > ${Title} {
    transition: transform 0.5s;
    transform: scale(0);
  }
`;

const Body = styled.div`
  position: relative;
  z-index: 0;
  background: #fff;
  height: 240px;
  border-radius: 10px;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    inset 2px 2px 5px rgba(255, 255, 255, 0.25),
    8px 30px 30px rgba(0, 0, 0, 0.4), inset -2px -2px 5px rgba(0, 0, 0, 0.4);
`;


const Badge = styled.span`
  position: relative;
  background: red;
  color: #fff;
  font-size: 8px;
  padding: 3px 10px;
  top: -3px;
  border-radius: 3px;
  margin-left: 7px;
`;

const Caption = styled.span`
  font-size: 9px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  align-items: center;
  justify-content: start;
`;

const Rating = styled.div`
  padding-top: 7px;
  font-size: 12px;
`;

const Price = styled.div`
  width: 100%;
  font-size: 15px;
  background: #fa792e;
  text-align: center;
  font-weight: 300;
  color: #fff;
  border-radius: 7px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    inset 2px 2px 5px rgba(255, 255, 255, 0.25),
    8px 30px 30px rgba(0, 0, 0, 0.4), inset -2px -2px 5px rgba(0, 0, 0, 0.4);

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
  gap: 10px;
  bottom: -15px;
  padding-left: 10px;
`;

const DeshiLi = styled.li`
  background: #fff;
  border-radius: 50%;
  padding: 8px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    inset 2px 2px 5px rgba(255, 255, 255, 0.25),
    8px 30px 30px rgba(0, 0, 0, 0.4), inset -2px -2px 5px rgba(0, 0, 0, 0.4);
`;

const pulseAuxiliarLow = keyframes`
  0% {
    box-shadow: 0px 0px 0px 0px rgba(179, 62, 150, 1);
  }
  100% {
    box-shadow: 0px 0px 0px 5px transparent;
  }
`;

const Highlight = styled.div`
  position: relative;
  display: inline-flex;
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
  }

  &::after {
    background: rgba(179, 62, 150, 1);
    border: 1px solid rgba(179, 62, 150, 1);
    animation: ${pulseAuxiliarLow} 1s ease ${iterationCount};
  }
`;

const StatusTag = styled.div`
  position: relative;
  width: auto;
  display: inline-flex;
  height: ${height};
  padding: 0 10px 0 5px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
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

export const Styled = {
  Container,
  Header,
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
  pulseAuxiliarLow
};
