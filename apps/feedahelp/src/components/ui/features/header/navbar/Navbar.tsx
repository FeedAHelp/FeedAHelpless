import { useState } from "react";
import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import { GenericButton } from "../../../../../../../../packages/ui/components/elements/Buttons/Button";
import Modal from "../../../../../../../../packages/ui/components/elements/Modal/GenericModal";
import router from "next/router";
import TranslationDropdown from "~/components/translationDropdown/TranslationDropdown";
import { useState } from "react";

const NewNav = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (): void => {
    setModalOpen(false);
  };

  const openModal = (): void => {
    setModalOpen(true);
  };

  return (
    <Styled.Navbar>
      <div className="nav-end" onClick={() => setModalOpen(true)}>
        <div className="right-container">
          <Styled.Avatar
            avatar={"/assets/avatar.png"}
            className="img-rotate-button"
          >
            <img className="outer ring" alt="" />
            <img className="center ring" alt="" />
            <img className="inner ring" alt="" />
          </Styled.Avatar>
         
          {/* Dropdown  langunage list*/}
          <TranslationDropdown/>
        
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
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <h2>This is a modal!</h2>
          <p>Modal content goes here.</p>
          <button onClick={closeModal}>Close Modal</button>
        </Modal>
      </div>
    </Styled.Navbar>
  );
};

export default NewNav;
