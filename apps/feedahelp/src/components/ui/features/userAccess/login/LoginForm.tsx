import React, { useRef, useState }  from "react";
import { Styled } from "../LoginRegister.styled";
import { CheckboxButton } from "../../../../../../../../packages/ui/components/elements/Checkbox/CheckboxButton";
import GenericLink from "../../../../../../../../packages/ui/components/elements/GenericLink/GenericLink";
import { PasswordInput } from "../../../../../../../../packages/ui/components/elements/PasswordInput/PasswordInput";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "../../../../../server/ServerActions";
import { log } from "console";

const LoginForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [isVerified, setIsverified] = useState<boolean>(false)

  async function handleCaptchaSubmission(token: string | null) {
    console.log(token)
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-700">Login</h3>
      <form action="#" className="flex flex-col space-y-4">
        <div className="flex flex-col text-left">
          <Styled.Field>
            <Styled.LoginInput type="text" placeholder="What's your email?" />
            <Styled.Line />
          </Styled.Field>
        </div>
        <div className="flex flex-col space-y-1">
          <PasswordInput placeholder="password?" />
        </div>
        <div className="flex items-center justify-between pb-4 pt-4">
          <CheckboxButton chackboxTitle="Remember me" />
          <GenericLink href={"www.google.com"} color="Black" fontSize="0.8rem">
            {"Forgot password?"}
          </GenericLink>
        </div>
        <div>
          <ReCAPTCHA
            sitekey="6Ldu4eMnAAAAAIWpEX8R81LvNVjvVbAv0CMKALT0"
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-[#EC5921] px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-[#F3AF9A] focus:outline-none focus:ring-4 focus:ring-blue-200"
            disabled={!isVerified}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
