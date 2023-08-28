import styled from "@emotion/styled";

const Field = styled.div`
  position: relative;
  padding-top: 1rem;
`;
const Line = styled.div`
  width: 100%;
  height: 0.188rem;
  position: absolute;
  bottom: -0.5rem;
  background: #bdc3c7;

  &:after {
    content: " ";
    position: absolute;
    float: right;
    width: 100%;
    height: 0.188rem;
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
  max-width: 18.75rem;
  font-size: 1.5em;
  transition: padding 0.3s 0.2s ease;

  &:focus {
    padding-bottom: 0.313rem;
  }
`;

export const Styled = {
  Field,
  Line,
  LoginInput,
};
