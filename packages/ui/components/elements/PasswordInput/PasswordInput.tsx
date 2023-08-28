import React, { useState }from "react";
import { Styled } from "./PasswordInput.styled";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

type PasswordInputProps = {
  placeholder: string;
  strengthCheck?: boolean;
};

export function PasswordInput({placeholder, strengthCheck}: PasswordInputProps) {
  const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [message, setMessage] = useState("");
    const [progress, setProgress] = useState("");

    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
    }

    const handlePassword = (passwordValue) => {
      const strengthChecks = {
        length: 0,
        hasUpperCase: false,
        hasLowerCase: false,
        hasDigit: false,
        hasSpecialChar: false,
      };
  
      strengthChecks.length = passwordValue.length >= 8 ? true : false;
      strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
      strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
      strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
      strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);
  
      let verifiedList = Object.values(strengthChecks).filter((value) => value);
  
      let strength =
        verifiedList.length == 5
          ? "Strong"
          : verifiedList.length >= 2
          ? "Medium"
          : "Weak";
  
      setPassword(passwordValue);
      setProgress(`${(verifiedList.length / 5) * 100}%`);
      setMessage(strength);
  
      console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
    };

    const getActiveColor = (type) => {
      if (type === "Strong") return "#8BC926";
      if (type === "Medium") return "#FEBD01";
      return "#FF0054";
    };
    
  return (
    <>
      <Styled.Field>
          <Styled.LoginInput
              type={type}
              placeholder={placeholder}
              value={password}
              onChange={(e) => !strengthCheck ? setPassword(e.target.value) : handlePassword(e.target.value)}
              autoComplete="current-password"
          />
              <span className="flex justify-end items-center cursor-pointer" onClick={handleToggle}>
                  <Icon className="absolute pb-8" icon={icon} size={30}/>
              </span>
          <Styled.Line />
      </Styled.Field>
    </>
  );
}
