import type { Meta } from "@storybook/react";

import { baseTheme } from "../theming";
import { spacingFactors } from "./";

export default {
  title: "Foundation/Spacing",
  parameters: {
    docs: {
      description: {
        component: "Use: theme.spacing(factor) => (factor)rem",
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export function Spacing() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {spacingFactors.map((factor) => (
          <div
            key={factor}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              margin: "0.5rem",
            }}
          >
            <div
              style={{
                width: baseTheme.spacing(factor),
                height: baseTheme.spacing(factor),
                marginBottom: "0.5rem",
                background: Object.values(baseTheme.colors.tertiary)[
                  Number.isInteger(factor % 9) ? factor % 9 : 0
                ],
              }}
            />
            <span
              style={{
                fontSize: 13,
              }}
            >
              {factor}rem ({16 * factor}px)
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
