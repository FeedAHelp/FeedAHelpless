import type { ReactNode } from "react";
import { useContext } from "react";
import type { ThemeName } from "~/ui/components/foundations/theming";
import { ThemeProvider } from "~/ui/components/contexts/ThemeContext";
import { useLoadingContext } from "~/ui/components/contexts/LoadingContext";
import CustomSpinner from "~/ui/components/elements/GenericSpinner/CustomSpinner";

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
  const { isLoading } = useLoadingContext();

  return (
    <ThemeProvider>
      <header>{header}</header>
      <main>{child}</main>
      <footer>{footer}</footer>
      <CustomSpinner isLoading={isLoading}></CustomSpinner>
    </ThemeProvider>
  );
}
