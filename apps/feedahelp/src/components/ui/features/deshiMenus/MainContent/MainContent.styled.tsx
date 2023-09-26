import styled from "@emotion/styled";
import { DeshiShareIcon } from "../DeshiMenus.styled";

const MainContent = styled.div`
  position: absolute;
  overflow: auto;
  height: 9.6875rem;
  width: 100%;
`;

const ListWithIconsUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  padding: 0.625rem;
`;

const ListWithIconsLI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.625rem;
  margin: 0.3125rem;
  line-height: 1;
  font-family: "Arial";
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colors.neutrals.gray98});
  border-right: 0.0625rem dashed #ccc;
  border-radius: 0.1875rem;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.16);
  position: relative;
  transition: all 0.35s ease;
  color:  ${({ theme }) => theme.colors.neutrals.full_black});
`;

const TextSpan = styled.span`
  font-size: 0.8rem;
  display: flex;
`;
const TextInformation = styled.div`
  font-size: 0.8rem;
`;

export const Styled = {
  DeshiShareIcon,
  MainContent,
  ListWithIconsUL,
  ListWithIconsLI,
  TextSpan,
  TextInformation,
};
