import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Price } from "./Price";

export default {
  title: "ATOMS/Price",
  component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const Large = Template.bind({});
Large.args = {
  priceData: {
    price: {
      amount: 2599,
      centAmount: 2599,
      formattedPrice: "25.99 ৳",
      currencyCode: "Taka",
      formattedWasPrice: undefined,
    },
    priceRange: undefined,
  },
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  priceData: {
    price: {
      amount: 2599,
      centAmount: 2599,
      formattedPrice: "25.99 ৳",
      currencyCode: "Taka",
      formattedWasPrice: undefined,
    },
    priceRange: undefined,
  },
  size: "medium",
};

export const MediumWithoutVAT = Template.bind({});
MediumWithoutVAT.args = {
  priceData: {
    price: {
      amount: 2599,
      centAmount: 2599,
      formattedPrice: "25.99 ৳",
      currencyCode: "Taka",
      formattedWasPrice: undefined,
    },
    priceRange: undefined,
    isVATIncluded: false,
  },
  size: "medium",
  excludedVATLabel: "excl. VAT",
};

export const SmallWithRange = Template.bind({});
SmallWithRange.args = {
  priceData: {
    price: undefined,
    priceRange: {
      minPrice: {
        amount: 24.99,
        centAmount: 2499,
        formattedPrice: "৳24.99",
        currencyCode: "Taka",
        formattedWasPrice: "৳30.99",
      },
      maxPrice: {
        amount: 30.99,
        centAmount: 3099,
        formattedPrice: "৳30.99",
        currencyCode: "Taka",
        formattedWasPrice: "৳30.99",
      },
    },
  },
  size: "small",
};

export const SmallWithWasPrice = Template.bind({});
SmallWithWasPrice.args = {
  priceData: {
    price: {
      amount: 2599,
      centAmount: 2599,
      formattedPrice: "25.99 ৳",
      currencyCode: "Taka",
      formattedWasPrice: "26.99 ৳",
    },
  },
  size: "small",
  currentPriceInstruction: "Price reduced to",
  wasPriceInstruction: "from the original price of",
};

export const MediumWithWasPrice = Template.bind({});
MediumWithWasPrice.args = {
  priceData: {
    price: {
      amount: 2599,
      centAmount: 2599,
      formattedPrice: "25.99 ৳",
      currencyCode: "Taka",
      formattedWasPrice: "26.99 ৳",
    },
  },
  size: "medium",
  currentPriceInstruction: "Price reduced to",
  wasPriceInstruction: "from the original price of",
};

export const LargeWithStartingPrice = Template.bind({});
LargeWithStartingPrice.args = {
  priceData: {
    price: undefined,
    priceRange: undefined,
    startingPrice: "Starting at ৳30 each",
  },
  size: "large",
};

export const LargeWithPricePerWeight = Template.bind({});
LargeWithPricePerWeight.args = {
  priceData: {
    price: {
      amount: 8700,
      centAmount: 8700,
      formattedPrice: "87.00 ৳",
      currencyCode: "Taka",
      formattedWasPrice: undefined,
    },
    priceRange: undefined,
    pricePerWeight: "58.00 ৳ per kg",
  },
  size: "large",
};

export const LargeWithPricePerWeighAndWasPrice = Template.bind({});
LargeWithPricePerWeighAndWasPrice.args = {
  priceData: {
    price: {
      amount: 8700,
      centAmount: 8700,
      formattedPrice: "87.00 ৳",
      currencyCode: "Taka",
      formattedWasPrice: "99.99 ৳",
    },
    priceRange: undefined,
    pricePerWeight: "58.00 ৳ per kg",
  },
  size: "large",
};

export const LargeWithPricePerWeighAndWasPriceWithoutVAT = Template.bind({});
LargeWithPricePerWeighAndWasPriceWithoutVAT.args = {
  priceData: {
    price: {
      amount: 8700,
      centAmount: 8700,
      formattedPrice: "87.00 ৳",
      currencyCode: "Taka",
      formattedWasPrice: "99.99 ৳",
    },
    priceRange: undefined,
    pricePerWeight: "58.00 ৳ per kg",
    isVATIncluded: false,
  },
  size: "large",
  excludedVATLabel: "excl. VAT",
};
