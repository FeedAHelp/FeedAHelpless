import styled from '@emotion/styled'
import { ButtonUnstyled } from '@mui/core'

const CheckboxButton = styled(ButtonUnstyled)`
  input[type='checkbox'] {
    position: relative;
    border: 0.125rem solid #000;
    border-radius: 0.125rem;
    background: none;
    cursor: pointer;
    line-height: 0;
    margin: 0 0.6em 0 0;
    outline: 0;
    padding: 0 !important;
    vertical-align: text-top;
    height: 1.25rem;
    width: 1.25rem;
    -webkit-appearance: none;
    opacity: 0.5;
  }

  input[type='checkbox']:hover {
    opacity: 1;
  }

  input[type='checkbox']:checked {
    background-color: #000;
    opacity: 1;
  }

  input[type='checkbox']:before {
    content: '';
    position: absolute;
    right: 50%;
    top: 50%;
    width: 0.25rem;
    height: 0.625rem;
    border: solid #fff;
    border-width: 0 0.125rem 0.125rem 0;
    margin: -0.063rem -0.063rem 0 -0.063rem;
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: 2;
  }
`

export const Styled = {
  CheckboxButton
}
