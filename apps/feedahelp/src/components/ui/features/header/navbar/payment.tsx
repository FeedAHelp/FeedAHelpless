import { useState } from "react";
import axios, { AxiosError } from "axios";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";

const Payment = () => {


  const createOrder = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL + "pay/create"
      );
      const orderID = response.data.orderID;

      return orderID;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  const onApprove = async ({data}) => {
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



  const fundingSources = [FUNDING.CARD];

  return (
    <PayPalButtons
      style={{
        color: "white",
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

// declare global {
//   interface Window {
//     paypal: any
//   }
// }

interface OnApproveData {
  billingToken?: string | null;
  facilitatorAccessToken: string;
  orderID: string;
  payerID?: string | null;
  paymentID?: string | null;
  subscriptionID?: string | null;
  authCode?: string | null;
}

export default Payment;
