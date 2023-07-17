import type { Meta, Story } from "@storybook/react";

import type { TableCellProps, TableProps } from "./Tables";
import {
  Tables as Component,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "./Tables";

export default {
  title: "ATOMS/Tables",
  argTypes: {
    align: {
      control: { type: "inline-radio" },
      options: ["left", "center", "right"],
    },
  },
} as Meta;

type StoryProps = {
  columns: number;
  rows: number;
  caption: TableProps["caption"];
  align: Required<TableCellProps>["align"];
};

export const Table: Story<StoryProps> = ({ columns, rows, caption, align }) => (
  <div style={{ minWidth: 320 }}>
    <Component caption={caption}>
      <TableHead>
        <TableRow>
          {Array(columns)
            .fill(null)
            .map((_col, i) => {
              const colValue = `Col${i + 1}`;

              return (
                <TableCell
                  align={align}
                  key={colValue}
                  typography="h6BoldSerif"
                >
                  {colValue}
                </TableCell>
              );
            })}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array(rows)
          .fill(null)
          .map((_row, i) => (
            <TableRow key={i}>
              {Array(columns)
                .fill(null)
                .map((_col, j) => {
                  const cellValue = `Cell${i + 1}.${j + 1}`;

                  return (
                    <TableCell align={align} key={cellValue}>
                      {cellValue}
                    </TableCell>
                  );
                })}
            </TableRow>
          ))}
      </TableBody>
    </Component>
  </div>
);

Table.args = {
  columns: 3,
  rows: 3,
  caption: "table",
  align: "left",
};
