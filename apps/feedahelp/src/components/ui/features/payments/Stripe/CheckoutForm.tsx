"use client";
import { useState } from "react";
import getStripe from "./GetStripe";

const baseBtnStyle ="bg-slate-100 hover:bg-slate-200 text-black px-6 py-2 rounded-md capitalize font-bold mt-1";

export default function Page() {



  const handleCreateCheckoutSession = async () => {
    const res = await fetch(`http://localhost:4000/api/v1/stripe/create`, {
      method: "POST",
    //   body:JSON.stringify(),
      body:  "",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const checkoutSession = await res.json().then((value) => {
      return value.session;
    });

    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    console.warn(error.message);
  };

  return (
    <div className="m-auto w-fit flex flex-col justify-center">

      <button
        className={baseBtnStyle}
        onClick={() => handleCreateCheckoutSession()}
      >
        Got To Checkout
      </button>
    </div>
  );
}
