import React, { useRef, useState } from "react";
import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "~/ui/components/elements/Modal/GenericModal";
import { LogoutButton } from "~/ui/components/elements/LogoutButton/LogoutButton";
import { useSession, signOut } from "next-auth/react";
import LanguageSelections from "~/components/ui/features/header/languageDropdown/LanguageSelections";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";
import LoginRegister from "../../userAccess/LoginRegister";
import { useLoadingContext } from "~/ui/components/contexts/LoadingContext";
import { motion, AnimatePresence } from "framer-motion";
import CurrencyDropDownMobile from "../CurrencyDropDown/CurrencyDropDownMobile";
import LanguageSelectionsMobile from "../languageDropdown/languageSectionMobile";

const NewNav = () => {
  const { data: session } = useSession();
  const { isLoading, setIsLoading } = useLoadingContext();
  const [isSideBar, setIsSideBar] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const ref = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (): void => {
    setModalOpen(false);
  };

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Styled.Navbar>
      <div className="nav-end">
        <div className="right-container">
          <div>
            <button onClick={toggleLoading}>Spinner</button>
          </div>
          {session?.user.image ? (
            <>
              <LogoutButton handleLogout={handleLogout} />
              <Styled.Avatar
                avatar={session.user.image}
                ref={ref}
                className="img-rotate-button"
              >
                <div className="img outer ring" />
                <div className="img center ring" />
                <div className="img inner ring" />
              </Styled.Avatar>
            </>
          ) : session?.user?.name ? (
            <div
              ref={ref}
              className=" cursor-pointer rounded-full bg-orange-600"
            >
              <span className="flex h-10 w-10  items-center justify-center text-lg font-bold text-white">
                {session?.user?.name.slice(0, 1)}
              </span>
            </div>
          ) : (
            <Styled.Avatar
              avatar={"/assets/avatar.png"}
              ref={ref}
              className="img-rotate-button"
              onClick={() => setModalOpen(true)}
            >
              <div className="img outer ring" />
              <div className="img center ring" />
              <div className="img inner ring" />
            </Styled.Avatar>
          )}
        </div>
        <button
          id="hamburger"
          aria-label="hamburger"
          aria-haspopup="true"
          aria-expanded="false"
          className="md:hidden"
          onClick={() => setIsSideBar(!isSideBar)}
        >
          <MenuIcon className="text-4xl" />
        </button>
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <div className="overflow-hidden">
            <LoginRegister />
          </div>
        </Modal>
      </div>
      <div className="hidden md:block">
        <LanguageSelections />
      </div>
      <div className="hidden md:block">
        <CurrencyDropDown />
      </div>

      <AnimatePresence>
        {isSideBar && (
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="absolute left-0 top-[5rem] h-screen w-full bg-[rgba(60,60,60,0.86)] block md:hidden"
          >
            <LanguageSelectionsMobile />
            <CurrencyDropDownMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </Styled.Navbar>
  );
};

export default NewNav;
