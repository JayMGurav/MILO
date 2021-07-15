import DefaultAvatar from '@/components/Avatar/DefaultAvatar';
import {
  UploadProfileDiv,
  ProfileImageUploaderInput,
  StyledImage,
} from './ProfileImageUploader.styles';

function ProfileImageUploader({
  url,
  handleFileChange,
}: {
  url: string | ArrayBuffer;
  handleFileChange: (e: any) => void;
}) {
  return (
    <>
      <UploadProfileDiv>
        <DefaultAvatar size={50} />
        <ProfileImageUploaderInput
          type="file"
          id="profileImg"
          name="profileImg"
          accept="image/*"
          aria-label="profile image uploader"
          onChange={handleFileChange}
        />
        {url && (
          <StyledImage
            src={url as string}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        )}
      </UploadProfileDiv>
    </>
  );
}

export default ProfileImageUploader;
