import React from "react";
import { Styled } from "../LoginRegister.styled";
import { CheckboxButton } from "~/ui/components/elements/Checkbox/CheckboxButton";
import GenericLink from "~/ui/components/elements/GenericLink/GenericLink";
import { PasswordInput } from "~/ui/components/elements/PasswordInput/PasswordInput";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from "axios";
import ReactCodeInput from "react-verification-code-input";
import CustomSpinner from "~/ui/components/elements/GenericSpinner/CustomSpinner";

type Props = {
  loginRegisterToggle: () => void;
};

const RegisterFrom = ({ loginRegisterToggle }: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passcode, setPasscode] = useState("");
  const [image] = useState("feedahelpAvatar");
  const [role] = useState("donor");
  const [recapta, setRecapcha] = useState(true);
  const [codeSent, setCodesent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const register = async () => {
    setIsLoading(true);
    try {
      await axios
        .post(
          process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL + "auth/register",
          {
            email,
            name,
            password,
            image,
            role,
          }
        )
        .then(() => {
          setCodesent(true);
        });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const verify = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL}auth/verify?email=${email}&passcode=${passcode}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          loginRegisterToggle();
        }, 500);
      } else {
        console.log(`Verification failed with status ${response.status}`);
      }
    } catch (error) {
      console.log("An error occurred during verification:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {codeSent && (
        <>
          <h3 className="pt-20 text-2xl font-semibold text-gray-700">
            Verify Your Mail
          </h3>
          <p className="pt-10 text-lg font-normal text-gray-700">
            We have sent mail to your email adress.
            <br /> Check it out and put it in.
          </p>
          <form action="#" className="flex flex-col space-y-4 pt-5">
            <div className="flex flex-row justify-center">
              <ReactCodeInput fields={4} onChange={(val) => setPasscode(val)} />
            </div>

            <div>
              <button
                type="button"
                onClick={verify}
                className="w-full rounded-md bg-[#EC5921] px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-[#F3AF9A] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:bg-blue-500"
              >
                Verify Now
              </button>
            </div>
            <div className="mb-4 flex flex-row items-center justify-center gap-4 pt-4 text-center">
              <h4 className="text-sm">Haven&lsquo;t Received Code?</h4>
              <GenericLink color="Black" fontSize="0.8rem">
                <button>Resend Code</button>
              </GenericLink>
            </div>
          </form>
        </>
      )}

      {!codeSent && (
        <>
          <h3 className="text-2xl font-semibold text-gray-700">Register</h3>
          <form action="#" className="flex flex-col space-y-4">
            <div className="flex flex-col text-left">
              <Styled.Field>
                <Styled.LoginInput
                  type="text"
                  placeholder="What's your username?"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <Styled.Line />
              </Styled.Field>
            </div>
            <div className="flex flex-col text-left">
              <Styled.Field>
                <Styled.LoginInput
                  value={email}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="What's your email?"
                  required
                />
                <Styled.Line />
              </Styled.Field>
            </div>
            <div className="flex flex-col space-y-1">
              <PasswordInput
                placeholder="Password?"
                strengthCheck={true}
                password={password}
                setPassword={setPassword}
              />
            </div>
            <div className="flex items-center justify-start pb-4 pt-4 pl-4">
              <CheckboxButton chackboxTitle="Remember me" />

            </div>
            <div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                onChange={() => setRecapcha(!recapta)}
              />
            </div>

            <div>
              <button
                type="button"
                onClick={register}
                disabled={recapta}
                className="w-full rounded-md bg-[#EC5921] px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-[#F3AF9A] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:bg-blue-500"
              >
                Register Now
              </button>
            </div>
          </form>
        </>
      )}
      <CustomSpinner isLoading={isLoading}></CustomSpinner>
    </div>
  );
};

export default RegisterFrom;
