import type { ComponentStory, Meta } from "@storybook/react";

import { Paragraph } from "./Paragraph";

export default {
  component: Paragraph,
  title: "ATOMS/Paragraph",
} as Meta;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);
const sampleParagraphText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum malesuada lorem nec fringilla. Nunc laoreet auctor diam eget bibendum. Morbi sed metus vel leo gravida laoreet luctus id elit. Fusce in placerat nisl. Cras fermentum orci ac pulvinar bibendum. Vivamus suscipit ligula vitae scelerisque placerat. Ut volutpat purus scelerisque venenatis cursus. In et nisi vestibulum metus dignissim volutpat.
`;

export const Large = Template.bind({});
Large.args = {
  children: sampleParagraphText,
  variant: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  children: sampleParagraphText,
  variant: "medium",
};

export const Small = Template.bind({});
Small.args = {
  children: sampleParagraphText,
  variant: "small",
};

export const Cta = Template.bind({});
Cta.args = {
  children: sampleParagraphText,
  variant: "cta",
};

export const Caption = Template.bind({});
Caption.args = {
  children: sampleParagraphText,
  variant: "caption",
};
