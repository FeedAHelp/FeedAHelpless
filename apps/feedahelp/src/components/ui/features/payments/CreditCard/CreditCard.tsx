import React from "react";
import { Styled } from "./CreditCard.styled";

const CreditCard = () => {
  return (
    <Styled.PaymentForms>
      <Styled.PaymentContainer id="container">
        <Styled.PickACard>
          <input type="radio" id="visa" name="card" value="visa" checked />
          <label htmlFor="visa">Visa</label>
          <input type="radio" id="master" name="card" value="master" />
          <label htmlFor="huey">Master</label>
        </Styled.PickACard>
        <Styled.FirstDiv>
          <input type="text" id="cardName" placeholder="Name" />
          <input type="text" id="cardSurname" placeholder="Surname" />
        </Styled.FirstDiv>
        <Styled.SecondDiv>
          <input type="text" id="cardNumber" placeholder="Credit Card Number" />
        </Styled.SecondDiv>
        <Styled.CardDetails>
          <Styled.ThirdDiv>
            <div className="exp">
              <p>Expirition Date</p>
            </div>
            <Styled.Expirition>
              <Styled.SelectItem name="mm" id="mm">
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
              <Styled.SelectItem name="yy" id="yy">
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
              <Styled.CVVInput type="text" id="cardNumber" />
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
              <Styled.CardNumber id="displayNumber" />
            </Styled.CardPosition>
            <div>
              <Styled.CardPosition>
                <Styled.CardName id="displayName" />
              </Styled.CardPosition>
              <Styled.CardPosition>
                <Styled.CardSurname id="displaySurname" />
              </Styled.CardPosition>
              <Styled.CardPosition>
                <Styled.Cardmm id="displayMm" />
              </Styled.CardPosition>
              <Styled.CardPosition>
                <Styled.Cardyy id="displayYy" />
              </Styled.CardPosition>
            </div>
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
