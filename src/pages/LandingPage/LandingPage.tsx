import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Layout className="px-64">
        <Header />
        <Hero />
      </Layout>
      <Footer />
    </>
  );
};

export default LandingPage;
