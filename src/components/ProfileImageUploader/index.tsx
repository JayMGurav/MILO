import useFileUploader from '../../hooks/useFileUploader';
import DefaultAvatar from '@/components/Avatar/DefaultAvatar';
import ProgressBar from '@/components/ProgressBar';
import {
  UploadProfileDiv,
  ProfileImageUploaderInput,
  StyledImage,
} from './ProfileImageUploader.styles';

// const { url, uploadProgress, upload, handleFileChange } =
//   useFileUploader('profile_images');
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
        <DefaultAvatar width="50px" height="50px" />
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

/* <button onClick={() => upload({ username: 'jay' })}>click</button>
<ProgressBar progress={uploadProgress} />  */
