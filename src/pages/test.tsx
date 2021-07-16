import LayoutContainer from '@/styledComponents/LayoutContainer';

import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import DashboardShell from '@/components/DashboardShell';
import ComingSoon from '@/components/ComingSoon';

export default function Try() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        <ComingSoon />
      </DashboardShell>
    </LayoutContainer>
  );
}
