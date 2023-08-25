import React from "react";
import { render } from "@testing-library/react";
import { act } from 'react-dom/test-utils'; 
import { Header } from "./Header";


jest.mock('next/dynamic', () => () => {
    const DynamicComponent = ({ children }:{children:React.ReactNode}) => children;
    DynamicComponent.displayName = 'DynamicComponent';
    return DynamicComponent;
  });

describe("Header Component", () => {
  it("renders without crashing", () => {
    act(() => {
      render(<Header />);
    });
  });
});