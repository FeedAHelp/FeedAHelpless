import styled from "@emotion/styled";

const rot_degree = "-90deg";
const rot_offset = "5%";
const rot_speed = "0.4s";
const rot_btn_blur_o = "1.25rem";
const rot_btn_blur_c = "0.625rem";
const rot_btn_blur_i = "0.125rem";
const rot_btn_greyscale_o = "60%";
const rot_btn_greyscale_c = "45%";
const rot_btn_greyscale_i = "15%";

type AvatarProps = {
  avatar: string;
};
const Avatar = styled.a<AvatarProps>`
  width: 3rem;
  height: 3rem;

  text-decoration: none;
  color: white;
  cursor: pointer;

  img {
    display: inline-block;
    width: 3rem;
    height: auto;
    object-fit: cover;
  }
  &.img-rotate-button {
    width: 3rem;
    aspect-ratio: 1;
    max-width: min(5rem, 7rem);
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0rem 0.313rem 10.313rem 0.188rem hsl(0, 0%, 75.3%);
    &:hover {
      .ring {
        transform: rotate(0deg);
        filter: blur(0) grayscale(0%);
      }
      box-shadow: 0.125rem 0.438rem 1.25rem 0.313rem hsl(0, 0%, 70.3%);
      scale: 1.01;
    }
    &:active {
      &:not(:focus) {
        box-shadow: 0rem 0.125rem 0.625rem 0.125rem hsl(0, 0%, 55.3%);
        scale: 0.99;
      }
    }
    &:focus {
      box-shadow: 0rem 0.125rem 0.625rem 0.125rem hsl(0, 0%, 55.3%);
      scale: 0.99;
    }
  }
  .ring {
    position: absolute;
    inset: 0;
    transition: transform ${rot_speed} ease-in-out,
      filter ${rot_speed} ease-in-out;
    content: url("${({ avatar }) => avatar}");
  }
  .ring.outer {
    z-index: 2;
    clip-path: circle(50% at center);
    transform: rotate(${rot_degree});
    filter: blur(${rot_btn_blur_o}) grayscale(${rot_btn_greyscale_o});
  }
  .ring.center {
    z-index: 3;
    clip-path: circle(calc(50% - ${rot_offset}) at center);
    transform: rotate(calc(${rot_degree} / 2));
    filter: blur(${rot_btn_blur_c}) grayscale(${rot_btn_greyscale_c});
  }
  .ring.inner {
    z-index: 4;
    clip-path: circle(calc(50% - ${rot_offset} * 2) at center);
    filter: blur(${rot_btn_blur_i}) grayscale(${rot_btn_greyscale_i});
  }
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
  height: 5.625rem;
  padding: 1.2rem 3rem;
  width: 100%;
  @media (max-width: 68.75rem) {
    padding: 1.2rem;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: inherit;
  }

  .btn {
    display: block;
    background-color: #2b72fb;
    color: #ffffff;
    text-align: center;
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.313rem;
  }

  .icon {
    padding: 0.5rem;
    background-color: #eeeeee;
    border-radius: 0.625rem;
  }

  .logo {
    margin-right: 1.5rem;
  }

  .nav-menu {
    border-bottom: 0.063rem solid #eeeeee;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .menu {
    position: relative;
    background-color: #ffffff;

    @media (min-width: 68.75rem) {
      background-color: transparent;
    }
  }

  .menu-bar li:first-of-type .dropdown {
    flex-direction: initial;
    min-width: 30rem;
  }

  .menu-bar li:first-of-type ul:nth-of-type(1) {
    border-right: 0.063rem solid #eeeeee;
  }

  .menu-bar li:nth-of-type(n + 2) ul:nth-of-type(1) {
    border-bottom: 0.063rem solid #eeeeee;
  }

  .menu-bar .dropdown-link-title {
    font-weight: 600;
  }

  .menu-bar .nav-link {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.038rem;
    padding: 0.3rem;
    min-width: 3.75rem;
    margin: 0 0.6rem;
  }

  .menu-bar .nav-link:hover,
  .dropdown-link:hover {
    color: #2b72fb;
  }

  .nav-start,
  .nav-end,
  .menu-bar,
  .right-container,
  .right-container .search {
    display: flex;
    align-items: center;
  }
  .nav-end {
    margin-left: auto;
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    min-width: 14.375rem;
    background-color: #ffffff;
    border-radius: 0.625rem;
    position: absolute;
    top: 2.25rem;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.97) translateX(-0.313rem);
    transition: 0.1s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.05) 0rem 0.375rem 20.25rem 0rem,
      rgba(0, 0, 0, 0.08) 0rem 0rem 0rem 0.063rem;
  }

  .dropdown.active {
    visibility: visible;
    opacity: 1;
    transform: scale(1) translateX(0.313rem);
  }

  .dropdown ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.2rem;
    font-size: 0.95rem;
  }

  .dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.15rem;
  }

  .dropdown-link {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
    border-radius: 0.438rem;
    transition: 0.1s ease-in-out;
  }

  .dropdown-link p {
    font-size: 0.8rem;
    color: #636363;
  }

  .right-container {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .right-container .search {
    position: relative;
  }

  .right-container img {
    border-radius: 50%;
  }

  .search input {
    background-color: #f4f4f4;
    border: none;
    border-radius: 0.375rem;
    padding: 0.7rem;
    padding-left: 2.4rem;
    font-size: 1rem;
    width: 100%;
    border: 0.063rem solid #eeeeee;
  }

  .search .bx-search {
    position: absolute;
    left: 0.625rem;
    top: 50%;
    font-size: 1.3rem;
    transform: translateY(-50%);
    opacity: 0.6;
  }

  .hamburger {
    display: none;
    padding: 0.1rem;
    margin-left: 1rem;
    color: white;
  }

  @media (max-width: 68.75rem) {
    .hamburger {
      display: block;
    }

    .menu {
      display: none;
      position: absolute;
      top: 5.438rem;
      left: 0;
      min-height: 100vh;
      width: 100vw;
    }

    .menu-bar li:first-of-type ul:nth-of-type(1) {
      border-right: none;
      border-bottom: 0.063rem solid #eeeeee;
    }

    .dropdown {
      display: none;
      min-width: 100%;
      border: none !important;
      border-radius: 0.313rem;
      position: static;
      top: 0;
      left: 0;
      visibility: visible;
      opacity: 1;
      transform: none;
      box-shadow: none;
    }

    .menu.show,
    .dropdown.active {
      display: block;
    }

    .dropdown ul {
      padding-left: 0.3rem;
    }

    .menu-bar {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      row-gap: 1rem;
      padding: 1rem;
    }

    .menu-bar .nav-link {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-weight: 600;
      font-size: 1.2rem;
      margin: 0;
    }

    .menu-bar li:first-of-type .dropdown {
      min-width: 100%;
    }

    .menu-bar > li:not(:last-child) {
      padding-bottom: 0.5rem;
      border-bottom: 0.063rem solid #eeeeee;
    }
  }

  @media (max-width: 37.5rem) {
    .right-container {
      display: none;
    }
  }
`;

export const Styled = {
  Navbar,
  Avatar,
};
