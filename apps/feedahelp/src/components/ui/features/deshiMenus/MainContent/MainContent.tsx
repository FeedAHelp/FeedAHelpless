import React, { useState, useEffect } from "react";
import { Styled } from "./MainContent.styled";
import { fetchDeshiMenusMainContent } from "~/utils/cms/fetchDeshiMenusMainContent";

const MainContent = ({ mainContents }: any) => {
  const [DeshiMenusMainContents, setDeshiMenusMainContent] = useState([]);

  const getDeshiMenusMainContent = async () => {
    try {
      const DeshiMenusMainContents = await fetchDeshiMenusMainContent();
      setDeshiMenusMainContent(DeshiMenusMainContents);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDeshiMenusMainContent();
  }, []);

  console.log(mainContents, DeshiMenusMainContents);

  return (
    <Styled.MainContent>
      <Styled.ListWithIconsUL>
        {/*  {DeshiMenusMainContents.map((item, index) => {
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
        })}  */}
      </Styled.ListWithIconsUL>
    </Styled.MainContent>
  );
};

export default MainContent;
