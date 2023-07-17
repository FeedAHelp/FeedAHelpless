import type { Meta } from '@storybook/react'
import type { Property } from 'csstype'

import { borders } from '../borders'
import { fontSizes } from '../typography'
import { colors } from '.'

export default {
  title: 'Foundation/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Presentation of colors'
      }
    },
    controls: { hideNoControlsWarning: true }
  }
} as Meta

function Group(colorGroup: Record<string, Property.Color>) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {Object.entries(colorGroup).map(([colorKey, colorValue]) => (
          <div
            key={colorKey}
            style={{
              flexBasis: '140px'
            }}
          >
            <div
              style={{
                height: '120px',
                width: '120px',
                borderRadius: borders.radii.md,
                background: colorValue,
                border: `${borders.widths.sm} solid ${colors.neutrals.full_black}`
              }}
            />
            <h4>{colorKey}</h4>
            <p>
              <strong
                style={{
                  fontSize: fontSizes.bodySmall.mobile.fontSize
                }}
              >
                HEX:
              </strong>{' '}
              {colorValue}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export function Primary() {
  return Group(colors.primary)
}
export function Secondary() {
  return Group(colors.secondary)
}
export function Tertiary() {
  return Group(colors.tertiary)
}
export function Neutrals() {
  return Group(colors.neutrals)
}
