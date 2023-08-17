import { useState } from "react";
import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "../../../../../../../../packages/ui/components/elements/Modal/GenericModal";
import Image from "next/image";
import LanguageSelections from "~/components/ui/features/header/languageDropdown/LanguageSelections";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";


const NewNav = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <Styled.Navbar>
      <div className="nav-end" onClick={() => setModalOpen(true)}>
        <div className="right-container">
          <Styled.Avatar
            avatar={"/assets/avatar.png"}
            className="img-rotate-button"
          >
            <Image src="/assets/avatar.png" height={48} width={48} className="outer ring" alt="" />
            <Image src="/assets/avatar.png" height={48} width={48} className="center ring" alt="" />
            <Image src="/assets/avatar.png" height={48} width={48} className="inner ring" alt="" />
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
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <h2>This is a modal!</h2>
          <p>Modal content goes here.</p>
          <button onClick={closeModal}>Close Modal</button>
        </Modal>
      </div>
      <LanguageSelections/>
      <CurrencyDropDown/>
    </Styled.Navbar>
  );
};

export default NewNav;
