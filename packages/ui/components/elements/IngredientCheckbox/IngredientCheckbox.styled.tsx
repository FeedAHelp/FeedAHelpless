import styled from '@emotion/styled'

const CheckboxInput = styled.input`
  display: none;

  &:checked + label {
    border: 0.3125rem solid ${({ theme }) => theme.colors.primary.green};
    box-shadow: 0 0 0.0625rem ${({ theme }) => theme.colors.primary.green};

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
    color: ${({ theme }) => theme.colors.primary.green};
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
  border: solid 0.3125rem ${({ theme }) => theme.colors.neutrals.full_white};
  border-radius: 50%;
  box-shadow: 0 0 0.0625rem ${({ theme }) => theme.colors.neutrals.full_white};
  cursor: pointer;
  transition: box-shadow 0.4s, border 0.4s;

  &:hover {
    border: 0.3125rem solid ${({ theme }) => theme.colors.primary.green};
    box-shadow: 0 0 0.0625rem ${({ theme }) => theme.colors.primary.green};
  }
`

export const Styled = {
  CheckboxInput,
  CheckboxLabel
}
