import type { Meta } from "@storybook/react";
import { breakpoint } from "./device";
import Breakpoint from "./breakpoint";

import { breakpoints } from ".";

const breakpointValues = { ...breakpoints?.values };

export default {
  title: "FOUNDATION/Breakpoints",
  parameters: {
    ...breakpoint,
    docs: {
      description: {
        component:
          "Breakpoints enable the layout to behave in a responsive manner, based on specific viewport widths.",
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export function Sizes() {
  return (
    <>
      <div>
        <h2>Breakpoint names and their width values in pixels</h2>
        <ol>
          {Object.entries(breakpointValues).map(([key, value], i) => (
            <li key={i}>
              {key} = {value}
            </li>
          ))}
        </ol>
        <p>
          Note: The viewport sizes created by the breakpoints can be tried on
          any component by clicking on the viewport icon in the top bar.
        </p>
      </div>
        <Breakpoint />
    </>
  );
}

