import Footer from '@/components/Footer';
import GetStarted from '@/components/GetStarted';
import Layout from '@/components/Layout';

import { initializeApollo } from '@/hooks/useApolloClient';
import { IS_LOGGED_IN } from 'src/gql/user/queries.graphql';
function Login() {
  return (
    <>
      <Layout>
        <GetStarted />
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
      context: {
        headers: {
          ...context.req.headers,
        },
      },
    });
    if (data.isLoggedIn) {
      return {
        redirect: {
          permanent: false,
          destination: '/dashboard',
        },
      };
    }
  }
  return {
    props: {
      isLoggedIn: false,
    },
  };
}

export default Login;
