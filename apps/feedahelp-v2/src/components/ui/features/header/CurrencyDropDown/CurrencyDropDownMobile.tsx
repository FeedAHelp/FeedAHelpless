import { useState } from "react";
import data from "./currency.json";
import Image from "next/image";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Styled } from "./CurrencyDropDown.styled";

const CurrencyDropDownMobile = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <Styled.HoverImage>
        <div
          className="flex cursor-pointer select-none items-center justify-center gap-5 p-2 text-[1.5rem] font-bold text-white hover:bg-[rgba(40,42,54,0.36)]"
          onClick={() => setIsShowing(!isShowing)}
        >
          <Image
            src="/icons/currencyIcon.png"
            height={32}
            width={32}
            alt="currency-icon"
          />
          <p>Currency</p>
          {isShowing ? <ArrowDropUp /> : <ArrowDropDown />}
        </div>
      </Styled.HoverImage>
      {isShowing &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex cursor-pointer select-none items-center justify-center gap-4 p-1 text-white hover:bg-[rgba(40,42,54,0.25)]">
                <span
                  className="text-2xl font-bold text-[#F05114]"
                  dangerouslySetInnerHTML={{ __html: item?.currencyIconHTML }}
                />
                <p>{item?.currency}</p>
              </div>
              <hr className="opacity-10" />
            </div>
          );
        })}
    </div>
  );
};

export default CurrencyDropDownMobile;
