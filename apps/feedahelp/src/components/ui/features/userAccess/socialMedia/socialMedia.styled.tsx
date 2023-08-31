import styled from "styled-components";
import Image from "next/image";

interface SocialMediaProps{
  disbaleImage:boolean
}

const SocialIcon = styled(Image)<SocialMediaProps>`
  transition: 0.5s;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%)
    contrast(100%);

  &:hover {
    filter: ${(props) => (props.disbaleImage 
                ? "" 
                : `invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)`)};
  }
  cursor: ${(props) => (props.disbaleImage ? "not-allowed" : "pointer")};
`;

export const Styled = {
  SocialIcon,
};
