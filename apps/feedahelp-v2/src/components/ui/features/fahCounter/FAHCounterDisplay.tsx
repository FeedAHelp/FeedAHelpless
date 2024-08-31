import React from "react";
import Image from "next/image";
import { urlForThumbnail } from "~/utils/cms/imageProcess";
import { Styled } from "./FAHCounterDisplay.styled";
import { useTranslation } from "next-i18next";

type CounterDisplayProp = {
  title: string;
  imageIcon: string;
  imageAlt: string;
  value: number;
  monthlyIncrease: string;
};

const CounterDisplay = ({
  title,
  imageIcon,
  imageAlt,
  value,
  monthlyIncrease,
}: CounterDisplayProp) => {
  const { t } = useTranslation("sponsor");
  return (
    <Styled.CardFAH>
      <div className="card">
        <div className="img relative">
          <Image
            className="object-contain"
            fill
            src={urlForThumbnail(imageIcon)}
            alt=""
          />
        </div>
        <h2>{t(title)}</h2>
        <div className="cont">
          <Styled.CardCounter end={value} />
          <p>{monthlyIncrease}</p>
        </div>
      </div>
    </Styled.CardFAH>
  );
};

export default CounterDisplay;
