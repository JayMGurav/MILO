import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import ComingSoon from '@/components/ComingSoon';

export default function Events() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        <ComingSoon />
      </DashboardShell>
    </LayoutContainer>
  );
}
