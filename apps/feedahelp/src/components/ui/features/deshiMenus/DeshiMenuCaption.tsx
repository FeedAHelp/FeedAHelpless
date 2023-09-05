import React from "react";
import { Styled } from "./DeshiMenus.styled";
import Image from "next/image";
import { items } from "./data";

type DeshiMenuCaptionsProps = {
  imgSrc: string;
  imgAlt: string;
};

const DeshiMenuCaptions = () => {
  return (
    <div>
      <Styled.Caption>
        {items.map((item, index) => (
          <Styled.StatusTag key={index}>
            <Styled.Highlight>
              <Image
                src={"/assets/Rice.png"}
                alt={"Rice"}
                width={20}
                height={20}
              />
            </Styled.Highlight>
            <Styled.StatusTagText>Rice</Styled.StatusTagText>
          </Styled.StatusTag>
        ))}
      </Styled.Caption>
    </div>
  );
};

export default DeshiMenuCaptions;
