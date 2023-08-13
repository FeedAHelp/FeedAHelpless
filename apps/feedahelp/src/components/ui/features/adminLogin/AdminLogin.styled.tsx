import React from "react";
import styled, { keyframes } from "styled-components";

const rotateBackground = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const FormContainer = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 30px 30px 30px 30px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  position: relative;
  overflow: hidden;
  border: 1px solid rgb(209, 193, 255);
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RotatedBackground = styled.div`
  position: absolute;
  content: "";
  width: 300px;
  height: 300px;
  background-color: rgb(209, 193, 255);
  transform: rotate(45deg);
  left: -180px;
  bottom: 30px;
  z-index: 1;
  border-radius: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.082);
`;

const Heading = styled.p`
  font-size: 3em;
  color: #2e2e2e;
  font-weight: 700;
  margin: 5px 0 10px 0;
  z-index: 2;
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const InputIcon = styled.svg`
  position: absolute;
  left: 3px;
`;

const InputField = styled.input`
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(173, 173, 173);
  margin: 10px 0;
  color: black;
  font-size: 0.8em;
  font-weight: 700;
  box-sizing: border-box;
  padding-left: 30px;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(199, 114, 255);
  }

  &::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
  }
`;

const Button = styled.button`
  z-index: 2;
  position: relative;
  width: 100%;
  border: none;
  background-color: rgb(162, 104, 255);
  height: 30px;
  color: white;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(126, 84, 255);
  }
`;

export const Styled = {
  FormContainer,
  RotatedBackground,
  Heading,
  InputContainer,
  InputIcon,
  InputField,
  Button,
};
