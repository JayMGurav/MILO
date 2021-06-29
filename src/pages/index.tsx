import Footer from '@/components/Footer';
import HeadIntroSection from '@/components/HeaderIntroSection';
import Layout from '@/components/Layout';

function Home() {
  return (
    <>
      <Layout>
        <HeadIntroSection getStarted />
      </Layout>
      <Footer />
    </>
  );
}

export default Home;
