import styled from "@emotion/styled";
import CountUp from "react-countup";

const CardWrapper = styled.div`
  display: block;
  top: 0rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutrals.gray_black};
  border-radius: 0.25rem;
  text-decoration: none;
  min-width: 2.2rem;
  z-index: 0;
  overflow: hidden;
  border: 0.0625rem solid ${({ theme }) => theme.colors.neutrals.gray_black};

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0rem 0.25rem 0.5rem
      ${({ theme }) => theme.colors.neutrals.full_white};
    top: -0.25rem;
    border: 0.0625rem solid ${({ theme }) => theme.colors.neutrals.full_white};
    background-color: ${({ theme }) => theme.colors.neutrals.full_white};
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 2.2rem;
    right: -1rem;
    height: 1.875rem;
    width: 0rem;
    border-radius: 0.625rem;
    transform: scale(2);
    transition: 0.5s ease-out;
  }

  &:hover:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 2.2rem;
    right: -1rem;
    background: ${({ theme }) => theme.colors.neutrals.full_white};
    height: 1.875rem;
    width: 3.75rem;
    border-radius: 0.625rem;
  }

  &:hover:before {
    transform: scale(2.15);
  }
`;

const CardContain = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const CardHeadingH6 = styled.h6`
  color: ${({ theme }) => theme.colors.neutrals.full_white};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.05em;
  background-color: ${({ theme }) => theme.colors.neutrals.light_black};
`;

const CardCounter = styled(CountUp)`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.tertiary.lightBlue},
    ${({ theme }) => theme.colors.tertiary.lightBrown}
  );
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 2rem;
  font-weight: 800;
  color: transparent;
`;

const CardMonthlyInc = styled.div`
  margin-left: 0.5rem;
  display: inline-block;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.tertiary.lightBlue};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.tertiary.lightGreen};
`;

export const Styled = {
  CardWrapper,
  CardContain,
  CardHeadingH6,
  CardCounter,
  CardMonthlyInc,
};
