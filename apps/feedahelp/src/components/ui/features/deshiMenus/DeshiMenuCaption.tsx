import React from "react";
import { Styled } from "./DeshiMenus.styled";

const DeshiMenuCaptions = () => {
  return (
    <div>
        <Styled.Caption className="grid grid-cols-3 gap-1">
            <Styled.StatusTag>
                <Styled.Highlight />
                <Styled.StatusTagText>
                    Rice
                </Styled.StatusTagText>
            </Styled.StatusTag>
        </Styled.Caption>
    </div>
  );
};

export default DeshiMenuCaptions;
