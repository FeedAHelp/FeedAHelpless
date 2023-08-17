import styled from 'styled-components';

const HoverImage = styled.div`
  &:hover {
    img {
      -webkit-filter: invert(10%) sepia(100%) saturate(4000%) hue-rotate(-35deg) grayscale(.350);
      filter: invert(10%) sepia(100%) saturate(4000%) hue-rotate(-35deg) grayscale(.350);
    }
  }
  &:active {
    img {
        -webkit-filter: invert(10%) sepia(100%) saturate(4000%) hue-rotate(-30deg) grayscale(.550);
        filter: invert(10%) sepia(100%) saturate(4000%) hue-rotate(-30deg) grayscale(.550);
    }
  }
`;

export const Styled = {
    HoverImage
  };
