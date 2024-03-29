import Footer from '@/components/Footer';
import GetStarted from '@/components/GetStarted';
import Layout from '@/components/Layout';

// import { initializeApollo } from '@/hooks/useApolloClient';
// import { IS_LOGGED_IN } from 'src/gql/user/queries.graphql';
function Login() {
  return <GetStarted />;
}

Login.getLayout = (page) => (
  <>
    <Layout>{page}</Layout>
    <Footer />
  </>
);

export default Login;
