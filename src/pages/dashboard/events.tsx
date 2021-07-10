import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';

export default function Events() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>Events</DashboardShell>
    </LayoutContainer>
  );
}
