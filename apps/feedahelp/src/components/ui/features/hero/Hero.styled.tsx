import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
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
  place-content: center;
  overflow: hidden;
  font-size: 2vmin;
  color: rgba(0, 0, 0, 0);
  transition: color 0.25 ease, text-shadow 0.25 ease;
  transition-delay: 0.25s;
  cursor: pointer;
  padding: 0.1rem;

  color: ${(props) => (props.isActive ? "white" : "")};
  border-radius: 0.625rem;
  text-shadow: ${(props) =>
    props.isActive
      ? "0.063rem 0.063rem 0.313rem black, 0rem 0rem 0.125rem black"
      : ""};
`;

const SideImages = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  filter: grayscale(1) blur(0.125rem) brightness(0.3);
  -webkit-transition: -webkit-filter 500ms ease;
  transition: filter 0.25 ease;
  transition-delay: 0.25s;
`;

const displayContainer = styled.div`
  position: relative;
  height: 70vh;
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
`;

const activeItemBorder = styled.div`
  pointer-events: none;
  position: absolute;
  transition: top 0.5s ease, left 0.5s ease;
`;

const LogoImage = styled(Image)`
  background-color: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(1rem); 
  padding: 1rem; 
  border-radius: 1rem; 
  @media (max-width: 568px) {
    width: 30%;
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
  bottom: -400px;
  font-family: "Raleway", sans-serif;
  font-size: 1vw;
  margin: 0;
  color: transparent;
  text-shadow: 0 0 10px #A9A9A9;
  letter-spacing: 2px;
  padding: 10px;
  border-radius: 20px;
  animation-name: ${focus};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  background-color: rgba(black, 0.5); 
  backdrop-filter: blur(1rem);

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
