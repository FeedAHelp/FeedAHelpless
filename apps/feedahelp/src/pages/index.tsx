import dynamic from "next/dynamic";
import { Layout } from "../components/Layouts";
import { MainPage } from "../components/ui/features/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

const Header = dynamic(
  import("../components/ui/features/header").then((mod) => mod.Header)
);

const Footer = dynamic(
  import("../components/ui/features/footer").then((mod) => mod.Footer)
);

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return (
    <Layout
      header={<Header />}
      child={
        <>
          <MainPage />
        </>
      }
      footer={<Footer />}
    />
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
