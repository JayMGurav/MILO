import styled from 'styled-components';
import Image from 'next/image';
import DefaultAvatar from './DefaultAvatar';

const AvatarSVG = styled.svg`
  margin: 0;
  background: var(--color-gray2);
  border-radius: 50%;
  > path {
    fill: var(--color-iconGray);
  }
`;
const AvatarDiv = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: var(--color-foreground);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  ${AvatarSVG} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

function Avatar({ src, size }: { src: string; size: number }) {
  console.log({ src, size });
  return (
    <AvatarDiv width={`${size}px`} height={`${size}px`}>
      <AvatarSVG viewBox="0 0 128 128" width={`${size}px`} height={`${size}px`}>
        <path d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" />
        <path d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" />
      </AvatarSVG>
      <Image
        src={src}
        width={`${size}px`}
        height={`${size}px`}
        placeholder="blur"
      />
    </AvatarDiv>
  );
}

export default Avatar;