import React, { useState, useEffect, useRef } from "react";
import language from "./language.json";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Image from "next/image";
import { Styled } from "./LanguageSelection.styled";

const LanguageSelections: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (language: string) => {
    setSelectedItem(language);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <Styled.DropDownContainer ref={dropdownRef}>
          {language.map((item, i) => (
            <Styled.LanguageOption
              key={i}
              className={`dropDownOption ${
                selectedItem === item.language ? "selected" : ""
              }`}
              onClick={() => handleItemClick(item.language)}
            >
              <Image width={30} height={5} className="mr-3" src={getFlagSrc(item.country)} alt={item.altFlagImg} />
              <h3 className="font-bold">{item.language}</h3>
            </Styled.LanguageOption>
          ))}
        </Styled.DropDownContainer>
      )}
    </div>
  );
};

export default LanguageSelections;

function getFlagSrc(countryCode: string) {
  return /^[A-Z]{2}$/.test(countryCode)
    ? `https://www.countryflagicons.com/SHINY/64/${countryCode.toUpperCase()}.png`
    : "";
}
