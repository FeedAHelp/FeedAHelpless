import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LoadingContextProvider } from "~/ui/components/contexts/LoadingContext";
import { FormatImageUrlProvider } from "~/ui/components/contexts/FormatImageUrlContext";
import { formatImageUrl } from "~/ui/components/utils/formatImageUrl";
import CmsContextProvider from "~/ui/components/contexts/CmsContext";
import { baseTheme } from "~/ui/components/foundations/theming/theming";
import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { appWithTranslation } from "next-i18next";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <FormatImageUrlProvider value={formatImageUrl}>
      <SessionProvider session={session}>
        <LoadingContextProvider>
          <MuiThemeProvider theme={baseTheme}>
            <CssBaseline />
            <CmsContextProvider>
              <Component {...pageProps} />
            </CmsContextProvider>
          </MuiThemeProvider>
        </LoadingContextProvider>
      </SessionProvider>
    </FormatImageUrlProvider>
  );
};

export default trpc.withTRPC(appWithTranslation(MyApp));
