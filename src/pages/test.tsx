import useViewportSize from '@/hooks/useViewportSize';
import LayoutContainer from '@/styledComponents/LayoutContainer';

import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import DashboardShell from '@/components/DashboardShell';

import ProfileImageUploader from '@/components/ProfileImageUploader';

export default function Try() {
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        <ProfileImageUploader />
      </DashboardShell>
    </LayoutContainer>
  );
}
