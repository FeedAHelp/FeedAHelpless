import type { Meta, Story } from "@storybook/react";

import type { CloseButtonProps } from "./CloseButton";
import { CloseButton as Component } from "./CloseButton";

export default {
  component: Component,
  title: "ATOMS/Icon Button/Close Button",
  argTypes: {
    onClick: { table: { disable: true } },
  },
} as Meta;

export const CloseButton: Story<CloseButtonProps> = (props) => (
  <Component {...props} />
);
CloseButton.args = {
  title: "",
  iconSize: "medium",
  padding: 0.5,
};
