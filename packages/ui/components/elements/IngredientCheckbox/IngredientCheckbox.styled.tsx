import styled from '@emotion/styled'

const CheckboxInput = styled.input`
  display: none;

  &:checked + label {
    border: 0.3125rem solid #f00;
    box-shadow: 0 0 0.0625rem #f00;

    img {
      filter: grayscale(100%);
    }
  }

  &:checked + label::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 3.125rem;
    color: #ed6c37;
    content: '\\2714';
    line-height: 1;
    margin: auto;
    text-align: center;
    height: 1em;
  }
`

const CheckboxLabel = styled.label`
  position: relative;
  display: block;
  border: solid 0.3125rem #fff;
  border-radius: 50%;
  box-shadow: 0 0 0.0625rem #fff;
  cursor: pointer;
  transition: box-shadow 0.4s, border 0.4s;

  &:hover {
    border: 0.3125rem solid #ed6c37;
    box-shadow: 0 0 0.0625rem #ed6c37;
  }
`

export const Styled = {
  CheckboxInput,
  CheckboxLabel
}
