import React, { useEffect, useRef, useState } from "react";
import { Styled } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "~/ui/components/elements/Modal/GenericModal";
import { LogoutButton } from "~/ui/components/elements/LogoutButton/LogoutButton";
import { useSession, signOut } from "next-auth/react";
import LanguageSelections from "~/components/ui/features/header/languageDropdown/LanguageSelections";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";
import LoginRegister from "../../userAccess/LoginRegister";
import { motion, AnimatePresence } from "framer-motion";
import CurrencyDropDownMobile from "../CurrencyDropDown/CurrencyDropDownMobile";
import LanguageSelectionsMobile from "../languageDropdown/languageSectionMobile";
import Payment from "../../payments/Payment";
import CustomLoader from "~/ui/components/elements/GenericLoader/CustomLoader";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const NewNav = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isSideBar, setIsSideBar] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("footer");
  const closeModal1 = (): void => {
    setModalOpen1(false);
  };

  const ref = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (): void => {
    router.push({
      pathname: router.pathname,
    });
    setModalOpen(false);
  };

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signOut({
      callbackUrl: "/",
    });
  };

  const getAvater = () => {
    const Avater = session?.user.image;
    return Avater === "feedahelpAvater"
      ? `/assets/${session?.user.image}.png`
      : session?.user.image;
  };

  const handleAvatar = () => {
    router.push({
      pathname: router.pathname,
      query: { login: true },
    });
  };

  useEffect(() => {
    if (router.query.login === "true") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [router.query]);

  return (
    <Styled.Navbar>
      <div className="nav-end pr-1 ">
        <div>
          {session?.user ? (
            <Styled.DonateButton
              onClick={() => {
                setModalOpen1(true);
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                }, 5000);
              }}
              type="button"
            >
              <Modal isOpen={modalOpen1} closeModal={closeModal1}>
                <div className="payment-modal-dimention">
                  <CustomLoader isLoading={isLoading}>
                    <Payment />
                  </CustomLoader>
                </div>
              </Modal>
            </Styled.DonateButton>
          ) : (
            <Styled.DonateButton className="hidden" />
          )}
        </div>
        <div className="ms-5 hidden md:block">
          <LanguageSelections />
        </div>
        <div className="mx-3 hidden md:block">
          <CurrencyDropDown />
        </div>
        <AnimatePresence>
          {isSideBar && (
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{ x: -1000 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              className="absolute left-0 top-[5rem] block h-screen w-full bg-[rgba(60,60,60,0.86)] md:hidden"
            >
              <LanguageSelectionsMobile />
              <CurrencyDropDownMobile />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="right-container">
          {session?.user.image ? (
            <>
              <LogoutButton handleLogout={handleLogout} />
              <Styled.Avatar
                avatar={getAvater}
                ref={ref}
                className="img-rotate-button"
              >
                <div className="img outer ring" />
                <div className="img center ring" />
                <div className="img inner ring" />
              </Styled.Avatar>
            </>
          ) : session?.user?.name ? (
            <>
              <LogoutButton handleLogout={handleLogout} />
              <div
                ref={ref}
                className=" cursor-pointer rounded-full bg-orange-600"
              >
                <span className="flex h-10 w-10  items-center justify-center text-lg font-bold text-white">
                  {session?.user?.name.slice(0, 1)}
                </span>
              </div>
            </>
          ) : (
            <Styled.Avatar
              avatar={"/assets/avatar.png"}
              ref={ref}
              className="img-rotate-button"
              onClick={handleAvatar}
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
    </Styled.Navbar>
  );
};

export default NewNav;
