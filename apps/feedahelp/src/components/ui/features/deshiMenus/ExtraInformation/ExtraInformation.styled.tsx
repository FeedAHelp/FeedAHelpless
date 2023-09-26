import styled from "@emotion/styled";
import { DeshiShareIcon, BoxShadow } from "../DeshiMenus.styled";

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

const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 3.125rem;
  opacity: 0;
  transform: scale(0.5) translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;
  cursor: pointer;
`;

const InsideContainer = styled.div`
  z-index: 9;
  background: ${({ theme }) => theme.colors.primary.green};
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: -2.5rem;
  right: 0rem;
  border-radius: 0 0 12.5rem 12.5rem;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;
  cursor: pointer;
  ${BoxShadow}

  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0.625rem;
    height: 80%;
  }
`;

const ButtonIngredient = styled.button`
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

  img {
    transition: transform 0.5s;
    object-fit: contain;
  }

  &:hover img {
    transform: scale(2);
  }
`;

const ButtonDirections = styled.button`
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

export const Styled = {
  DeshiShareIcon,
  InsideContainer,
  InfoContent,
  InfoIcon,
  ButtonIngredient,
  ButtonDirections,
  /*   ,
  ,
  ,
  InfoIcon, */
};
