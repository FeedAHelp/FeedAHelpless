import React, { useState, useEffect } from "react";
import { Styled } from "./MainContent.styled";
import { fetchDeshiMenusMainContent } from "~/utils/cms/fetchDeshiMenusMainContent";

interface MainContentProps {
  mainContents: Array<any>; // Replace 'any' with the actual type of mainContents
}

interface DeshiMenuContent {
  _id: string;
  imgName: string;
  contentName: string;
  contentValue: string;
}

const MainContent = ({ mainContents }: MainContentProps) => {
  const [DeshiMenusMainContents, setDeshiMenusMainContent] = useState<
    Array<DeshiMenuContent>
  >([]);

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
        {mainContents.map((item, index) => {
          const deshiMenuContent = DeshiMenusMainContents.find(
            (elem) => item._ref === elem._id
          );
          if (deshiMenuContent) {
            return (
              <Styled.ListWithIconsLI key={index}>
                <Styled.DeshiShareIcon
                  src={`/static/images/misc/${deshiMenuContent.imgName}`}
                  width={30}
                  height={30}
                  alt={deshiMenuContent.contentName}
                />
                <Styled.TextSpan>
                  {deshiMenuContent.contentName}
                </Styled.TextSpan>
                <Styled.TextInformation>
                  {deshiMenuContent.contentValue}
                </Styled.TextInformation>
              </Styled.ListWithIconsLI>
            );
          }
        })}
      </Styled.ListWithIconsUL>
    </Styled.MainContent>
  );
};

export default MainContent;
