import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';

export default function Groups() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>Groups</DashboardShell>
    </LayoutContainer>
  );
}
