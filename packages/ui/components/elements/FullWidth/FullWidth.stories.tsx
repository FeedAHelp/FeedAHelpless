import styled from "@emotion/styled";
import type { Meta, Story } from "@storybook/react";

import type { FullWidthProps } from "./FullWidth";
import { FullWidth as Component } from "./FullWidth";

export default {
  component: Component,
  title: "ATOMS/Full Width",
  parameters: { layout: "fullscreen" },
} as Meta;

const StyledBox = styled.div`
  background: #eee;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`;

export const FullWidth: Story<FullWidthProps> = ({ until }) => {
  return (
    <>
      <StyledBox>This box will always be content width.</StyledBox>

      <Component until={until}>
        <StyledBox>{`This box will be full width until '${until}', and will then be content width.`}</StyledBox>
      </Component>
    </>
  );
};
FullWidth.args = {
  until: "lg",
};
