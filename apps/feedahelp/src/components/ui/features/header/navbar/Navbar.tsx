import { useRef, useState } from "react";
import { Styled } from "./Navbar.styled";
import SimpleList from "./navLists/SimpleList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import {
  authData,
  discoverData,
  appListData,
  dataWithIcons,
  cardListdata,
} from "./navLists/navList.data";
import CardList from "./navLists/CardList";
import IconTextList from "./navLists/IconTextList";
import { GenericButton } from "../../../../../../../../packages/ui/components/elements/Buttons/Button";
import { useSession } from "next-auth/react";
import router from "next/router";

const NewNav = () => {
  const { data: session } = useSession();

  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<{
    tabIndex: number;
    tabOneStatus: boolean;
    tabTwoStatus: boolean;
    profileStatus?: boolean;
  } | null>(null);
  const [showTab, setShowTab] = useState<boolean>(false);

  return (
    <Styled.Navbar>
      <div className="nav-end">
        <div className="right-container">
          <form className="search" role="search">
            <input type="search" name="search" placeholder="Search" />
            <i className="bx bx-search" aria-hidden="true" />
          </form>
          {session?.user?.name ? (
            <div
              ref={ref}
              onClick={() =>
                setActiveTab({
                  tabIndex: 2,
                  profileStatus: !activeTab?.profileStatus,
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
              onClick={() =>
                setActiveTab({
                  tabIndex: 2,
                  profileStatus: !activeTab?.profileStatus,
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
          onClick={() => setShowTab(!showTab)}
        >
          <MenuIcon className="text-4xl" />
        </button>
      </div>
    </Styled.Navbar>
  );
};

export default NewNav;
