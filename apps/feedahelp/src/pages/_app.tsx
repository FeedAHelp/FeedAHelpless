import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LoadingContextProvider } from "../../../../packages/ui/components/contexts/LoadingContext";
import { type AppType } from "next/app";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <LoadingContextProvider>
        <Component {...pageProps} />
      </LoadingContextProvider>
    </SessionProvider>
  );
};

export default MyApp;

