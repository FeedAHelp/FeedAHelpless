import styled from "@emotion/styled";

interface liListsType {
  isActive: boolean;
}

const ulLists = styled.ul`
  list-style: none;
  display: grid;
  padding: 1em;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1em;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

const liLists = styled.li<liListsType>`
  position: relative;
  display: grid;
  place-content: center;
  overflow: hidden;
  font-size: 2vmin;
  color: rgba(0, 0, 0, 0);
  transition: color 0.25 ease, text-shadow 0.25 ease;
  transition-delay: 0.25s;
  cursor: pointer;
  padding-left:1rem;
  p

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

  @media (max-width: 768px) {
    &:nth-child(1) {
      grid-row: 1/2;
    }
  }

  color: ${(props) => (props.isActive ? "white" : "")};
  text-shadow: ${(props) =>
    props.isActive
      ? "0.063rem 0.063rem 0.313rem black, 0rem 0rem 0.125rem black"
      : ""};
`;

const Images = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: grayscale(1) blur(0.125rem) brightness(0.3);
  -webkit-transition: -webkit-filter 500ms ease;
  transition: filter 0.25 ease;
  transition-delay: 0.25s;
`;

const displayContainer = styled.div`
  position: relative;
  height: 60vh;
  grid-row: 2/-2 !important;
  grid-column: 2/-2 !important;
  overflow: hidden;
  scroll-behavior: smooth;
  border-radius: 0.5rem;
`;

const converImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
`;



const activeItemBorder = styled.div`
  pointer-events: none;
  position: absolute;
  transition: top 0.5s ease, left 0.5s ease;
`;
const Info = styled.div`
  position: fixed;
  font-size: 2vmin;
  transform: translate(0.5em, 0.5em);
  color: white;
  text-shadow: 0.063rem 0.063rem 0.313 black, 0rem 0rem 0.125rem black;
`;

export const Styled = {
  ulLists,
  liLists,
  Images,
  displayContainer,
  activeItemBorder,
  Info,
  converImage,
};
