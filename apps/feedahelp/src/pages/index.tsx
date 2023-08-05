import dynamic from "next/dynamic";
import { Layout } from "../components/Layouts";

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
          <div className="flex min-h-screen flex-col items-center justify-center text-fuchsia-600">
            FeedAHelp
          </div>
        </>
      }
      footer={<Footer />}
    />
  );
};

export default Index;
