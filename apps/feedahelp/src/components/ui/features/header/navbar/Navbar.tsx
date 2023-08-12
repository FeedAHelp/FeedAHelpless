import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import { GenericButton } from "../../../../../../../../packages/ui/components/elements/Buttons/Button";
import router from "next/router";

const NewNav = () => {
  return (
    <Styled.Navbar>
      <div className="nav-end">
        <div className="right-container">
          <Styled.Avatar
            avatar={"/assets/avatar.png"}
            className="img-rotate-button"
          >
            <img className="outer ring" alt="" />
            <img className="center ring" alt="" />
            <img className="inner ring" alt="" />
          </Styled.Avatar>
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
