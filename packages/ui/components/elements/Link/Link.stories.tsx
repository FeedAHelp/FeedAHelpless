import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Link } from "./Link";

export default {
  title: "ATOMS/Link",
  component: Link,
  argTypes: {
    onClick: { action: "clicked" },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  inline: false,
  children: "Link Primary",
  href: "#",
};
