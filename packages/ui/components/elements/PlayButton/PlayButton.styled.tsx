import styled from '@emotion/styled'

import type { Theme } from '../../foundations/theming'
import { optionalStyle } from '../../utils/optionalStyle'
import type { PlayButtonProps } from './PlayButton'

function getStateStyles(theme: Theme) {
  return `
    &:hover {
      color: ${theme.colors.primary.red};
      background: ${theme.colors.primary.green};
    }
    &:focus {
      outline: ${theme.borders.widths.md} solid ${theme.colors.neutrals.full_black};
      outline-offset: ${theme.borders.widths.md};
    }
    &:active {
      color: ${theme.colors.neutrals.full_white};
      background: ${theme.colors.primary.green};
    }
    &:disabled {
      color: ${theme.colors.neutrals.full_white};
      background: ${theme.colors.neutrals.medium_black};
      cursor: not-allowed;
    }
  `
}

const Button = styled('button')<Pick<PlayButtonProps, 'tag'>>(
  ({ theme, tag }) => `
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borders.radii.round};
    color: ${theme.colors.primary.green};
    cursor: ${optionalStyle('pointer', tag === 'button')};
    background: ${theme.colors.primary.green};
    border: ${theme.borders.widths.xl} solid ${theme.colors.neutrals.full_white};
    ${optionalStyle(getStateStyles(theme), tag === 'button')}
  `
)

export const Styled = {
  Button
}
