import React from "react";
import { signIn } from "next-auth/react";
import { SocialMedias } from "./socialMediaData";
import { Styled } from "./socialMedia.styled";

const SocialMedia = () => {
  const handleSignIn = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    provider: string
  ) => {
    e.preventDefault();
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <Styled.AutoGridUl>
      {SocialMedias.map((item, index) => (
        <Styled.AutoGridLi
          key={index}
          onClick={(e) =>
            !item.disabled ? handleSignIn(e, item.provider) : null
          }
        >
          <Styled.SocialIcon
            src={item.imgSrc}
            width={100}
            height={100}
            alt={item.alt}
            className="h-full object-cover"
            disbaleImage={item.disabled}
          />
        </Styled.AutoGridLi>
      ))}
    </Styled.AutoGridUl>
  );
};

export default SocialMedia;
