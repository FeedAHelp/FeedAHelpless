import styled from '@emotion/styled'
import { ButtonPropsType } from '../../../types/types'
import { baseTheme } from '../../foundations/theming'

const Button = styled.button<ButtonPropsType>`
  outline: none;
  border: none;
  cursor: ${({ isdisabled }) => (isdisabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ backgroundcolor }) => backgroundcolor || 'transparent'};
  border-radius: ${({ shape }) => shape || '0.625rem'};
  color: ${({ textcolor }) => textcolor || baseTheme.colors.neutrals.full_white};
  min-width: 5rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ backgroundcolor }) =>
      `rgba(${backgroundcolor}, 0.5)` || baseTheme.colors.neutrals.full_black};
  }

  &:focus {
    outline: none;
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
        font-size: 0.8rem;
          padding: 0.4rem 0.5rem;
        `
      case 'medium':
        return `
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        `
      case 'large':
        return `
          font-size: 1rem;
          padding: 0.8rem 1.5rem;
        `
      default:
        return `
          font-size: 1rem;
          padding: 0.5rem 1rem;
        `
    }
  }}

  ${({ variant, backgroundcolor, textcolor, shadowcolor, activebgcolor, width }) => {
    switch (variant) {
      case 'outline':
        return `
          color: ${textcolor} ;
          background-color: transparent;
          border: 0.063rem solid ${backgroundcolor};
        `
      case 'text':
        return `
          color: ${textcolor};
          background-color: transparent;
        `
      case 'shadow':
        return `
          color: ${textcolor};
          background-color: ${backgroundcolor};
          width: ${width};
         &:hover{
          box-shadow: -0.375rem 0.375rem 0.313rem 0rem ${shadowcolor};
-webkit-box-shadow: -0.375rem 0.375rem 0.313rem 0rem ${shadowcolor};
-moz-box-shadow: -0.375rem 0.375rem 0.313rem 0rem ${shadowcolor});
         }
         &:active{
          background-color: ${activebgcolor};
          opacity: 0.5;
         }
        `
      default:
        return `
          color: ${textcolor};
          background-color: ${backgroundcolor};

        `
    }
  }}
`

export const Styled = { Button }
