import dynamic from "next/dynamic";
import { Styled } from "./Header.styled";
import { memo } from "react";
import { burgerMenuState } from "../../../../../../../packages/ui/components/utils/atoms/burgerMenuState";
import { useRecoilState } from "recoil";
import Navbar from "./navbar/Navbar";
import Head from "next/head";

const Logo = dynamic(import("./logo/Logo"));
const MemoLogo = memo(Logo);

export const Header = () => {
  return (
    <Styled.Header>
      <Head>
        <title>
         FeedAhelp :: Feed one at a time. v1.0 
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MemoLogo />
      <Navbar />
    </Styled.Header>
  );
};
