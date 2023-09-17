import dynamic from "next/dynamic";
import { Layout } from "../components/Layouts";
import { MainPage } from "../components/ui/features/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Header = dynamic(
  import("../components/ui/features/header").then((mod) => mod.Header)
);

const Footer = dynamic(
  import("../components/ui/features/footer").then((mod) => mod.Footer)
);

const Index = () => {
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "language",
        "contentBanner",
      ])),
    },
  };
}
