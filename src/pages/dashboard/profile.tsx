import { useQuery } from '@apollo/client';

import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import ProfilePageHeader from '@/components/ProfilePage/ProfilePageHeader';
import ProfileDanger from '@/components/ProfilePage/ProfileDanger';
import { GET_MY_PROFILE_DATA } from '@/gql/user/queries.graphql';
import ProfileInfo from '@/components/ProfilePage/ProfileInfo';
import { Loader } from 'react-feather';

export default function Profile() {
  const { data, loading } = useQuery(GET_MY_PROFILE_DATA, {
    fetchPolicy: 'cache-and-network',
  });

  const me = data?.me;
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        {loading && <Loader size="48px" />}
        {me && (
          <>
            <ProfilePageHeader profileImageUrl={me?.avatar} />
            <ProfileInfo me={me} />
            <ProfileDanger />
          </>
        )}
      </DashboardShell>
    </LayoutContainer>
  );
}
