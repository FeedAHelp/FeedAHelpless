import React from "react";
import { Styled } from "./TopHeaderContent.styled";
import DeshiSocial from "./DeshiSocial";
import DeshiMenuCaptions from "./DeshiMenuCaption";

const TopHeaderContent = () => {
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
      <DeshiSocial />
    </Styled.Header>
  );
};

export default TopHeaderContent;
