import styled from "styled-components";
import Image from "next/image";

interface SocialMediaProps {
  disbaleImage: boolean;
}

const SocialIcon = styled(Image)<SocialMediaProps>`
  transition: 0.5s;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%)
    contrast(100%);

  &:hover {
    filter: ${(props) =>
      props.disbaleImage
        ? ""
        : `invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)`};
  }
  cursor: ${(props) => (props.disbaleImage ? "not-allowed" : "pointer")};
`;

const AutoGridUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-rows: 3.75rem;
  grid-gap: 2em;
  counter-reset: item;
`;

const AutoGridLi = styled.button`
  border-radius: 5px;
  background: #e3edf7;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
      -0.5px -0.5px 0px rgba(255, 255, 255, 1),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(0.5em);
  }
`;

export const Styled = {
  SocialIcon,
  AutoGridUl,
  AutoGridLi,
};
