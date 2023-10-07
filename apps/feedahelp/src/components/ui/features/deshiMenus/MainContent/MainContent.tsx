import React, { useState, useEffect } from "react";
import { Styled } from "./MainContent.styled";
import { fetchDeshiMenusMainContent } from "~/utils/cms/fetchDeshiMenusMainContent";
import { urlForThumbnail } from "~/utils/cms/imageProcess";

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

  return (
    <Styled.MainContent>
      <Styled.ListWithIconsUL>
        {DeshiMenusMainContents.map((item, index) => {
          return (
            <Styled.ListWithIconsLI key={index}>
              <Styled.DeshiShareIcon
                src={`/static/images/misc/` + item.imgName}
                width={30}
                height={30}
                alt={item.contentName}
              />
              <Styled.TextSpan>{item.contentName}</Styled.TextSpan>
              <Styled.TextInformation>
                {item.contentValue}
              </Styled.TextInformation>
            </Styled.ListWithIconsLI>
          );
        })}
      </Styled.ListWithIconsUL>
    </Styled.MainContent>
  );
};

export default MainContent;
