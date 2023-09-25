import React, { useEffect } from "react";
import { Styled } from "./Payment.styled";
import Image from "next/image";
import Link from "next/link";
import CreditCard from "./CreditCard/CreditCard";

const Payment = () => {
  return (
    <Styled.PaymentWrapper>
      <Styled.TabContainer>
        <Styled.TabsUL>
          <li>
            <a id="tab1" title="Analytics" href="#tab1">
              <Image
                className="h-auto w-auto"
                src="/static/images/payment/CreditCard.png"
                alt={"credit"}
                width={300}
                height={300}
              />
              Card
            </a>
          </li>
          <li>
            <a id="tab2" title="Reports" href="#tab2">
              <Image
                className="h-auto w-auto"
                src="/static/images/payment/Paypal.png"
                alt={"paypal"}
                width={300}
                height={300}
              />
              Paypal
            </a>
          </li>
        </Styled.TabsUL>
        <Styled.TabsContentWrapper>
          <Styled.TabsContent id="tab1-content">
            <CreditCard />
          </Styled.TabsContent>
          <Styled.TabsContent id="tab2-content">
            {/* Paypal */}
          </Styled.TabsContent>
        </Styled.TabsContentWrapper>
      </Styled.TabContainer>
    </Styled.PaymentWrapper>
  );
};

export default Payment;
