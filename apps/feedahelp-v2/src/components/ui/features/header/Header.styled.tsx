import styled from "@emotion/styled";
import { size } from "~/ui/components/foundations/breakpoints/device";

interface HeaderProps {
  scrollBlur: boolean;
}

const Header = styled.section<HeaderProps>`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.7rem;
  height: 5rem;
  backdrop-filter: ${(props) =>
    props.scrollBlur ? "blur(0.475rem)" : "blur(0rem)"};
  -webkit-backdrop-filter: ${(props) =>
    props.scrollBlur ? "blur(0.475rem)" : "blur(0rem)"};
  transition: 0.5s;
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
    background: ${({ theme }) => theme.colors.primary.green});
    margin: 0.35rem 0;
  }
`;

export const Styled = {
  Header,
  NavBar,
  Hamburger,
};
