import styled from "@emotion/styled";
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
  border-radius: 10px;
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
`;

const activeItemBorder = styled.div`
  pointer-events: none;
  position: absolute;
  transition: top 0.5s ease, left 0.5s ease;
`;

const LogoImage = styled(Image)`
  @media (max-width: 568px) {
    width: 30%;
  }
`;

const ImageContentDesktop = styled.div`
  font-size: 18px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 568px) {
    display: none;
  }
`;

const ImageContentMobile = styled.div`
  font-size: 8px;
  color: white;
  text-shadow: 0.063rem 0.063rem 0.313 black, 0rem 0rem 0.125rem black;
  padding-top: 110px;
  padding-left: 10px;
  padding-right: 10px;
  display: none;

  @media (max-width: 568px) {
    display: block;
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
  ImageContentDesktop,
  ImageContentMobile,
};
