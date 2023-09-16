import React, { useState } from "react";
import { Styled } from "./Cta.styled";

const Cta = () => {
  const [donateAmount, setDonateAmount] = useState(100);

  const move = () => {
    console.log("Move");
  };

  return (
    <Styled.ElWrapper>
      <Styled.BoxDown>
        <Styled.Cart>
          <Styled.DonateAmount>${donateAmount}</Styled.DonateAmount>
          <Styled.QtyInput>
            <Styled.Slider>
              <Styled.SliderOutput>100</Styled.SliderOutput>
              <Styled.SliderRange
                type="range"
                min="100"
                max="10000"
                value="100"
                step="50"
                oninput="move()"
                id="range"
              />
            </Styled.Slider>
          </Styled.QtyInput>
        </Styled.Cart>
      </Styled.BoxDown>
      <Styled.DonateButton>
        <Styled.DonateButtonIcon>
          <Styled.DeshiShareIcon
            src="https://cdn.sanity.io/images/s98tqz9i/production/caf473f4c94fbb175ba834421beb4ef363bc142d-3144x3026.png"
            width={30}
            height={30}
            alt={"feedahelpLogo"}
          />
        </Styled.DonateButtonIcon>
      </Styled.DonateButton>
    </Styled.ElWrapper>
  );
};

export default Cta;
