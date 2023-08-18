import styled from 'styled-components';

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

export const Styled = {
    HoverImage,
  };
