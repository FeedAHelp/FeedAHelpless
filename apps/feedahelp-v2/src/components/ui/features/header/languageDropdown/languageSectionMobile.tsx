import { useState } from "react";
import language from "./language.json";
import Image from "next/image";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Styled } from "./LanguageSelection.styled";

const LanguageSelectionsMobile = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="mb-5">
      <Styled.HoverImage>
        <div
          className="flex cursor-pointer select-none items-center justify-center gap-5 p-2 text-[1.5rem] font-bold text-white hover:bg-[rgba(40,42,54,0.36)]"
          onClick={() => setIsShowing(!isShowing)}
        >
          <Image
            src="/icons/languageIcon.png"
            height={32}
            width={32}
            alt="languageIcon-icon"
          />
          <p>Language</p>
          {isShowing ? <ArrowDropUp /> : <ArrowDropDown />}
        </div>
      </Styled.HoverImage>
      {isShowing &&
        language.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex cursor-pointer select-none items-center justify-center gap-4 p-1 text-white hover:bg-[rgba(40,42,54,0.23)]">
                <Image
                  src={getFlagSrc(item.country)}
                  width={30}
                  height={5}
                  alt={item.altFlagImg}
                />
                <p>{item?.country}</p>
              </div>
              <hr className="opacity-10" />
            </div>
          );
        })}
    </div>
  );
};

export default LanguageSelectionsMobile;

function getFlagSrc(countryCode: string) {
  return /^[A-Z]{2}$/.test(countryCode)
    ? `https://www.countryflagicons.com/SHINY/64/${countryCode.toUpperCase()}.png`
    : "";
}
