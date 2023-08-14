import Image from "next/image";
import { Styled } from "./Logo.styled";

const Logo = () => {
  return (
    <Styled.Logo>
      <Styled.Container>
        <Image
          src={"/static/images/feedahelp/logo.png"}
          width={300}
          height={100}
          alt={"feedahelpLogo"}
        />
      </Styled.Container>
    </Styled.Logo>
  );
};

export default Logo;
