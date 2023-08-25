import styled from "@emotion/styled";
import Image from "next/image";

const ulLists = styled.ul`
  position: relative;
  list-style: none;
  display: grid;
  padding: 1em;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1em;
`;

const liLists = styled.li`
  position: relative;
  display: grid;
  place-content: center;
  overflow: hidden;
  font-size: 2vmin;
  color: rgba(0, 0, 0, 0);
  transition: color 0.25 ease, text-shadow 0.25 ease;
  transition-delay: 0.25s;
  cursor: pointer;

  &:nth-child(1) {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  &:nth-child(2) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
  &:nth-child(3) {
    grid-row: 1/2;
    grid-column: 3/4;
  }
  &:nth-child(4) {
    grid-row: 1/2;
    grid-column: 4/5;
  }
  &:nth-child(5) {
    grid-row: 1/2;
    grid-column: 5/6;
  }
  &:nth-child(6) {
    grid-row: 2/3;
    grid-column: 5/6;
  }
  &:nth-child(7) {
    grid-row: 3/4;
    grid-column: 5/6;
  }
  &:nth-child(8) {
    grid-row: 4/5;
    grid-column: 5/6;
  }
  &:nth-child(9) {
    grid-row: 5/6;
    grid-column: 5/6;
  }
  &:nth-child(10) {
    grid-row: 5/6;
    grid-column: 4/5;
  }
  &:nth-child(11) {
    grid-row: 5/6;
    grid-column: 3/4;
  }
  &:nth-child(12) {
    grid-row: 5/6;
    grid-column: 2/3;
  }
  &:nth-child(13) {
    grid-row: 5/6;
    grid-column: 1/2;
  }
  &:nth-child(14) {
    grid-row: 4/5;
    grid-column: 1/2;
  }
  &:nth-child(15) {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  &:nth-child(16) {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  &:active {
    color: white;
    text-shadow: 1px 1px 5px black, 0px 0px 2px black;
  }

  &:active img {
    filter: grayscale(0) blur(0px) brightness(1);
  }
`;

const Images = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: grayscale(1) blur(2px) brightness(0.3);
  -webkit-transition: -webkit-filter 500ms ease;
  transition: filter 0.25 ease;
  transition-delay: 0.25s;
`;

const displayContainer = styled.div`
  position: relative;
  grid-row: 2/-2 !important;
  grid-column: 2/-2 !important;
  overflow: hidden;
  border: 5px solid rgb(243, 158, 48);
  scroll-behavior: smooth;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const activeItemBorder = styled.div`
  pointer-events: none;
  position: fixed;
  border: 5px solid rgb(243, 158, 48);
  transition: top 0.5s ease, left 0.5s ease;
`;

export const Styled = {
  ulLists,
  liLists,
  Images,
  displayContainer,
  activeItemBorder,
};
