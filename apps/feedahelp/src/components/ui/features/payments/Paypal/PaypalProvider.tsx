import { useState } from "react";
import axios from "axios";
import { PayPalButtons, FUNDING } from "@paypal/react-paypal-js";

interface PaymentProps {
  value: string;
  currency: string;
  email?: string | undefined;
}

const PaypalProvider: React.FC<PaymentProps> = ({ value, currency, email }) => {
  const createOrder = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL + "pay/create",
        {
          value,
          currency,
          ...(email && { email }),
        }
      );
      const orderID = response.data.orderID;

      return orderID;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const onApprove = async (data: OnApproveData, actions: any) => {
    try {
      await axios.post(
        process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL + "pay/capture",
        {
          orderID: data.orderID,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PayPalButtons
      style={{
        color: "gold",
        shape: "rect",
        label: "pay",
        height: 50,
      }}
      fundingSource={FUNDING.PAYPAL}
      createOrder={createOrder}
      onApprove={onApprove}
    />
  );
};

interface OnApproveData {
  billingToken?: string | null;
  facilitatorAccessToken: string;
  orderID: string;
  payerID?: string | null;
  paymentID?: string | null;
  subscriptionID?: string | null;
  authCode?: string | null;
}

export default PaypalProvider;
