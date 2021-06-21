import Footer from '@/components/Footer';
import HeadIntroSection from '@/components/HeaderIntroSection';
import Header from '@/components/HeaderNavbar';
import Layout from 'styledComponents/Layout';

function Home() {
  return (
    <>
      <Layout>
        <Header />
        <HeadIntroSection getStarted />
      </Layout>
      <Footer />
    </>
  );
}

export default Home;
