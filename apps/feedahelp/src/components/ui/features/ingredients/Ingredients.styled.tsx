import styled from "@emotion/styled";

const IngGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-rows: 60px;
  grid-gap: 2em;
  counter-reset: item;
`;

const IngGridItem = styled.div`
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background-position: center;
  background-size: cover;
`;

export const Styled = {
  IngGrid,
  IngGridItem,
};
