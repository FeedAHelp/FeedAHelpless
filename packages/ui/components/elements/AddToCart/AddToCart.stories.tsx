import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddToCart } from "./AddToCart";

export default {
  title: "ATOMS/AddToCart",
  component: AddToCart,
  parameters: {
    docs: {
      description: {
        component: "price is a number. prodRefId is product Id .",
      },
    },
  },
} as ComponentMeta<typeof AddToCart>;

const Template: ComponentStory<typeof AddToCart> = (args) => (
  <AddToCart {...args} />
);

export const AddToCartButton = Template.bind({});

AddToCartButton.args = {
  price: "80",
  prodRefId: "Id",
  top: 50,
  left: 50,
  handleAddItemClick: () => {},
};
