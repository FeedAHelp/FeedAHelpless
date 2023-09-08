import Image from "next/image";
import { Styled } from "./Logo.styled";
import Link from "next/link";

const Logo = () => {
  return (
    <Styled.Logo>
      <Styled.Container>
        <Link href="/">
          <Image
            src={"/static/images/feedahelp/logo.png"}
            width={220}
            height={70}
            alt={"feedahelpLogo"}
          />
        </Link>
      </Styled.Container>
    </Styled.Logo>
  );
};

export default Logo;
