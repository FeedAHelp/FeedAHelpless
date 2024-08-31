import styled from "@emotion/styled";

const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  background-color: white;
  border-radius: 0.9375rem;
  border-style: solid;
  border-color: black;
  overflow: hidden;
`;

const PaymentForms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  transition: 0.5s;
  width: 23.75rem;
  height: 12.5rem;
  border-radius: 0.9375rem;
  background-color: black;
  background-image: url("./static/images/payment/visa.png");
  -webkit-box-shadow: 0.625rem 0.625rem 0.3125rem -0.375rem rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0.625rem 0.625rem 0.3125rem -0.375rem rgba(0, 0, 0, 0.75);
  box-shadow: 0.625rem 0.625rem 0.3125rem -0.375rem rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  margin-top: 20px;
`;

const CardPosition = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 6.25rem;
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
`;

const LogoSim = styled.img`
  width: 6.25rem;
  height: 5rem;
  position: absolute;
  left: -0.625rem;
  bottom: -8.4375rem;
`;

const Expirition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
`;

const CardNumber = styled.p`
  position: absolute;
  left: 1.25rem;
  bottom: -9.375rem;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  font-family: "Russo One", sans-serif;
  font-size: 1.25rem;
`;

const CardName = styled.p`
  display: flex;
  position: absolute;
  max-width: 7.5rem;
  left: 1.25rem;
  bottom: -11.5625rem;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  font-family: "Farrington-7B-Qiqi";
  overflow: hidden;
`;

const CardSurname = styled.p`
  display: flex;
  position: absolute;
  left: 5rem;
  bottom: -11.5625rem;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  font-family: "Farrington-7B-Qiqi";
  overflow: hidden;
`;

const Cardmm = styled.p`
  display: flex;
  position: absolute;
  max-width: 1.25rem;
  left: 13.75rem;
  bottom: -11.5625rem;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  font-family: "Russo One", sans-serif;
  overflow: hidden;
  font-size: 0.875rem;
`;

const Cardyy = styled.p`
  display: flex;
  position: absolute;
  max-width: 1.25rem;
  left: 11.875rem;
  bottom: -11.5625rem;
  color: white;
  flex-direction: column;
  width: fit-content;
  font-family: "Russo One", sans-serif;
  overflow: hidden;
  font-size: 0.875rem;
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.625rem;

  input {
    background-color: #f3f3f3;
    padding: 0 0.625rem;
    margin-top: 0.375rem;
    min-width: 10em;
    height: 2.3125rem;
    font-family: "Open Sans", sans-serif;
    border: 0;
    border-radius: 0.25rem;
    transition: all 250ms ease-in-out;
  }
`;

const SecondDiv = styled.div`
  input {
    background-color: #f3f3f3;
    margin-top: 0.375rem;
    padding: 0 0.625rem;
    min-width: 30em;
    height: 2.3125rem;
    font-family: "Open Sans", sans-serif;
    border: 0;
    border-radius: 0.25rem;
    transition: all 250ms ease-in-out;
  }
`;

const ThirdDiv = styled.div`
  background-color: #f3f3f3;
  display: flex;
  margin-top: 0.375rem;
  flex-direction: row;
  padding-left: 0.625rem;
  align-items: center;
  width: 16em;
  height: 2.3125rem;
  font-family: "Open Sans", sans-serif;
  border: 0;
  border-radius: 0.25rem;
  transition: all 250ms ease-in-out;
  color: grey;
  font-size: 0.875rem;
`;

const ForthDiv = styled.div`
  background-color: #f3f3f3;
  display: flex;
  margin-top: 0.375rem;
  margin-left: 0.25rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.625rem;
  align-items: center;
  width: 11em;
  height: 2.3125rem;
  font-family: "Open Sans", sans-serif;
  border: 0;
  border-radius: 0.25rem;
  transition: all 250ms ease-in-out;
  color: grey;
  font-size: 0.875rem;
`;

const SelectItem = styled.select`
  background-color: #f3f3f3;
  border: 0.0625rem solid transparent;
  border-color: transparent transparent rgba(255, 255, 255, 0.1) transparent;

  &:focus {
    outline: none;
  }
`;

const CVVInput = styled.input`
  width: 3.125rem;
  background-color: #f3f3f3;
  border: 0;
  font-family: "Open Sans", sans-serif;

  &:focus {
    outline: none;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.625rem;
`;

const PickACard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.625rem;

  input {
    background-color: #f3f3f3;
    padding: 0 0.625rem;
    margin-top: 0.375rem;
    min-width: 10em;
    height: 2.3125rem;
    font-family: "Open Sans", sans-serif;
    border: 0;
    border-radius: 0.25rem;
    transition: all 250ms ease-in-out;
  }
`;

const CTAButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 9.375rem;
  height: 3.125rem;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 1.875rem;
  border: 0.0625rem solid #8f9092;
  transition: all 0.2s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 0.0625rem #fff;

  &:hover {
    box-shadow: 0 0.25rem 0.1875rem 0.0625rem #fcfcfc, 0 0.375rem 0.5rem #d6d7d9,
      0 -0.25rem 0.25rem #cecfd1, 0 -0.375rem 0.25rem #fefefe,
      inset 0 0 0.1875rem 0.1875rem #cecfd1;
  }

  &:active {
    box-shadow: 0 0.25rem 0.1875rem 0.0625rem #fcfcfc, 0 0.375rem 0.5rem #d6d7d9,
      0 -0.25rem 0.25rem #cecfd1, 0 -0.375rem 0.25rem #fefefe,
      inset 0 0 0.3125rem 0.1875rem #999, inset 0 0 1.875rem #aaa;
  }

  &:focus {
    box-shadow: 0 0.25rem 0.1875rem 0.0625rem #fcfcfc, 0 0.375rem 0.5rem #d6d7d9,
      0 -0.25rem 0.25rem #cecfd1, 0 -0.375rem 0.25rem #fefefe,
      inset 0 0 0.3125rem 0.1875rem #999, inset 0 0 1.875rem #aaa;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Styled = {
  PaymentContainer,
  CTAWrapper,
  PaymentForms,
  Card,
  CardPosition,
  CardDetails,
  CardInfo,
  Logo,
  LogoSim,
  Expirition,
  CardNumber,
  CardName,
  CardSurname,
  Cardmm,
  Cardyy,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
  ForthDiv,
  SelectItem,
  CVVInput,
  PickACard,
  CTAButton,
};
