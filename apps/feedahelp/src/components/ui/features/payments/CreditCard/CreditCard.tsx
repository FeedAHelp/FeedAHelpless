import React, { useState } from "react";
import { Styled } from "./CreditCard.styled";
import PickACard from "./PickACard/PickACard";

const CreditCard = () => {
  const [cardName, setCardName] = useState("");
  const [cardSurname, setCardSurname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const changeCardName = async (e: any) => {
    await delay(1000);
    setCardName(e.target.value.toUpperCase());
  };

  const changeCardSurname = async (e: any) => {
    await delay(1000);
    setCardSurname(e.target.value.toUpperCase());
  };

  const changeCardNumber = async (e: any) => {
    await delay(1000);
    setCardNumber(
      e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")
    );
  };

  const changeCVVNumber = async (e: any) => {
    await delay(1000);
    setCvvNumber(
      e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")
    );
    console.log(cvvNumber);
  };

  const changeExpMonth = (e: any) => {
    setExpMonth(e.target.value);
  };

  const changeExpYear = (e: any) => {
    setExpYear(e.target.value);
  };

  return (
    <Styled.PaymentForms>
      <Styled.PaymentContainer id="container">
        <PickACard />
        <Styled.FirstDiv>
          <input
            type="text"
            id="cardName"
            placeholder="Name"
            onInput={(e) => {
              changeCardName(e);
            }}
          />
          <input
            type="text"
            id="cardSurname"
            placeholder="Surname"
            onInput={(e) => {
              changeCardSurname(e);
            }}
          />
        </Styled.FirstDiv>
        <Styled.SecondDiv>
          <input
            type="text"
            id="cardNumber"
            placeholder="Credit Card Number"
            onInput={(e) => {
              changeCardNumber(e);
            }}
          />
        </Styled.SecondDiv>
        <Styled.CardDetails>
          <Styled.ThirdDiv>
            <div className="exp">
              <p>Expirition Date</p>
            </div>
            <Styled.Expirition>
              <Styled.SelectItem name="mm" id="mm" onInput={changeExpMonth}>
                <option>mm</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Styled.SelectItem>
              <Styled.SelectItem name="yy" id="yy" onInput={changeExpYear}>
                <option>yy</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
              </Styled.SelectItem>
            </Styled.Expirition>
          </Styled.ThirdDiv>
          <Styled.ForthDiv>
            <div className="exp">
              <p>CVV</p>
            </div>
            <Styled.Expirition>
              <Styled.CVVInput
                type="text"
                id="cardNumber"
                onInput={(e) => {
                  changeCVVNumber(e);
                }}
              />
            </Styled.Expirition>
          </Styled.ForthDiv>
        </Styled.CardDetails>
        <Styled.CTAWrapper>
          <input type="text" id="amount" placeholder="Amount" />
          <Styled.CTAButton type="submit">PAY NOW</Styled.CTAButton>
        </Styled.CTAWrapper>
        <Styled.Card id="card">
          <Styled.CardPosition>
            <Styled.CardPosition>
              <Styled.CardNumber>
                {cardNumber.slice(0, 4)} {cardNumber.slice(4, 8)}{" "}
                {cardNumber.slice(8, 12)} {cardNumber.slice(12, 16)}
              </Styled.CardNumber>
            </Styled.CardPosition>
            <Styled.CardInfo>
              <Styled.CardPosition>
                <Styled.CardName>{cardName}</Styled.CardName>
                <Styled.CardSurname>{cardSurname}</Styled.CardSurname>
              </Styled.CardPosition>
              <Styled.CardPosition>
                <Styled.Cardmm>{expMonth}</Styled.Cardmm>
                <Styled.Cardyy>{expYear}</Styled.Cardyy>
              </Styled.CardPosition>
            </Styled.CardInfo>
            <Styled.LogoSim
              id="sim"
              src="https://i.hizliresim.com/MdZ3Cf.png"
              alt=""
            />
            <Styled.CardPosition>
              <Styled.Logo
                id="logo"
                src="https://i.hizliresim.com/Lx4G72.png"
                alt=""
              />
            </Styled.CardPosition>
          </Styled.CardPosition>
        </Styled.Card>
      </Styled.PaymentContainer>
    </Styled.PaymentForms>
  );
};

export default CreditCard;
