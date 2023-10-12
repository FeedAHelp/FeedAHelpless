import styled from "@emotion/styled";

const IngGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-rows: 3.75rem;
  grid-gap: 2em;
  counter-reset: item;
`;

const IngGridItem = styled.div`
  border-radius: 5px;
  position: relative;
  background-position: center;
  background-size: cover;

  /* overflow: hidden; */
`;

export const Styled = {
  IngGrid,
  IngGridItem,
};
