import styled from "@emotion/styled";
import CountUp from "react-countup";

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

const CardFAH = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 0.938rem 0.938rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0rem 0.188rem 0.5rem;
    width: inherit;
    text-align: center;
    padding: 0.5rem;
    margin: 1rem;
    background-color: ${({ theme }) => theme.colors.neutrals.gray_black};
    color: ${({ theme }) => theme.colors.neutrals.full_white};
    .img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.tertiary.lightBlue},
        ${({ theme }) => theme.colors.tertiary.lightBrown}
      );
      padding: 0.313rem;
      margin-top: -2.813rem;
    }
    h2 {
      margin: 0.625rem 0;
    }

    &:hover {
      & > .cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        height: 4.375rem;
      }
      & > .link {
        width: 40%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }
`;

export const Styled = {
  CardCounter,
  CardFAH,
};
