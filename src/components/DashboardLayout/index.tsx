import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '../DashboardShell';
import DashboardHeaderNav from '../DashboardHeaderNav';

function DashboardLayout({ children }) {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>{children}</DashboardShell>
    </LayoutContainer>
  );
}

export default DashboardLayout;
