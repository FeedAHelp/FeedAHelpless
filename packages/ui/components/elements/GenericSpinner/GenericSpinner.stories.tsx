import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GenericSpinner } from "./GenericSpinner";

export default {
  title: "ATOMS/GenericSpinner",
  component: GenericSpinner,
  parameters: {
    docs: {
      description: {
        component:
          "Diameter is a number. Which defines the diameter of the spinner in pixels.",
      },
    },
  },
} as ComponentMeta<typeof GenericSpinner>;

const Template: ComponentStory<typeof GenericSpinner> = (args) => (
  <GenericSpinner {...args} />
);

export const Small = Template.bind({});

Small.args = {
  diameter: 80,
};

export const Medium = Template.bind({});

Medium.args = {
  diameter: 150,
};

export const Large = Template.bind({});

Large.args = {
  diameter: 250,
};
