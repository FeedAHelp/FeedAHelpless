import styled from '@emotion/styled'
import { ButtonUnstyled } from '@mui/core'

const CheckboxButton = styled(ButtonUnstyled)`
  input[type=checkbox] {
    position: relative;
    border: 2px solid #000;
    border-radius: 2px;
    background: none;
    cursor: pointer;
    line-height: 0;
    margin: 0 .6em 0 0;
    outline: 0;
    padding: 0 !important;
    vertical-align: text-top;
    height: 20px;
    width: 20px;
    -webkit-appearance: none;
    opacity: .5;
  }

  input[type=checkbox]:hover {
    opacity: 1;
  }
  
  input[type=checkbox]:checked {
    background-color: #000;
    opacity: 1;
  }
  
  input[type=checkbox]:before {
    content: '';
    position: absolute;
    right: 50%;
    top: 50%;
    width: 4px;
    height: 10px;
    border: solid #FFF;
    border-width: 0 2px 2px 0;
    margin: -1px -1px 0 -1px;
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: 2;
  }
`

export const Styled = {
  CheckboxButton
}
