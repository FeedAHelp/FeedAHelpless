import styled from "styled-components";
import Image from "next/image";

const BoxShadow = () => `
  box-shadow: -0.0625rem -0.0625rem 0.125rem rgba(255, 255, 255, 0.25),
      inset 0.125rem 0.125rem 0.3125rem rgba(255, 255, 255, 0.25),
      0.5rem 1.875rem 1.875rem rgba(0, 0, 0, 0.4), inset -0.125rem -0.125rem 0.3125rem rgba(0, 0, 0, 0.4);
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
  DeshiShareIcon,
  InsideContainer,
  ButtonIngredient,
  ButtonDirections,
  InfoContent,
  InfoIcon,
};
