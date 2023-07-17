import styled from '@emotion/styled'
import type { Meta } from '@storybook/react'

import { useTheme } from '../../foundations/theming'
import { GridRow } from '../GridRow'
import type { FourColumnGridSpan, TwelveColumnGridSpan } from './GridColumn'
import { GridColumn } from './GridColumn'

export default {
  component: GridColumn,
  title: 'ATOMS/Grid',
  parameters: { layout: 'fullscreen' }
} as Meta

const StyledArea = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  padding: ${({ theme }) => theme.spacing(1)};
`

const StyledBox = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.gray_white};
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

type ColumnAreaEntry = { xs: FourColumnGridSpan; lg: TwelveColumnGridSpan }

export function Column() {
  const theme = useTheme()

  const columnAreas: Record<string, Array<ColumnAreaEntry>> = {
    [theme.colors.primary.red]: Array<ColumnAreaEntry>(1).fill({
      xs: 12,
      lg: 12
    }),
    [theme.colors.primary.blue]: [
      { xs: 9, lg: 9 },
      { xs: 3, lg: 3 }
    ],
    [theme.colors.primary.green]: Array<ColumnAreaEntry>(2).fill({
      xs: 6,
      lg: 6
    }),
    [theme.colors.primary.green]: [
      { xs: 3, lg: 4 },
      { xs: 6, lg: 4 },
      { xs: 3, lg: 4 }
    ],
    [theme.colors.primary.blue]: Array<ColumnAreaEntry>(4).fill({
      xs: 3,
      lg: 3
    }),
    [theme.colors.secondary.red]: Array<ColumnAreaEntry>(6).fill({
      xs: 6,
      lg: 2
    }),
    [theme.colors.primary.green]: Array<ColumnAreaEntry>(12).fill({
      xs: 3,
      lg: 1
    })
  }

  return (
    <>
      {Object.entries(columnAreas).map(([color, columns]) => (
        <StyledArea background={color} key={color}>
          <GridRow rowSpacing={2}>
            {columns.map(({ xs, lg }, i) => (
              <GridColumn key={`${color}-${i}`} lg={lg} xs={xs}>
                <StyledBox>
                  <StyledSpanXs>{xs}</StyledSpanXs>
                  <StyledSpanLg>{lg}</StyledSpanLg>
                </StyledBox>
              </GridColumn>
            ))}
          </GridRow>
        </StyledArea>
      ))}
    </>
  )
}
