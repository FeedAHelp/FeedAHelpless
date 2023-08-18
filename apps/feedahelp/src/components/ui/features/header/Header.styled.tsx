import styled from "@emotion/styled";
import { size } from "../../../../../../../packages/ui/components/foundations/breakpoints/device";

const Header = styled.section`
  background: rgba(255, 255, 255, 0.5);
  background: transparent;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 5rem;
`;

const NavBar = styled.nav`
  display: none;
  @media (min-width: ${size.lg}) {
    display: block;
  }
`;

const Hamburger = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: ${size.lg}) {
    display: none;
  }
  span {
    display: block;
    width: 1.5rem;
    height: 0.135rem;
    background: #fff;
    margin: 0.35rem 0;
  }
`;

export const Styled = {
  Header,
  NavBar,
  Hamburger,
};
