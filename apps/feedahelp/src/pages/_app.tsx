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
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

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
            <PayPalScriptProvider
          options={{
            'clientId': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
            currency: 'USD',
          }}
        >
              <Component {...pageProps} />
              </PayPalScriptProvider>
            </CmsContextProvider>
          </MuiThemeProvider>
        </LoadingContextProvider>
      </SessionProvider>
    </FormatImageUrlProvider>

  );
};

export default trpc.withTRPC(appWithTranslation(MyApp));
