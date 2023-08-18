import React from "react";
import Image from "next/image";
import { Styled } from "./footer.styled";
import FooterSocial from "./FooterSocial";

const footerDown = () => {
  return (
    <div className="grid justify-center pt-6 lg:justify-between">
      <div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
        <Styled.DownFooter>
          &copy; {new Date().getFullYear()} FeedAHelp. All rights reserved.
        </Styled.DownFooter>
        <a rel="noopener noreferrer" href="#">
          <Styled.DownFooter>Privacy policy</Styled.DownFooter>
        </a>
        <a rel="noopener noreferrer" href="#">
          <Styled.DownFooter>Terms of service</Styled.DownFooter>
        </a>
      </div>
      <FooterSocial />
    </div>
  );
};

export default footerDown;
