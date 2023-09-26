import styled from "@emotion/styled";

const PaymentContainer = styled.div`
    margin-top; 50px
    max-width: 300px;
    height: 450px;
    padding: 10px;
    background-color: white;
    border-radius: 15px;
    border-style: solid;
    border-color: black;
    overflow: hidden;
    -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
`;

const PaymentForms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  margin-top: 10px;
  transition: 0.5s;
  width: 380px;
  height: 200px;
  border-radius: 15px;
  background-color: black;
  background-image: url("./static/images/payment/visa.png");
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
`;

const CardPosition = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 100px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const LogoSim = styled.img`
  width: 100px;
  height: 80px;
  position: absolute;
  left: -10px;
  bottom: -135px;
`;

const Expirition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const CardNumber = styled.p`
  position: absolute;
  left: 20px;
  bottom: -150px;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  font-family: "Russo One", sans-serif;
  font-size: 20px;
`;

const CardName = styled.p`
  display: flex;
  position: absolute;
  max-width: 120px;
  left: 20px;
  bottom: -185px;
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
  left: 80px;
  bottom: -185px;
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
  max-width: 20px;
  left: 220px;
  bottom: -185px;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  font-family: "Russo One", sans-serif;
  overflow: hidden;
  font-size: 14px;
`;

const Cardyy = styled.p`
  display: flex;
  position: absolute;
  max-width: 20px;
  left: 190px;
  bottom: -185px;
  color: white;
  flex-direction: column;
  width: fit-content;
  font-family: "Russo One", sans-serif;
  overflow: hidden;
  font-size: 14px;
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  input {
    background-color: #f3f3f3;
    padding: 0px 10px;
    margin-top: 6px;
    min-width: 10em;
    height: 37px;
    font-family: "Open Sans", sans-serif;
    border: 0;
    border-radius: 4px;
    transition: all 250ms ease-in-out;
  }
`;

const SecondDiv = styled.div`
  input {
    background-color: #f3f3f3;
    margin-top: 6px;
    padding: 0px 10px;
    min-width: 30em;
    height: 37px;
    font-family: "Open Sans", sans-serif;
    border: 0;
    border-radius: 4px;
    transition: all 250ms ease-in-out;
  }
`;

const ThirdDiv = styled.div`
  background-color: #f3f3f3;
  display: flex;
  margin-top: 6px;
  flex-direction: row;
  padding-left: 10px;
  align-items: center;
  width: 16em;
  height: 37px;
  font-family: "Open Sans", sans-serif;
  border: 0;
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  color: grey;
  font-size: 14px;
`;

const ForthDiv = styled.div`
  background-color: #f3f3f3;
  display: flex;
  margin-top: 6px;
  margin-left: 4px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 11em;
  height: 37px;
  font-family: "Open Sans", sans-serif;
  border: 0;
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  color: grey;
  font-size: 14px;
`;

const SelectItem = styled.select`
  background-color: #f3f3f3;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(255, 255, 255, 0.1) transparent;

  &:focus {
    outline: none;
  }
`;

const CVVInput = styled.input`
  width: 50px;
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
  padding-bottom: 10px;
`;

const PickACard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  input {
    background-color: #f3f3f3;
    padding: 0px 10px;
    margin-top: 6px;
    min-width: 10em;
    height: 37px;
    font-family: "Open Sans", sans-serif;
    border: 0;
    border-radius: 4px;
    transition: all 250ms ease-in-out;
  }
`;

const CTAButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 30px;
  border: 1px solid #8f9092;
  transition: all 0.2s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;

  &:hover {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
  }

  &:active {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }

  &:focus {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
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
