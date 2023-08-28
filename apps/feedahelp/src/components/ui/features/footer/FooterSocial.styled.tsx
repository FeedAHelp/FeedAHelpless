import styled from "styled-components";
import Image from "next/image";

const SocialIcon = styled(Image)`
  transition: 0.5s;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%)
    contrast(100%);
  &:hover {
    filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
  }
`;

export const Styled = {
  SocialIcon,
};
