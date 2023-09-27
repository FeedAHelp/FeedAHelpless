import React from "react";
import { Styled } from "./PickACard.styled";
import Image from "next/image";

const PickACard = () => {
  const changeCardBackground = (e: any) => {
    const visa = document.getElementById("visa");
    const master = document.getElementById("master");
    const card = document.getElementById("card");
    const logo = document.getElementById("logo");
    const container = document.getElementById("container");

    if (visa!.checked) {
      card!.style.backgroundColor = "black";
      card!.style.backgroundImage = "url('./static/images/payment/visa.png')";
      logo!.src = "https://i.hizliresim.com/Lx4G72.png";
      logo!.style.backgroundColor = "transparent";
      container!.style.borderColor = "black";
    }
    if (master!.checked) {
      card!.style.backgroundColor = "blue";
      card!.style.backgroundImage = "url('./static/images/payment/master.png')";
      logo!.src = "https://i.hizliresim.com/rqCMI3.png";
      container!.style.borderColor = "rgb(70, 179, 252)";
    }
  };

  return (
    <Styled.PickACard>
      <Styled.RadioTileGroup>
        <Styled.InputContainer>
          <Styled.InputRadio
            id="visa"
            type="radio"
            name="radio"
            value="visa"
            onClick={(e) => {
              changeCardBackground(e);
            }}
            checked
          />
          <Styled.InputRadioLite>
            <div className="icon bike-icon">
              <Image
                src={"/static/images/payment/visa.png"}
                width={40}
                height={40}
                alt="visa"
              />
            </div>
          </Styled.InputRadioLite>
        </Styled.InputContainer>

        <Styled.InputContainer>
          <Styled.InputRadio
            id="master"
            type="radio"
            name="radio"
            value="master"
            onClick={(e) => {
              changeCardBackground(e);
            }}
          />
          <Styled.InputRadioLite>
            <div className="icon car-icon">
              <Image
                src={"/static/images/payment/master.png"}
                width={30}
                height={30}
                alt="visa"
              />
            </div>
          </Styled.InputRadioLite>
        </Styled.InputContainer>
      </Styled.RadioTileGroup>
    </Styled.PickACard>
  );
};

export default PickACard;
