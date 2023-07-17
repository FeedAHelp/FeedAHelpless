import type { Meta } from "@storybook/react";

import type { HeadingProps } from "./Heading";
import { Heading as Component } from "./Heading";

export default {
  component: Component,
  title: "ATOMS/Heading",
} as Meta;

export function Heading(props: HeadingProps) {
  return <Component {...props} />;
}
Heading.args = {
  children: "Heading",
  tag: "h2",
  variant: "h1BigBoldSerif",
};
