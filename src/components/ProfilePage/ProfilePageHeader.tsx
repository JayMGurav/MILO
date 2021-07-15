import Avatar from '../Avatar';
import { ProfileHeaderImage, ProfileImage } from './ProfilePage.styles';

function ProfilePageHeader({ profileImageUrl }: { profileImageUrl: string }) {
  return (
    <ProfileHeaderImage>
      <ProfileImage>
        <Avatar src={profileImageUrl} size={120} />
      </ProfileImage>
    </ProfileHeaderImage>
  );
}

export default ProfilePageHeader;
