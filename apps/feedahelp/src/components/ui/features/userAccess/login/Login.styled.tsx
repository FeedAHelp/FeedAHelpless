import styled from "@emotion/styled";

const UserTermsConditions = styled.div`
  display: inline-block;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Field = styled.div`
  position: relative;
  padding-top: 1rem;
`;
const Line = styled.div`
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: -8px;
  background: #bdc3c7;

  &:after {
    content: " ";
    position: absolute;
    float: right;
    width: 100%;
    height: 3px;
    transform: scalex(0);
    transition: transform 0.3s ease;
    background: #1abc9c;
  }
`;
const LoginInput = styled.input`
  background: 0;
  border: 0;
  outline: none;
  width: 80vw;
  max-width: 400px;
  font-size: 1.5em;
  transition: padding 0.3s 0.2s ease;

  &:focus {
    padding-bottom: 5px;
  }
`;

export const Styled = {
  UserTermsConditions,
  Field,
  Line,
  LoginInput,
};
