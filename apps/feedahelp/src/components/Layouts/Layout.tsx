import type { ReactNode } from "react";
import type { ThemeName } from "../../../../../packages/ui/components/foundations/theming";
import { ThemeProvider } from "../../../../../packages/ui/components/contexts/ThemeContext";

type LayoutProps = {
  theme?: ThemeName;
  header?: ReactNode;
  h1?: string;
  child: ReactNode;
  footer?: ReactNode;
  chat?: {
    url: string;
    isOpen: boolean;
    handleClose: () => void;
  };
};

export function Layout({ header, child, footer }: LayoutProps) {
  return (
    <ThemeProvider>
      <header>{header}</header>
      <main>{child}</main>
      <footer>{footer}</footer>
    </ThemeProvider>
  );
}
