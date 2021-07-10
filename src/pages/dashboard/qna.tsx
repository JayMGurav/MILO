import LayoutContainer from '@/styledComponents/LayoutContainer';
import DashboardShell from '@/components/DashboardShell';
import DashboardHeaderNav from '@/components/DashboardHeaderNav';

export default function QnA() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>qna</DashboardShell>
    </LayoutContainer>
  );
}
