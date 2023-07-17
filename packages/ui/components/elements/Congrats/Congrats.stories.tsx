import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Congrats } from "./Congrats";

export default {
  title: "ATOMS/Congrats",
  component: Congrats,
  parameters: {
    docs: {
      description: {
        component:
          "Width and Height are a number. Which defines the width and height of the congrats in rem.",
      },
    },
  },
} as ComponentMeta<typeof Congrats>;

const Template: ComponentStory<typeof Congrats> = (args) => (
  <Congrats {...args} />
);

export const Small = Template.bind({});

Small.args = {
  width: 100,
  height: 80,
};

export const Medium = Template.bind({});

Medium.args = {
  width: 150,
  height: 100,
};

export const Large = Template.bind({});

Large.args = {
  width: 250,
  height: 180,
};
