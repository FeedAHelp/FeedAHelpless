import { useRef, useState } from "react";
import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "../../../../../../../../packages/ui/components/elements/Modal/GenericModal";
import { useSession } from "next-auth/react";
import LanguageSelections from "~/components/ui/features/header/languageDropdown/LanguageSelections";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";
import Login from "../../userAccess/login/Login";

const NewNav = () => {
  const { data: session } = useSession();

  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<{
    tabIndex: number;
    tabOneStatus: boolean;
    tabTwoStatus: boolean;
    profileStatus?: boolean;
  } | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <Styled.Navbar>
      <div className="nav-end" onClick={() => setModalOpen(true)}>
        <div className="right-container">
          {session?.user.image ? (
            <Styled.Avatar
              avatar={session.user.image}
              ref={ref}
              onMouseEnter={() =>
                setActiveTab({
                  tabIndex: 2,
                  profileStatus: true,
                  tabOneStatus: false,
                  tabTwoStatus: false,
                })
              }
              className="img-rotate-button"
            >
              <img className="outer ring" />
              <img className="center ring" />
              <img className="inner ring" />
            </Styled.Avatar>
          ) : session?.user?.name ? (
            <div
              ref={ref}
              onMouseEnter={() =>
                setActiveTab({
                  tabIndex: 2,
                  profileStatus: true,
                  tabOneStatus: false,
                  tabTwoStatus: false,
                })
              }
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
              onMouseEnter={() =>
                setActiveTab({
                  tabIndex: 2,
                  profileStatus: true,
                  tabOneStatus: false,
                  tabTwoStatus: false,
                })
              }
              className="img-rotate-button"
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
          className="hamburger"
        >
          <MenuIcon className="text-4xl" />
        </button>
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <Login />
        </Modal>
      </div>
      <LanguageSelections />
      <CurrencyDropDown />
    </Styled.Navbar>
  );
};

export default NewNav;
