import dynamic from "next/dynamic";
import { Layout } from "../components/Layouts";
import { MainPage } from "../components/ui/features/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const Header = dynamic(
  import("../components/ui/features/header").then((mod) => mod.Header)
);

const Footer = dynamic(
  import("../components/ui/features/footer").then((mod) => mod.Footer)
);

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (_props) => {
  return (
    <Layout
      header={<Header />}
      child={
        <>
          <div className=" min-h-screen  items-center justify-center text-fuchsia-600">
            <MainPage />
          </div>
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
      ...(await serverSideTranslations(locale ?? 'en', [
        "language"
      ])),
    },
  };
}
