import { useQuery } from '@apollo/client';

import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import ProfilePageHeader from '@/components/ProfilePage/ProfilePageHeader';
import ProfileDanger from '@/components/ProfilePage/ProfileDanger';
import ProfileInfo from '@/components/ProfilePage/ProfileInfo';
import Loading from '@/components/Loading';
import { GET_MY_PROFILE_DATA } from '@/gql/user/queries.graphql';

export default function Profile() {
  const { data, loading } = useQuery(GET_MY_PROFILE_DATA, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return (
      <LayoutContainer>
        <DashboardHeaderNav />
        <DashboardShell>
          <Loading size={20} fill="var(--color-primary)" />
        </DashboardShell>
      </LayoutContainer>
    );
  }

  const me = data?.me;
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
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
