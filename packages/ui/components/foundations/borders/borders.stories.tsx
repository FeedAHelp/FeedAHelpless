import type { Meta } from '@storybook/react'

import { colors } from '../colors/'
import { baseTheme as theme } from '../theming'
import { borders } from '.'

export default {
  title: 'Foundation/Borders',
  parameters: {
    docs: {
      description: {
        component: 'Border defaults.'
      }
    },
    controls: { hideNoControlsWarning: true }
  }
} as Meta

export function BorderWidths() {
  return (
    <>
      <div>
        <h2>Border widths</h2>
        <ol>
          {Object.entries(borders.widths).map(([key, value], i) => (
            <li key={i} style={{ marginBottom: theme.spacing(1), textAlign: 'center' }}>
              <div
                style={{
                  width: '8rem',
                  height: '4.5rem',
                  border: `${value} solid ${colors.primary.green}`
                }}
              >
                {key} = {value}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export function BorderRadii() {
  return (
    <>
      <div>
        <h2>Border radii on square shape</h2>
        <ol>
          {Object.entries(borders.radii).map(([key, value], i) => (
            <li
              key={i}
              style={{
                marginBottom: theme.spacing(1),
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '8rem',
                  height: '8rem',
                  border: `${borders.widths.md} solid ${colors.primary.blue}`,
                  borderRadius: value
                }}
              >
                {key} = {value}
              </div>
            </li>
          ))}
        </ol>
        <h2>Border radii on landscape rectangular shape</h2>
        <ol>
          {Object.entries(borders.radii).map(([key, value], i) => (
            <li
              key={i}
              style={{
                marginBottom: theme.spacing(1),
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '12rem',
                  height: '6rem',
                  border: `${borders.widths.md} solid ${colors.primary.red}`,
                  borderRadius: value
                }}
              >
                {key} = {value}
              </div>
            </li>
          ))}
        </ol>
        <h2>Border radii on portrait rectangular shape</h2>
        <ol>
          {Object.entries(borders.radii).map(([key, value], i) => (
            <li
              key={i}
              style={{
                marginBottom: theme.spacing(1),
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '6rem',
                  height: '12rem',
                  border: `${borders.widths.md} solid ${colors.primary.black}`,
                  borderRadius: value
                }}
              >
                {key} = {value}
              </div>
            </li>
          ))}
        </ol>
        <h2>Special use case: Arch combined with bottom border radius</h2>
        <p>
          Note: The top radius needs to be exactly (or just a little over) the width of the shape, in order to prevent a
          too large top radius to suppress the bottom radius.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '10rem',
            height: '12rem',
            border: `${borders.widths.md} solid ${colors.primary.blue}`,
            borderRadius: `calc(10rem/2) calc(10rem/2) ${borders.radii.md} ${borders.radii.md}`
          }}
        >
          Arch
        </div>
      </div>
    </>
  )
}
