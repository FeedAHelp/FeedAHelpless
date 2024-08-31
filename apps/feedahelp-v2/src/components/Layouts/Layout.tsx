import type { ReactNode } from "react";
import type { ThemeName } from "~/ui/components/foundations/theming";
import { ThemeProvider } from "~/ui/components/contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "../../services/store";

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
    <Provider store={store}>
      <ThemeProvider>
        <header>{header}</header>
        <main className="mx-10">{child}</main>
        <footer>{footer}</footer>
      </ThemeProvider>
    </Provider>
  );
}
