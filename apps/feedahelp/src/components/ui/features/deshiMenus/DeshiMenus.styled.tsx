import styled from "styled-components";
import Image from "next/image";

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
  padding-top: 20px;
  padding-left: 20px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    inset 2px 2px 5px rgba(255, 255, 255, 0.25),
    8px 30px 30px rgba(0, 0, 0, 0.4), inset -2px -2px 5px rgba(0, 0, 0, 0.4);
`;

const TitleSpan = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 400;

  b {
    font-weight: 900;
  }
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
`;

const Rating = styled.div`
  padding-top: 7px;
  font-size: 12px;
`;

const Price = styled.div`
  position: absolute;
  width: 160px;
  height: 45px;
  right: -12px;
  top: 55px;
  line-height: 45px;
  font-size: 22px;
  background: #fa792e;
  text-align: center;
  font-weight: 300;
  color: #fff;
  border-radius: 7px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.25),
    inset 2px 2px 5px rgba(255, 255, 255, 0.25),
    8px 30px 30px rgba(0, 0, 0, 0.4), inset -2px -2px 5px rgba(0, 0, 0, 0.4);

  b {
    padding-left: 5px;
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

export const Styled = {
  Container,
  Header,
  Logo,
  Title,
  Body,
  TitleSpan,
  Badge,
  Caption,
  Rating,
  Price,
  DeshiShareIcon,
  DeshiUl,
  DeshiLi,
};
