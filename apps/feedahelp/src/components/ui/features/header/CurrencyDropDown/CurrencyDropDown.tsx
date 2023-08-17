import React, { useState } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Image from "next/image";
import { Styled } from "./CurrencyDropDown.styled";

const CurrencyDropDown: React.FC = () => {
  const currency = ["USD", "EUR", "GBP", "JPY", "DKK", "BDT"];

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
            src="/icons/currencyIcon.png"
            height={38}
            width={38}
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
        <div className="absolute top-20 flex w-20 flex-col items-start rounded-lg bg-gray-300 p-2">
          {currency.map((item, i) => (
            <div key={i} className="dropDownOption">
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropDown;
