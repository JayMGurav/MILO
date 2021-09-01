import { useQuery } from '@apollo/client';

import ProfilePageHeader from '@/components/ProfilePage/ProfilePageHeader';
import ProfileDanger from '@/components/ProfilePage/ProfileDanger';
import ProfileInfo from '@/components/ProfilePage/ProfileInfo';
import Loading from '@/components/Loading';
import { GET_MY_PROFILE_DATA } from '@/gql/user/queries.graphql';
import DashboardLayout from '@/components/DashboardLayout';

export default function Profile() {
  const { data, loading } = useQuery(GET_MY_PROFILE_DATA, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <Loading size={20} fill="var(--color-primary)" />;
  }

  const me = data?.me;

  return (
    me && (
      <>
        <ProfilePageHeader profileImageUrl={me?.avatar} />
        <ProfileInfo me={me} />
        <ProfileDanger />
      </>
    )
  );
}

Profile.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
