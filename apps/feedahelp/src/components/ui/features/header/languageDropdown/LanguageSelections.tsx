import React, { useState } from "react";
import language from "./language.json";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Image from "next/image";
import { Styled } from "./LanguageSelection.styled";

const LanguageSelections: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-center`}
      >
        <Styled.HoverImage>
          <Image
            src="/icons/languageIcon.png"
            height={42}
            width={42}
            alt="language-icon"
          />
        </Styled.HoverImage>

        {isOpen ? (
          <ArrowDropUp className="opacity-50" />
        ) : (
          <ArrowDropDown className="opacity-50" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-20 flex w-28 flex-col items-start rounded-lg bg-gray-300 p-2">
          {language.map((item, i) => (
            <div key={i} className="dropDownOption">
              <h3 className="font-bold">{item?.language}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelections;
