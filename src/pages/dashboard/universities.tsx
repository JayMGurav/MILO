import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';

export default function Universities() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>Universities</DashboardShell>
    </LayoutContainer>
  );
}
