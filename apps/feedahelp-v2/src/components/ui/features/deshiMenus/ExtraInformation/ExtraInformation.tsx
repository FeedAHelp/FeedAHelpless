import React from "react";
import { Styled } from "./ExtraInformation.styled";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";
import { withBaseIcon } from "react-icons-kit";

const ExtraInformation = () => {
  const SideIconContainer = withBaseIcon({ size: 25 });

  return (
    <Styled.InsideContainer>
      <Styled.InfoIcon>
        <SideIconContainer icon={ic_info_outline} />
      </Styled.InfoIcon>
      <Styled.InfoContent>
        sdfsdsdfdf
        <Styled.ButtonIngredient>
          <Styled.DeshiShareIcon
            src="/static/images/misc/ingred.png"
            width={30}
            height={30}
            alt={"feedahelpLogo"}
          />
        </Styled.ButtonIngredient>
        <Styled.ButtonDirections>
          <Styled.DeshiShareIcon
            src="/static/images/misc/direction.png"
            width={30}
            height={30}
            alt={"feedahelpLogo"}
          />
        </Styled.ButtonDirections>
      </Styled.InfoContent>
    </Styled.InsideContainer>
  );
};

export default ExtraInformation;
