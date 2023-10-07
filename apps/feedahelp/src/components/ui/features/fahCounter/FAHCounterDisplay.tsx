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
    <Styled.CardWrapper>
      <Styled.CardContain>
        <div>
          <Styled.CardHeadingH6>{t(title)}</Styled.CardHeadingH6>
          <Styled.CardCounter end={value} />
          <Styled.CardMonthlyInc>{monthlyIncrease}</Styled.CardMonthlyInc>
        </div>
        <div>
          <span>
            <Image
              src={urlForThumbnail(imageIcon)}
              alt={"imageAlt"}
              width={50}
              height={50}
              className="h-auto w-auto"
            />
          </span>
        </div>
      </Styled.CardContain>
    </Styled.CardWrapper>
  );
};

export default CounterDisplay;
