import type { Meta } from "@storybook/react";

import { VisuallyHidden as Component } from "./VisuallyHidden";

export default {
  component: Component,
  title: "ATOMS/Visually Hidden",
} as Meta;

export function VisuallyHidden() {
  return (
    <p>
      The following text is visually hidden: <Component>I am hidden!</Component>
    </p>
  );
}
