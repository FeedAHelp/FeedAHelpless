import React, { useState, useEffect, useRef } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Image from "next/image";
import { Styled } from "./CurrencyDropDown.styled";
import currency from "./currency.json";

const CurrencyDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (currency: string) => {
    setSelectedItem(currency);
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
            src="/icons/currencyIcon.png"
            height={32}
            width={32}
            alt="currency-icon"
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
          {currency.map((item, i) => (
            <Styled.CurrencyOption
              key={i}
              className={`dropDownOption ${selectedItem === item.currency ? "selected" : ""
                }`}
              onClick={() => handleItemClick(item.currency)}
            >
              <span
                className="mr-2"
                dangerouslySetInnerHTML={{ __html: item?.currencyIconHTML }}
              />
              <h3 className="font-bold">{item?.currency}</h3>
            </Styled.CurrencyOption>
          ))}
        </Styled.DropDownContainer>
      )}
    </div>
  );
};

export default CurrencyDropDown;
