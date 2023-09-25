import React, { useEffect } from "react";
import { Styled } from "./Payment.styled";
import Image from "next/image";
import Link from "next/link";

const Payment = () => {
  return <Styled.PaymentWrapper>
    <Styled.TabContainer>
            <Styled.TabsUL>
                <li>
                    <a id="tab1" title="Analytics" href="#tab1">
                        <Image className="w-auto h-auto" src="/static/images/payment/CreditCard.png" alt={"credit"} width={300} height={300} />
                        Card
                    </a>
                </li>
                <li>
                    <a id="tab2" title="Reports" href="#tab2">
                        <Image className="w-auto h-auto" src="/static/images/payment/Paypal.png" alt={"paypal"} width={300} height={300} />
                        Paypal
                    </a>
                </li>
            </Styled.TabsUL>
            <Styled.TabsContentWrapper>
                <Styled.TabsContent id="tab1-content">
                    <h2>Credit Card</h2>
                    {/* Credit Card */}
                </Styled.TabsContent>
                <Styled.TabsContent id="tab2-content">
                    <h2>Paypal</h2>
                    {/* Paypal */}
                </Styled.TabsContent> 
            </Styled.TabsContentWrapper>
        </Styled.TabContainer>
  </Styled.PaymentWrapper>;
};

export default Payment;
