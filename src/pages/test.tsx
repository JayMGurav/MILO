import LayoutContainer from '@/styledComponents/LayoutContainer';

import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import DashboardShell from '@/components/DashboardShell';

import ProfilePageHeader from '@/components/ProfilePage/ProfilePageHeader';

export default function Try() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        <ProfilePageHeader profileImageUrl="/jaygurav.jpg" />
      </DashboardShell>
    </LayoutContainer>
  );
}
