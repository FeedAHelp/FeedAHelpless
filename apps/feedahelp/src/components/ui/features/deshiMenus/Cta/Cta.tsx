import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./Cta.styled";
import CurrencyFormat from "react-currency-format";
import Modal from "~/ui/components/elements/Modal/GenericModal";
import Payment from "../../payments/Payment";

type CtaProps = {
  menuNameId: string;
  menuPrice: number;
};

const Cta = ({ menuNameId, menuPrice }: CtaProps) => {
  const [rangeQty, setRangeQty] = useState<number>(0);
  const [donateAmount, setDonateAmount] = useState<number>(0);
  const rangeInputRef = useRef<HTMLInputElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const rangeInput = rangeInputRef.current;
    const totalCost = menuPrice * rangeInput.value;

    const rangeChange = () => {
      rangeInput?.setAttribute("value", rangeInput.value);
      setRangeQty(rangeInput.value);
      setDonateAmount(menuPrice * rangeInput.value);
    };
    setDonateAmount(totalCost);

    rangeInput?.addEventListener("input", rangeChange);
    return () => {
      rangeInput?.removeEventListener("input", rangeChange);
    };
  }, []);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <Styled.ElWrapper>
      <Styled.BoxDown>
        <Styled.Cart>
          <Styled.DonateAmount>
            <CurrencyFormat
              value={donateAmount}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Styled.DonateAmount>
          <Styled.RangeBox>
            <Styled.RangeInput
              type="range"
              min="100"
              max="100000"
              value={rangeQty}
              name={menuNameId}
              ref={rangeInputRef}
            />
          </Styled.RangeBox>
        </Styled.Cart>
      </Styled.BoxDown>
      <Styled.DonateButton>
        <Styled.DonateButtonIcon
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <Styled.DeshiShareIcon
            src="https://cdn.sanity.io/images/s98tqz9i/production/caf473f4c94fbb175ba834421beb4ef363bc142d-3144x3026.png"
            width={30}
            height={30}
            alt={"feedahelpLogo"}
            className="h-auto w-auto"
          />
        </Styled.DonateButtonIcon>
      </Styled.DonateButton>
      <Modal isOpen={modalOpen} closeModal={closeModal}>
        <div className="payment-modal-dimention">
          <Payment />
        </div>
      </Modal>
    </Styled.ElWrapper>
  );
};

export default Cta;
