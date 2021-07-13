import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import ProfilePageHeader from '@/components/ProfilePage/ProfilePageHeader';

export default function Profile() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        <ProfilePageHeader profileImageUrl="/jaygurav.jpg" />
      </DashboardShell>
    </LayoutContainer>
  );
}
