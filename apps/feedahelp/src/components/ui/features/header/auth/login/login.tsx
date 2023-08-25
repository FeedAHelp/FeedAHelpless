import { FormEvent } from "react";
import {
  ForgetPasswordLink,
  FormContainer,
  FormWrapper,
  ImageContainer,
  LoginImage,
  PlaceCenter,
  SocialLogin,
  SubmitButton,
} from "./login.styled";
import {
  PasswordInputField,
  RememberDevice,
  TextInputField,
} from "../inputFields/inputFields";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <FormWrapper>
      <FormContainer>
        <h1 className="formHading text-secondary">
          <span className="text-primary">Welcome Back!</span> to Feed A Help
        </h1>
        <p className="title">Sign In</p>

        <form onSubmit={handleSubmit}>
          {/* email address */}
          <TextInputField
            label="Email Address"
            required
            placeholder="Enter your Email Address"
            type="text"
          />
          <PasswordInputField
            label="Password"
            required
            placeholder="Enter your Password "
            type="password"
          />

          <RememberDevice />
          <SubmitButton type="submit">SIGN IN</SubmitButton>
          <PlaceCenter>
            <ForgetPasswordLink href="">Forgot Password?</ForgetPasswordLink>
          </PlaceCenter>
          {/* //todo add forget password link  */}
        </form>
        <SocialLogin>
          <p className="">You can also register using social network</p>
          <div className="socialLink">
            <Link href="" className="">
              <Image
              height={32}
              width={32}
                src="/static/images/social/facebook.png"
                alt="social images"
                
                className="socialImage"
              />
            </Link>
            <Link href="" className="">
              <Image
              height={32}
              width={32}
                src="/static/images/social/google.png"
                alt="social images"
                
                className="socialImage"
              />
            </Link>
            <Link href="" className="">
              <Image
              height={32}
              width={32}
                src="/static/images/social/Twitter.png"
                alt="social images"
                
                className="socialImage"
              />
            </Link>
          </div>
        </SocialLogin>
      </FormContainer>

      {/* here is place of login image */}
      <ImageContainer>
        <LoginImage
          src="/static/images/feedahelp/auth/loginPageBg.jpeg"
          alt="login page bg"
        />
      </ImageContainer>
    </FormWrapper>
  );
};

export default Login;
