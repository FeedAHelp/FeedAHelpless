import styled from '@emotion/styled'
import type { Meta } from '@storybook/react'

import { GridColumn } from '../GridColumn'
import { GridRow } from './GridRow'

export default {
  component: GridRow,
  title: 'ATOMS/Grid',
  parameters: { layout: 'fullscreen' }
} as Meta

const StyledBox = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.gray_black};
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`

const StyledSpanXs = styled.span`
  ${({ theme }) => theme.breakpoints.up('lg')} {
    display: none;
  }
`
const StyledSpanLg = styled.span`
  ${({ theme }) => theme.breakpoints.down('lg')} {
    display: none;
  }
`

export function Row() {
  return (
    <GridRow rowSpacing={1}>
      {Array(12)
        .fill(null)
        .map((_, i) => (
          <GridColumn key={i} lg={1} xs={3}>
            <StyledBox>
              <StyledSpanXs>3</StyledSpanXs>
              <StyledSpanLg>1</StyledSpanLg>
            </StyledBox>
          </GridColumn>
        ))}
    </GridRow>
  )
}
