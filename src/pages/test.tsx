import LayoutContainer from '@/styledComponents/LayoutContainer';

import DashboardHeaderNav from '@/components/DashboardHeaderNav';
import DashboardShell from '@/components/DashboardShell';

import ProfilePageHeader from '@/components/ProfilePage/ProfilePageHeader';
import ProfileImageUploader from '@/components/ProfileImageUploader';
import ProgressBar from '@/components/ProgressBar';
import useFileUploader from '@/hooks/useFileUploader';

export default function Try() {
  const { url, uploadProgress, upload, handleFileChange } =
    useFileUploader('profile_images');

  // console.log(url);
  return (
    <LayoutContainer>
      <DashboardHeaderNav />
      <DashboardShell>
        <ProfilePageHeader profileImageUrl="/jaygurav.jpg" />
      </DashboardShell>
    </LayoutContainer>
  );
}
