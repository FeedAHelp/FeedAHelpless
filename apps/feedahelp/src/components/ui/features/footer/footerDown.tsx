import React from "react";
import Image from "next/image";
import { Styled } from "./footer.styled";
import FooterSocial from "./FooterSocial";
import GenericLink from "~/ui/components/elements/GenericLink/GenericLink";

const footerDown = () => {
  return (
    <div className="grid justify-center pt-6 lg:justify-between">
      <div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
        <Styled.DownFooter>
          &copy; {new Date().getFullYear()} FeedAHelp. All rights reserved.
        </Styled.DownFooter>
        <GenericLink color="gray" fontSize="0.8rem" href="#">
          Privacy policy
        </GenericLink>
        <GenericLink color="gray" fontSize="0.8rem" href="#">
          Terms of service
        </GenericLink>
      </div>
      <FooterSocial />
    </div>
  );
};

export default footerDown;
