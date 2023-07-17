import styled from "@emotion/styled";
import type { ComponentMeta, ComponentStory, Story } from "@storybook/react";

import type { IconProps } from "./Icon";
import { Icon, iconNames } from "./Icon";
import { iconSizes } from "./Icon.styled";

export default {
  title: "ATOMS/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing(1)};
`;

const StyledBox = styled.div<{ width?: string }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1, 0)};
  text-align: center;
  width: ${({ width }) => width};
`;

export const Default = Template.bind({});
Default.args = {
  name: "calendarAdded",
};

export const CustomColored = Template.bind({});
CustomColored.args = {
  name: "calendarAdded",
  color: "#d70100", // primary red
};

export const Sizes: Story<IconProps> = (props) => {
  return (
    <>
      {Object.entries(iconSizes).map(([key, value], i) => (
        <StyledBox key={i}>
          <Icon
            {...props}
            name="calendarAdded"
            size={key as IconProps["size"]}
          />
          <p>
            {key}
            <br />
            {value} x {value} (= {parseFloat(value) * 16}px x{" "}
            {parseFloat(value) * 16}px)
          </p>
        </StyledBox>
      ))}
    </>
  );
};

// Note: Since the Sizes story already is showing all available sizes, the control for the "size" argument does not make sense here, so it is being disabled.
Sizes.argTypes = {
  size: {
    control: false,
  },
};

export const AllIcons: Story<IconProps> = (props) => {
  return (
    <StyledContainer>
      {iconNames.map((iconName) => {
        return (
          <StyledBox key={iconName} width="12rem">
            <Icon {...props} name={iconName} />
            <p>{iconName}</p>
          </StyledBox>
        );
      })}
    </StyledContainer>
  );
};

// Note: Since the AllIcons story already is showing all available names, the control for the "name" argument does not make sense here, so it is being disabled.
AllIcons.argTypes = {
  name: {
    control: false,
  },
};
