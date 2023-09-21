import dynamic from "next/dynamic";
import { Layout } from "../components/Layouts";
import AdminLogin from "~/components/ui/features/adminLogin/AdminLogin";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { useTranslation } from 'next-i18next'

const Header = dynamic(
  import("../components/ui/features/header").then((mod) => mod.Header)
);

const Footer = dynamic(
  import("../components/ui/features/footer").then((mod) => mod.Footer)
);

const Index: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (_props) => {
  return (
    <Layout
      header={<Header />}
      child={
        <>
          <div className="flex min-h-screen flex-col items-center justify-center text-fuchsia-600">
            <AdminLogin />
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
      ...(await serverSideTranslations(locale ?? 'en', [
        "common",
        "language"
      ])),
    },
  };
}
