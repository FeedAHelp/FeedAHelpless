import React, { useState } from "react";
import { Styled } from "./TopHeaderContent.styled";
import DeshiSocial from "./DeshiSocial";
import { star } from "react-icons-kit/fa/star";
import { withBaseIcon } from "react-icons-kit";
import { urlForThumbnail } from "~/utils/cms/imageProcess";

const TopHeaderContent = ({ menuName, images }) => {
  const StarIcon = withBaseIcon({ size: 25 });
  const [rate] = useState(4.5);

  return (
    <Styled.Header>
      <Styled.Heading>
        <Styled.Logo
          src={urlForThumbnail(images.asset._ref)}
          alt={menuName}
        />
        <Styled.Title>
          {menuName}
        </Styled.Title>
        {/* <DeshiMenuCaptions /> */}
      </Styled.Heading>
      <Styled.MenuRating>
        <h2>{rate}</h2>
        <StarIcon icon={star} style={{ color: "#fff" }} />
      </Styled.MenuRating>
      <DeshiSocial />
    </Styled.Header>
  );
};

export default TopHeaderContent;
