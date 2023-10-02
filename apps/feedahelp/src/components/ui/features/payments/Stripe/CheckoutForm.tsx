"use client";
import { useState } from "react";
import getStripe from "./GetStripe";
import axios from "axios";
import { useSession } from "next-auth/react";

const baseBtnStyle =
  "bg-slate-100 hover:bg-slate-200 text-black px-6 py-2 rounded-md capitalize font-bold mt-1";

export default function Page() {
  const { data: session } = useSession();
  const [value, setValue] = useState("10")
  const email= session?.user?.email ?? undefined
  const handleCreateCheckoutSession = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/stripe/create`, {value, email, currency: 'usd'}
      );
      console.log(response.data);
      const checkoutSession = response.data;
      const stripe = await getStripe();

      const { error } = await stripe!.redirectToCheckout({
        sessionId: checkoutSession.id,
      });

      if (error) {
        console.warn(error.message);
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  return (
    <div className="m-auto flex w-fit flex-col justify-center">
      <div className="flex flex-col justify-start">
        <label htmlFor="pay_amount">Donation Amount</label>

        <input
          id="pay_amount"
          type="text"
          value={amount}
          onChange={(e)=> setValue(e.target.value)}
          className="h-10 w-40 rounded-md border border-blue-500"
        ></input>
      </div>

      <button
        className={baseBtnStyle}
        onClick={() => handleCreateCheckoutSession()}
      >
        Got To Checkout
      </button>
    </div>
  );
}