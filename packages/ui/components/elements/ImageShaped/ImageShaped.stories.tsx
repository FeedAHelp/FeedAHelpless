import type { ComponentMeta, ComponentStory } from "@storybook/react";

import type { ImageShapedProps } from "./ImageShaped";
import { ImageShaped } from "./ImageShaped";

export default {
  title: "ATOMS/Image Shaped",
  component: ImageShaped,
} as ComponentMeta<typeof ImageShaped>;

const sources: ImageShapedProps["sources"] = [
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
];

const border: ImageShapedProps["border"] = { width: "md", color: "red" };

const Template: ComponentStory<typeof ImageShaped> = (args) => (
  <ImageShaped {...args} />
);

export const Arch = Template.bind({});
Arch.args = {
  sources,
  alt: "arch",
  shape: "arch",
  border,
};

export const Pill = Template.bind({});
Pill.args = {
  sources,
  alt: "pill",
  shape: "pill",
  border,
};

export const Round = Template.bind({});
Round.args = {
  sources,
  alt: "round",
  shape: "round",
  border,
};

export const SquareWithMediumRoundedCorners = Template.bind({});
SquareWithMediumRoundedCorners.args = {
  sources,
  alt: "md",
  shape: "md",
  border,
};
