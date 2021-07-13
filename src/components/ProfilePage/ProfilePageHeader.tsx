import styled from 'styled-components';

import Avatar from '../Avatar';

const ProfileHeaderImage = styled.div`
  width: var(--size-full);
  height: 250px;
  border-radius: var(--radius-xl);
  background: url('/header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const ProfileImage = styled.div`
  border: 6px solid var(--color-foreground);
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

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
