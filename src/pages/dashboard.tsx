import Footer from '@/components/Footer';
import GetStarted from '@/components/GetStarted';
import HeadIntroSection from '@/components/HeaderIntroSection';
import Layout from '@/components/Layout';
import { initializeApollo } from '@/hooks/useApolloClient';
import { IS_LOGGED_IN } from 'src/gql/user/queries.graphql';

function Dashboard() {
  return (
    <>
      <Layout>
        <h1>Logged in</h1>
      </Layout>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const client = initializeApollo();
  if (client) {
    const { data } = await client.query({
      query: IS_LOGGED_IN,
      fetchPolicy: 'network-only',
      context: {
        headers: {
          ...context.req.headers,
        },
      },
    });
    if (!data.isLoggedIn) {
      return {
        redirect: {
          permanent: false,
          destination: '/getstarted',
        },
      };
    }
  }
  return {
    props: {
      isLoggedIn: true,
    },
  };
}

export default Dashboard;
