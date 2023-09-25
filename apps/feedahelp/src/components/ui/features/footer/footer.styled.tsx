import styled from "@emotion/styled";

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.lightPink};
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const DownFooter = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.tertiary.lightBrown};
`;

const FooterButton = styled.button`
  height: 3.125rem;
  width: 9.375rem;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  margin-top: 1.25rem;

  &:hover {
    box-shadow: 0.0313rem 0.0313rem 9.375rem
      ${({ theme }) => theme.colors.tertiary.lightBrown};
  }

  &::after {
    content: "Donate Now";
    height: 3.125rem;
    width: 9.375rem;
    background-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.tertiary.lightBrown};
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(3.125rem);
    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    border-radius: 0.625rem;
  }

  &::before {
    content: "Donate";
    height: 3.125rem;
    width: 9.375rem;
    background: ${({ theme }) => theme.colors.primary.blue};
    color: ${({ theme }) => theme.colors.neutrals.full_white};
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(0) scale(1.2);
    font-size: 20.8px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    border-radius: 0.625rem;
  }

  &:hover::after {
    transform: translateY(0);
    opacity: 1;
  }
`;

const FooterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.full_white};
  border-color: rgba(209, 213, 219, 0.5);
  padding-left: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Styled = {
  FooterWrapper,
  InputField,
  DownFooter,
  FooterButton,
};
