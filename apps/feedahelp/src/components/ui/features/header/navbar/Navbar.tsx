import { useRef, useState } from "react";
import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import { GenericButton } from "../../../../../../../../packages/ui/components/elements/Buttons/Button";
import { useSession } from "next-auth/react";
import router from "next/router";

const NewNav = () => {
  return (
    <Styled.Navbar>
      <div className="nav-end">
        <div className="right-container">
          <form className="search" role="search">
            <input type="search" name="search" placeholder="Search" />
            <i className="bx bx-search" aria-hidden="true" />
          </form>
          <Styled.Avatar
            avatar={"/assets/avatar.png"}
            className="img-rotate-button"
          >
            <img className="outer ring" />
            <img className="center ring" />
            <img className="inner ring" />
          </Styled.Avatar>
          <GenericButton
            variant="shadow"
            backgroundcolor="yellow"
            shadowcolor="gray"
            activebgcolor="rgba(224, 138, 30, 1)"
            textcolor="black"
            width="auto"
            onClick={() => router.push("/game-customization")}
          >
            Generic
          </GenericButton>
        </div>
        <button
          id="hamburger"
          aria-label="hamburger"
          aria-haspopup="true"
          aria-expanded="false"
          className="hamburger"
        >
          <MenuIcon className="text-4xl" />
        </button>
      </div>
    </Styled.Navbar>
  );
};

export default NewNav;
