import { type } from "os";
import React from "react";

type Props = {
  title?: string;
  list: string[];
  children?: React.ReactNode;
};
const SimpleList = ({ title, list, children }: Props) => {
  return (
    <ul role="menu">
      <li>
        <span className="dropdown-link-title text-lg font-bold">{title}</span>
      </li>
      {list?.map((item: string, index: number) => (
        <li role="menuitem" key={`${index}`}>
          <a className="dropdown-link" href="#branding">
            {item}
          </a>
        </li>
      ))}
      {children}
    </ul>
  );
};

export default SimpleList;
