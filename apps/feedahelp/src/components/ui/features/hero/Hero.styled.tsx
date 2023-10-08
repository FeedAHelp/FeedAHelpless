import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";

interface liListsType {
  isActive: boolean;
}

const ulLists = styled.ul`
  list-style: none;
  display: grid;
  padding: 1em;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.5em;
`;

const liLists = styled.li<liListsType>`
  position: relative;
  display: flex;
  overflow: hidden;
  transition: color 0.25 ease, text-shadow 0.25 ease;
  transition-delay: 0.25s;
  cursor: pointer;
  border-radius: 0.625rem;
`;

const SideImages = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  filter: grayscale(1) blur(0.125rem) brightness(0.3);
  -webkit-transition: -webkit-filter 500ms ease;
  transition: filter 0.25 ease;
  transition-delay: 0.25s;
`;

const displayContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  grid-row: 2/-2 !important;
  grid-column: 2/-2 !important;
  overflow: hidden;
  scroll-behavior: smooth;
  border-radius: 0.5rem;

  @media (max-width: 568px) {
    height: 20vh;
  }
`;

const converImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  animation: fadeIn 0.7s ease-in-out;

  @media (min-width: 768px) {
    top: -200px;
  }
`;

const activeItemBorder = styled.div`
  pointer-events: none;
  position: absolute;
  transition: top 0.5s ease, left 0.5s ease;
`;

const LogoImage = styled(Image)`
  position: absolute;
  backdrop-filter: blur(0.8rem);
  border-radius: 0.3rem;
  padding: 0.3rem;
  z-index: 12;

  @media (max-width: 568px) {
    width: 40%;
  }
`;

const texcol = "#fff";

const focus = keyframes`
  0% {
    text-shadow:0 0 30px ${texcol}, 0 20px 50px darken(${texcol}, 30%);
  }
  50% {
    text-shadow:0 0 0 ${texcol};
  }
  75% {
    text-shadow:0 0 0 ${texcol};
  }
  100% {
    text-shadow:0 0 0 ${texcol};
  }
`;

const ImageContentMobile = styled.p`
  position: relative;
  display: flex;
  bottom: -350px;
  font-family: "Raleway", sans-serif;
  font-size: 1vw;
  margin: 0;
  color: transparent;
  text-shadow: 0 0 10px #a9a9a9;
  letter-spacing: 2px;
  border-radius: 20px;
  animation-name: ${focus};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(1rem);
  padding: 10px;
  margin: 20px;

  @media (max-width: 568px) {
    padding: 10px;
    bottom: -115px;
    letter-spacing: 1px;
  }
`;

export const Styled = {
  ulLists,
  liLists,
  SideImages,
  displayContainer,
  activeItemBorder,
  converImage,
  LogoImage,
  ImageContentMobile,
};
