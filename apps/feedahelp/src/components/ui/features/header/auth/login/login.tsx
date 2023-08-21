import { FormEvent } from "react";
import {
  FormContainer,
  FormWrapper,
  ImageContainer,
  LoginImage,
  PasswordWrapper,
} from "./login.styled";
import { PasswordInputField, RememberDevice, TextInputField } from "../inputFields/inputFields";

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

          
        </form>
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
