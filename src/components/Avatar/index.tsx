import Image from 'next/image';

import { AvatarDiv } from './Avatar.styles';
import DefaultAvatar from './DefaultAvatar';

function Avatar({ src, size }: { src: string; size: number }) {
  return (
    <AvatarDiv width={`${size}px`} height={`${size}px`}>
      <DefaultAvatar size={size} />
      {src && (
        <Image
          src={src}
          width={`${size}px`}
          height={`${size}px`}
          placeholder="blur"
        />
      )}
    </AvatarDiv>
  );
}

export default Avatar;
