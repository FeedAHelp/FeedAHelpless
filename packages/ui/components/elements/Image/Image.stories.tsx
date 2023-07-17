import type { Meta, Story } from "@storybook/react";

import type { ImageProps } from "./Image";
import { Image as Component } from "./Image";

export default {
  component: Component,
  title: "ATOMS/Image",
} as Meta;

export const Image: Story<ImageProps> = (props) => {
  return <Component {...props} component={undefined} />;
};
Image.args = {
  sources: [
    {
      mediaMinWidth: "lg",
      srcSet: [950, 1250, 1550, 1850].map((width) => ({
        width,
        src: `https://via.placeholder.com/${width}x${width * 0.5}`,
      })),
    },
    {
      srcSet: [300, 600, 900, 1200].map((width) => ({
        width,
        src: `https://via.placeholder.com/${width}`,
      })),
    },
  ],
  alt: "example",
};
