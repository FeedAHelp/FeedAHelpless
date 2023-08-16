import React from "react";
import { Styled } from "./AdminLogin.styled";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const AdminLogin = () => {
  return (
    <div>
      <Styled.FormContainer>
        <Image src="/FeedaHelpLogo.png" alt={"logo"} width={300} height={300} />
        <Styled.Heading>Admin Login</Styled.Heading>
        <Styled.InputContainer>
          <Styled.InputIcon>
            <EmailIcon color="action" />
          </Styled.InputIcon>
          <Styled.InputField type="text" id="username" placeholder="Username" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.InputIcon>
            <LockIcon color="action" />
          </Styled.InputIcon>
          <Styled.InputField
            type="password"
            id="password"
            placeholder="Password"
          />
        </Styled.InputContainer>
        <Styled.Button>Submit</Styled.Button>
      </Styled.FormContainer>
    </div>
  );
};

export default AdminLogin;
