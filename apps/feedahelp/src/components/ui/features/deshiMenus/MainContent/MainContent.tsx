import React from "react";
import { Styled } from "./MainContent.styled";
import { DeshiMenuInforamtion } from "../data";

const MainContent = () => {
  return (
    <Styled.MainContent>
      <Styled.ListWithIconsUL>
        {DeshiMenuInforamtion.map((item, index) => {
          return (
            <Styled.ListWithIconsLI key={index}>
              <Styled.DeshiShareIcon
                src={item.image}
                width={30}
                height={30}
                alt={item.title}
              />
              <Styled.TextSpan>{item.title}</Styled.TextSpan>
              <Styled.TextInformation>{item.value}</Styled.TextInformation>
            </Styled.ListWithIconsLI>
          );
        })}
      </Styled.ListWithIconsUL>
    </Styled.MainContent>
  );
};

export default MainContent;
