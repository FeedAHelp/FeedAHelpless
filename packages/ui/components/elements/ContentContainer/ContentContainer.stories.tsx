import styled from "@emotion/styled";
import type { Meta, Story } from "@storybook/react";

import { GridColumn } from "../GridColumn";
import { GridRow } from "../GridRow";
import type { ContentContainerProps } from "./ContentContainer";
import { ContentContainer as Component } from "./ContentContainer";

export default {
  component: Component,
  title: "ATOMS/Content Container",
  parameters: { layout: "fullscreen" },
} as Meta;

const StyledBox = styled.div`
  background: #eee;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`;

export const ContentContainer: Story<ContentContainerProps> = (props) => {
  return (
    <Component {...props}>
      <StyledBox>This box is inside a content container.</StyledBox>

      <Component {...props}>
        <StyledBox>This box is inside a nested content container.</StyledBox>
      </Component>

      <GridRow>
        <GridColumn xs={6}>
          <Component {...props}>
            <StyledBox>
              This box is inside a 2-column layout and a nested content
              container.
            </StyledBox>
          </Component>
        </GridColumn>
        <GridColumn xs={6}>
          <Component {...props}>
            <StyledBox>
              This box is inside a 2-column layout and a nested content
              container.
            </StyledBox>
          </Component>
        </GridColumn>
      </GridRow>
    </Component>
  );
};
ContentContainer.args = {
  tag: "div",
  withMaxWidth: true,
  withNestedPadding: false,
};
