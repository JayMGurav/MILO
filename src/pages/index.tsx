import Footer from '@/components/Footer';
import HeadIntroSection from '@/components/HeaderIntroSection';
import Layout from '@/components/Layout';

function Home() {
  return <HeadIntroSection getStarted />;
}

Home.getLayout = (page) => (
  <>
    <Layout>{page}</Layout>
    <Footer />
  </>
);

export default Home;
