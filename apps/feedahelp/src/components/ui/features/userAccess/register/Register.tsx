import React from "react";
import RegisterFrom from "./RegisterForm";
import SocialMedia from "../socialMedia/socialMedia";
import GenericLink from "~/ui/components/elements/GenericLink/GenericLink";
type Props = {
  loginRegisterToggle: () => void;
};
const Register = ({ loginRegisterToggle }: Props) => {
  return (
    <div className="bg-white p-10">
      <RegisterFrom loginRegisterToggle={loginRegisterToggle}/>
      <div className="mb-4 flex flex-row items-center justify-center gap-4 pt-4 text-center">
        <h4 className="text-sm">Already have an account?</h4>
        <GenericLink color="Black" fontSize="0.8rem">
          <button onClick={loginRegisterToggle}>{"Sign In!"}</button>
        </GenericLink>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Register;
