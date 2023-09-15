import styled, { keyframes } from "styled-components";

const BoxShadow = () => `
  box-shadow: -0.0625rem -0.0625rem 0.125rem rgba(255, 255, 255, 0.25),
      inset 0.125rem 0.125rem 0.3125rem rgba(255, 255, 255, 0.25),
      0.5rem 1.875rem 1.875rem rgba(0, 0, 0, 0.4), inset -0.125rem -0.125rem 0.3125rem rgba(0, 0, 0, 0.4);
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

const Caption = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 0.3125rem;
  padding: 0.3125rem;
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

export const Styled = {
  Header,
  Heading,
  Logo,
  Title,
};
