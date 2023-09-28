import styled from '@emotion/styled'

const Field = styled.div`
  position: relative;
  padding-top: 1rem;
`

const LoginInput = styled.input`
  background: 0;
  border: 0;
  outline: none;
  width: 80vw;
  max-width: 18.75rem;
  font-size: 1.5em;
  transition: padding 0.3s 0.2s ease;

  &:focus {
    padding-bottom: 5px;
  }
`

const StrengthIndicator = styled.div`
  .strength-bar {
    height: 10px;
    width: 0;
    background-color: lightgray;
    position: relative;
    transition: width 0.3s ease; 
    border-radius: 5px;
  }

  .strength-text {
    text-align: left;
    margin-top: 5px;
  }

  & .strong .strength-bar {
    background-color: #50C878;
    width: 100%;
  }

  & .weak .strength-bar {
    background-color: #F3AF9A;
    width: 50%;
  }
`;

export const Styled = {
  Field,
  LoginInput,
  StrengthIndicator
}
