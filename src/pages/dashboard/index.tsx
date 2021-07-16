import { initializeApollo } from '@/hooks/useApolloClient';
import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import { IS_LOGGED_IN } from 'src/gql/user/queries.graphql';
import ComingSoon from '@/components/ComingSoon';

export default function Dashboard() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        <ComingSoon />
      </DashboardShell>
    </LayoutContainer>
  );
}
export async function getServerSideProps(context) {
  const client = initializeApollo();
  console.log(context.req.headers);
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
