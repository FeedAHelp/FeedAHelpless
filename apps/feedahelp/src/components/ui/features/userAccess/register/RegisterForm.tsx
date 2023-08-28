import React from "react";
import { Styled } from "../LoginRegister.styled";
import { CheckboxButton } from "../../../../../../../../packages/ui/components/elements/Checkbox/CheckboxButton";
import GenericLink from "../../../../../../../../packages/ui/components/elements/GenericLink/GenericLink";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = () => {
  return <div>
            <h3 className="text-2xl font-semibold text-gray-700">Login</h3>
            <form action="#" className="flex flex-col space-y-4">
                <div className="flex flex-col text-left">
                    <Styled.Field>
                    <Styled.LoginInput type="text" placeholder="What's your email?" />
                    <Styled.Line />
                    </Styled.Field>
                </div>
                <div className="flex flex-col space-y-1">
                    <Styled.Field>
                    <Styled.LoginInput
                        type="password"
                        placeholder="What's your password?"
                    />
                    <Styled.Line />
                    </Styled.Field>
                </div>
                <div className="flex items-center justify-between pt-4 pb-4">
                    <CheckboxButton chackboxTitle="Remember me" />
                    <GenericLink
                        href={"www.google.com"}
                        color="Black"
                        fontSize="0.8rem"
                    >
                    {"Forgot password?"}
                    </GenericLink>
                </div>
                <div>
                    <ReCAPTCHA sitekey="Your client site key" />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-[#EC5921] px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-[#F3AF9A] focus:outline-none focus:ring-4 focus:ring-blue-200"
                    >
                    Log in
                    </button>
                </div>
            </form>
  </div>;
};

export default LoginForm;
