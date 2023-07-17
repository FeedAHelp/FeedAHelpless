import type { Meta, Story } from "@storybook/react";

import type { PlayButtonProps } from "./PlayButton";
import { PlayButton } from "./PlayButton";

export default {
  title: "ATOMS/Play Button",
  component: PlayButton,
} as Meta;

const Template: Story<PlayButtonProps> = ({ children, ...props }) => (
  <PlayButton {...props}>{children}</PlayButton>
);

export const Default = Template.bind({});
Default.args = {
  ariaLabel: "Play button",
  title: "Play button",
};
