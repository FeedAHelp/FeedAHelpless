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

export const Styled = {
  Field,
  LoginInput
}
