import React, { useState } from "react";
import { Styled } from "./TopHeaderContent.styled";
import DeshiSocial from "./DeshiSocial";
import DeshiMenuCaptions from "./DeshiMenuCaption";
import { star } from "react-icons-kit/fa/star";
import { withBaseIcon } from "react-icons-kit";

const TopHeaderContent = () => {
  const StarIcon = withBaseIcon({ size: 25 });
  const [rate, setRate] = useState(4.5);

  return (
    <Styled.Header>
      <Styled.Heading>
        <Styled.Logo
          src="https://www.pngkey.com/png/full/366-3662220_hot-and-spicy-chicken-biryani.pnghttps://s5.postimg.cc/j9r8yf9gn/sws1.pnghttps://s5.postimg.cc/wy79025cz/nike_Logo_White.png"
          alt=""
        />
        <Styled.Title>
          Chicken<b>BIRANY</b>
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
