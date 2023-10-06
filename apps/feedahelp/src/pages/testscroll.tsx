import dynamic from "next/dynamic";
import { Layout } from "../components/Layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { GenericScrollbar } from "./../../../../packages/ui/components/elements/GenericScrollbar/GenericScrollbar";

const Header = dynamic(
  import("../components/ui/features/header").then((mod) => mod.Header)
);

const Footer = dynamic(
  import("../components/ui/features/footer").then((mod) => mod.Footer)
);

const Index: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <Layout
      header={<Header />}
      child={
        <>
          <div className="flex min-h-screen flex-col items-center justify-center text-fuchsia-600">
            <GenericScrollbar bg_color="gray" width="500px" height="300px">
              <div>
                <p>
                  Lorem ipsum is typically a corrupted version of De finibus
                  bonorum et malorum, a 1st-century BC text by the Roman
                  statesman and philosopher Cicero, with words altered, added,
                  and removed to make it nonsensical and improper Latin. The
                  first two words themselves are a truncation of &apos;dolorem ipsum&apos;
                  (&apos;pain itself&apos;). Lorem ipsum is typically a corrupted version
                  of De finibus bonorum et malorum, a 1st-century BC text by the
                  Roman statesman and philosopher Cicero, with words altered,
                  added, and removed to make it nonsensical and improper Latin.
                  The first two words themselves are a truncation of &apos;dolorem
                  ipsum&apos; (&apos;pain itself&apos;).
                </p>
              </div>

              <div>
                <p>
                  Lorem ipsum is typically a corrupted version of De finibus
                  bonorum et malorum, a 1st-century BC text by the Roman
                  statesman and philosopher Cicero, with words altered, added,
                  and removed to make it nonsensical and improper Latin. The
                  first two words themselves are a truncation of &apos;dolorem ipsum&apos;
                  (&apos;pain itself&apos;). Lorem ipsum is typically a corrupted version
                  of De finibus bonorum et malorum, a 1st-century BC text by the
                  Roman statesman and philosopher Cicero, with words altered,
                  added, and removed to make it nonsensical and improper Latin.
                  The first two words themselves are a truncation of &apos;dolorem
                  ipsum&apos; (&apos;pain itself&apos;).
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum is typically a corrupted version of De finibus
                  bonorum et malorum, a 1st-century BC text by the Roman
                  statesman and philosopher Cicero, with words altered, added,
                  and removed to make it nonsensical and improper Latin. The
                  first two words themselves are a truncation of &apos;dolorem ipsum&apos;
                  (&apos;pain itself&apos;). Lorem ipsum is typically a corrupted version
                  of De finibus bonorum et malorum, a 1st-century BC text by the
                  Roman statesman and philosopher Cicero, with words altered,
                  added, and removed to make it nonsensical and improper Latin.
                  The first two words themselves are a truncation of &apos;dolorem
                  ipsum&apos; (&apos;pain itself&apos;).
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum is typically a corrupted version of De finibus
                  bonorum et malorum, a 1st-century BC text by the Roman
                  statesman and philosopher Cicero, with words altered, added,
                  and removed to make it nonsensical and improper Latin. The
                  first two words themselves are a truncation of &apos;dolorem ipsum&apos;
                  (&apos;pain itself&apos;). Lorem ipsum is typically a corrupted version
                  of De finibus bonorum et malorum, a 1st-century BC text by the
                  Roman statesman and philosopher Cicero, with words altered,
                  added, and removed to make it nonsensical and improper Latin.
                  The first two words themselves are a truncation of &apos;dolorem
                  ipsum&apos; (&apos;pain itself&apos;).
                </p>
              </div>
            </GenericScrollbar>
          </div>
        </>
      }
      footer={<Footer />}
    />
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "language",
        "footer",
      ])),
    },
  };
};
