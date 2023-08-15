import styled from "styled-components";

const FormContainer = styled.form`
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 1.875rem;
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.062);
  position: relative;
  overflow: hidden;
  border: 0.053rem solid rgb(209, 193, 255);
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.p`
  font-size: 3em;
  color: #2e2e2e;
  font-weight: 700;
  margin: 0.313rem 0 0.625rem 0;
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
  left: 0.188rem;
  width: 1.25rem;
  height: 1.25rem;
`;

const InputField = styled.input`
  width: 100%;
  height: 1.875rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.125rem solid rgb(173, 173, 173);
  margin: 0.625rem 0;
  color: black;
  font-size: 0.8em;
  font-weight: 700;
  box-sizing: border-box;
  padding-left: 1.875rem;

  &:focus {
    outline: none;
    border-bottom: 0.125rem solid rgb(199, 114, 255);
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
  height: 1.875rem;
  color: white;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 0.063rem;
  margin: 0.625rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(126, 84, 255);
  }
`;

export const Styled = {
  FormContainer,
  Heading,
  InputContainer,
  InputIcon,
  InputField,
  Button,
};
