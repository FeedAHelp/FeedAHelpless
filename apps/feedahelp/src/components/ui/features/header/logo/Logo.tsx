import Image from "next/image";
import { Styled } from "./Logo.styled";
import feedHelpLogo from '../../../../../assets/feedHelpLogo.svg'

const Logo = () => {
  return (
    <Styled.Logo>
      <Image src={feedHelpLogo} alt="feedHelpless logo" />
    </Styled.Logo>
  );
};

export default Logo;
