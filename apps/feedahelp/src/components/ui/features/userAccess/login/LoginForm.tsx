import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Styled } from "../LoginRegister.styled";
import { CheckboxButton } from "~/ui/components/elements/Checkbox/CheckboxButton";
import GenericLink from "~/ui/components/elements/GenericLink/GenericLink";
import { PasswordInput } from "~/ui/components/elements/PasswordInput/PasswordInput";
import ReCAPTCHA from "react-google-recaptcha";
import CustomSpinner from "~/ui/components/elements/GenericSpinner/CustomSpinner";
import validator from "validator";

const LoginForm = () => {
  const [recaptcha, setRecaptcha] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const login = async () => {
    setError("");
    if (!validator.isEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (password.trim().length === 0) {
      setError("Password cannot be empty");
      return;
    }

    setIsLoading(false);
    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        // Do something on successful login
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-700">Login</h3>
      <form action="#" className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col text-left">
          <Styled.Field>
            <Styled.LoginInput
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Styled.Line />
          </Styled.Field>
        </div>
        <div className="flex flex-col text-left">
          <PasswordInput
            placeholder="Password"
            password={password}
            strengthCheck={false}
            setPassword={setPassword}
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex items-center justify-between pb-4 pt-4">
          <CheckboxButton chackboxTitle="Remember me" />
          <GenericLink href={"www.google.com"} color="Black" fontSize="0.8rem">
            {"Forgot password?"}
          </GenericLink>
        </div>
        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={() => setRecaptcha(!recaptcha)}
          />
        </div>

        <div>
          <button
            type="button"
            className="w-full rounded-md bg-[#EC5921] px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-[#F3AF9A] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:bg-blue-500"
            disabled={recaptcha || isLoading}
            onClick={login}
          >
            Log in
          </button>
        </div>
      </form>
      <CustomSpinner isLoading={isLoading}></CustomSpinner>
    </div>
  );
};

export default LoginForm;
