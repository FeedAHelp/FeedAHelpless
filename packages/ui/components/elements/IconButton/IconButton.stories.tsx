import type { Meta, Story } from "@storybook/react";

import type { IconButtonProps } from "./IconButton";
import { IconButton as Component } from "./IconButton";

export default {
  component: Component,
  title: "ATOMS/Icon Button",
  argTypes: {
    onClick: { table: { disable: true } },
  },
} as Meta;

export const Default: Story<IconButtonProps> = (props) => (
  <Component {...props} />
);
Default.args = {
  title: "title",
  iconName: "add",
  iconSize: "medium",
  padding: 0.5,
};
