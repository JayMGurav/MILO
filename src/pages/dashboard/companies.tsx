import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';

export default function Companies() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>Companies</DashboardShell>
    </LayoutContainer>
  );
}
