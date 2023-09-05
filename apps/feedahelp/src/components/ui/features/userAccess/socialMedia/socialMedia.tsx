import React from "react";
import { signIn } from "next-auth/react";
import { items } from "./data";
import { Styled } from "./socialMedia.styled";

const SocialMedia = () => {
  const handleSignIn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, provider: string) => {
    e.preventDefault();
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((item, index) => (
        <div
          className="flex cursor-pointer items-center justify-center"
          key={index}
          onClick={(e) => !item.disabled ? handleSignIn(e, item.provider) : null}
        >
          <Styled.SocialIcon
            src={item.imgSrc}
            width={40}
            height={40}
            alt={item.alt}
            className="h-full object-cover"
            disbaleImage={item.disabled}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
