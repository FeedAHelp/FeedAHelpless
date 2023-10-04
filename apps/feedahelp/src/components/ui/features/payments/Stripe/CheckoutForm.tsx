"use client";
import { useState } from "react";
import getStripe from "./GetStripe";
import { apiSetup } from "~/utils/api/api";
import { useSession } from "next-auth/react";
import { endPoints } from "~/utils/api/route";

export default function StripScriptProvider() {
  const { data: session } = useSession();
  const [value, setValue] = useState("10")
  const email= session?.user?.email ?? undefined
  const handleCreateCheckoutSession = async () => {
    try {
      const api = await apiSetup();
      const response = await api.post(
        endPoints.stripe.create, {value, email, currency: 'usd'}
      );
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
          value={value}
          onChange={(e)=> setValue(e.target.value)}
          className="h-10 w-40 rounded-md border border-blue-500"
        ></input>
      </div>

      <button
        className="bg-slate-100 hover:bg-slate-200 text-black px-6 py-2 rounded-md capitalize font-bold mt-1"
        onClick={() => handleCreateCheckoutSession()}
      >
        Got To Checkout
      </button>
    </div>
  );
}
