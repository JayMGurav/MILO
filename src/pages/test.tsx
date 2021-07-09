import useViewportSize from '@/hooks/useViewportSize';
import LayoutContainer from '@/styledComponents/LayoutContainer';

import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import DashboardShell from '@/components/DashboardShell';

export default function Try() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>Hello Dashboard</DashboardShell>
    </LayoutContainer>
  );
}
