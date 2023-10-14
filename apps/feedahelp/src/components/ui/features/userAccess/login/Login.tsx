import React, { useState } from "react";
import SocialMedia from "../socialMedia/socialMedia";
import { Styled } from "./Login.styled";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("donor");

  const handleRoleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="p-10">
      <Styled.CustomCheckBoxHolder>
        <Styled.CustomCheckBoxInput
          id="cCB1"
          type="checkbox"
          value="donor"
          checked={selectedRole === "donor"}
          onChange={handleRoleChange}
        />
        <Styled.CustomCheckBoxWrapper htmlFor="cCB1">
          <Styled.CustomCheckBox>
            <Styled.CustomCheckBoxInner>DONORS</Styled.CustomCheckBoxInner>
          </Styled.CustomCheckBox>
        </Styled.CustomCheckBoxWrapper>

        <Styled.CustomCheckBoxInput
          id="cCB2"
          type="checkbox"
          value="chef"
          checked={selectedRole === "chef"}
          onChange={handleRoleChange}
        />
        <Styled.CustomCheckBoxWrapper htmlFor="cCB2">
          <Styled.CustomCheckBox>
            <Styled.CustomCheckBoxInner>CHEF</Styled.CustomCheckBoxInner>
          </Styled.CustomCheckBox>
        </Styled.CustomCheckBoxWrapper>
      </Styled.CustomCheckBoxHolder>
      <div className="flex-1 flex-col items-center justify-center">
        <SocialMedia role={selectedRole} />
      </div>
    </div>
  );
};

export default Login;
