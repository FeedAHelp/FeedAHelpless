import styled from "@emotion/styled";

const bgCover = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 12.5rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

export const Styled = {
  bgCover,
};
