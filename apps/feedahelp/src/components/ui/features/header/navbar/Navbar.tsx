import { useRef, useState } from "react";
import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "~/ui/components/elements/Modal/GenericModal";
import { LogoutButton } from "~/ui/components/elements/LogoutButton/LogoutButton";
import { useSession, signOut } from "next-auth/react";
import LanguageSelections from "~/components/ui/features/header/languageDropdown/LanguageSelections";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";
import LoginRegister from "../../userAccess/LoginRegister";

const NewNav = () => {
  const { data: session } = useSession();

  const ref = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (): void => {
    setModalOpen(false);
  };

  const handleLogout = async (e: any) => {
    e.preventDefault();
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Styled.Navbar>
      <div className="nav-end">
        <div className="right-container">
          {session?.user.image ? (
            <>
              <LogoutButton handleLogout={handleLogout} />
              <Styled.Avatar
                avatar={session.user.image}
                ref={ref}
                className="img-rotate-button"
              >
                <img className="outer ring" />
                <img className="center ring" />
                <img className="inner ring" />
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
              <img className="outer ring" />
              <img className="center ring" />
              <img className="inner ring" />
            </Styled.Avatar>
          )}
        </div>
        <button
          id="hamburger"
          aria-label="hamburger"
          aria-haspopup="true"
          aria-expanded="false"
          className="md:hidden"
        >
          <MenuIcon className="text-4xl" />
        </button>
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <div className="overflow-hidden">
            <LoginRegister />
          </div>
        </Modal>
      </div>
      <LanguageSelections />
      <CurrencyDropDown />
    </Styled.Navbar>
  );
};

export default NewNav;
