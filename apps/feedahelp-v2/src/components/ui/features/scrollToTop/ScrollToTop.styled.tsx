import styled from "@emotion/styled";

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 1.875rem;
  right: 1.875rem;
  width: 3.125rem;
  height: 3.125rem;
  font-size: 2rem;
  background: #ff9d00;
  border-radius: 100%;
  cursor: pointer;
  z-index: 9999;
  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 1.25rem 0.25rem #e69832a7;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -0.5rem;
  margin-top: -0.75rem;
  height: 0;
  width: 0;
  border: 0.5rem solid transparent;
  border-bottom-color: #ffffff;
`;

export const Styled = {
  ScrollToTopButton,
  Icon,
};
