import type { Meta, Story } from "@storybook/react";

import type { UnstyledLinkProps } from "./UnstyledLink";
import { UnstyledLink as Component } from "./UnstyledLink";

export default {
  component: Component,
  title: "ATOMS/Unstyled Link",
} as Meta;

export const UnstyledLink: Story<UnstyledLinkProps> = () => (
  <Component href={"#"}>
    You can use me if you need a link with no styles!
  </Component>
);
UnstyledLink.args = {};
