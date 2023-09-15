import styled from "styled-components";
import Image from "next/image";

export const BoxShadow = () => `
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

const DeshiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625rem, 21.875rem));
  grid-gap: 0.9375rem 0.9375rem;
  justify-content: center;
  align-items: baseline;
`;

export const Styled = {
  Container,
  Body,
  DeshiShareIcon,
  DeshiUl,
  DeshiLi,
  DeshiGrid,
};
