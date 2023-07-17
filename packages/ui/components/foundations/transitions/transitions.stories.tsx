import type { Duration, Easing } from "@mui/material";
import type { Meta } from "@storybook/react";

import { baseTheme } from "../theming";

export default {
  title: "Foundation/Transitions",
  parameters: {
    docs: {
      description: {
        component: "Transition defaults.",
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

function mapToListItems(object: Duration | Easing) {
  return Object.entries(object).map(([key, value], i) => (
    <li key={i}>
      {key} = {value}
    </li>
  ));
}

export function TransitionDurations() {
  return (
    <>
      <div>
        <h2>Transition durations</h2>
        <ol>{mapToListItems(baseTheme.transitions.duration)}</ol>
      </div>
    </>
  );
}

export function TransitionEasings() {
  return (
    <>
      <div>
        <h2>Transition easings (aka Transition timing functions)</h2>
        <ol>{mapToListItems(baseTheme.transitions.easing)}</ol>
      </div>
    </>
  );
}
