import React, { useRef, useState, useCallback } from "react";
import { getSession, signIn } from "next-auth/react";
import { NextPageContext } from "next";
import { Styled } from "../LoginRegister.styled";
import { CheckboxButton } from "~/ui/components/elements/Checkbox/CheckboxButton";
import GenericLink from "~/ui/components/elements/GenericLink/GenericLink";
import { PasswordInput } from "~/ui/components/elements/PasswordInput/PasswordInput";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = () => {
  const [recapta, setRecapcha] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const login = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        id,
      });

      if (result?.error) {
        console.error(result.error);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-700">Login</h3>
      <form action="#" className="flex flex-col space-y-4">
        <div className="flex flex-col text-left">
          <Styled.Field>
            <Styled.LoginInput
              type="text"
              placeholder="What's your email?"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Styled.Line />
          </Styled.Field>
        </div>
        <div className="flex flex-col space-y-1">
          <PasswordInput
            placeholder="Password?"
            password={id}
            strengthCheck={false}
            setPassword={setId}
          />
        </div>
        <div className="flex items-center justify-between pb-4 pt-4">
          <CheckboxButton chackboxTitle="Remember me" />
          <GenericLink href={"www.google.com"} color="Black" fontSize="0.8rem">
            {"Forgot password?"}
          </GenericLink>
        </div>
        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={(value) => setRecapcha(!recapta)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-[#EC5921] px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-[#F3AF9A] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:bg-blue-500"
            disabled={recapta}
            onClick={login}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
