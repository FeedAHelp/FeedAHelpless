import styled from "@emotion/styled";

const HoverImage = styled.div`
  &:hover {
    img {
      -webkit-filter: invert(30%) sepia(96%) saturate(4000%) hue-rotate(20deg);
      filter: invert(30%) sepia(96%) saturate(4000%) hue-rotate(20deg);
    }
  }
  &:active {
    img {
      -webkit-filter: invert(10%) sepia(96%) saturate(4000%) hue-rotate(20deg);
      filter: invert(10%) sepia(96%) saturate(4000%) hue-rotate(20deg);
    }
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 9rem;
  top: 5rem;
  padding: 0.5rem;
  color: #fff;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const LanguageOption = styled.div`
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.2s ease;

  &.selected {
    background-color: #202124;
  }
`;

export const Styled = {
  HoverImage,
  DropDownContainer,
  LanguageOption,
};
