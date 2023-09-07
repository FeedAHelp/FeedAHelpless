import CssBaseline from "@mui/material/CssBaseline";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LoadingContextProvider } from "~/ui/components/contexts/LoadingContext";
import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { appWithTranslation } from "next-i18next";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <LoadingContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </LoadingContextProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(appWithTranslation(MyApp));
