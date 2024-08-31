import styled from "styled-components";
import { BoxShadow } from "../DeshiMenus.styled";
import { baseTheme } from "~/ui/components/foundations/theming/theming";
import Image from "next/image";

const deshiMenuImage = styled.img`
  width: 3.2375rem;
  margin-top: 1.5625rem;
  transition: transform 0.9s;
`;

const Title = styled.div`
  background: #08b;
  background-image: radial-gradient(transparent 30%, rgba(0, 0, 0, 0.5));
  border: 0 solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  color: ${baseTheme.colors.neutrals.gray_white};
  font-size: 18px;
  font-weight: bold;
  position: relative;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2);
  padding: 0.2rem;
  padding-left: 10px;
  padding-right: 10px;
  ${BoxShadow}

  h2 {
    border-width: 1px 1px 2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 4px 40px;
    position: absolute;
    right: -14px;
    top: 12px;

    &:after {
      border-width: 7px;
      border-style: solid;
      border-color: #134 transparent transparent #134;
      bottom: -15px;
      content: "";
      position: absolute;
      right: -1px;
    }
  }

  &:before,
  &:after {
    bottom: 26px;
    box-shadow: 0 28px 8px rgba(0, 0, 0, 0.5);
    content: "";
    height: 28px;
    position: absolute;
    width: 48%;
    z-index: -1;
  }

  &:before {
    left: 2%;
    transform: rotate(-3deg);
  }

  &:after {
    right: 2%;
    transform: rotate(3deg);
  }
`;

const Caption = styled.div`
  color: ${baseTheme.colors.primary.blue};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 0.3125rem;
  padding: 0.3125rem;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;

  &:hover > ${deshiMenuImage} {
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
  background-color: ${baseTheme.colors.primary.green};
  cursor: pointer;
  ${BoxShadow}
`;

const MenuRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 72px;
  height: 48px;
  padding: 70px 24px 0px 25px;

  h2 {
    display: flex;
    vertical-align: middle;
    font-size: 1em;
    color: ${baseTheme.colors.neutrals.full_black};
    padding: 0px 4px;
  }
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 50%;
  transform: translate(30%, -50%);
  filter: blur(0.8px);
  z-index: -1;
`;

export const Styled = {
  Header,
  Heading,
  deshiMenuImage,
  Title,
  MenuRating,
  BackgroundImage,
};
