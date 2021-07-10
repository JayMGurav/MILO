import styled from 'styled-components';
import Image from 'next/image';

export const UploadProfileDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-background);
  border: 3px solid var(--color-primary2);
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
export const ProfileImageUploaderInput = styled.input`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:after {
    content: '+';
    line-height: 0.99;
    padding: 2px 4px;
    font-size: var(--system-fontSize-xl);
    border-radius: 8px;
    position: absolute;
    bottom: -6%;
    z-index: 9;
    left: 50%;
    transform: translate(-50%, 0%);
    background: var(--color-primary3);
    color: var(--color-iconGray);
  }
`;

export const StyledImage = styled(Image)<{ layout: string }>`
  border-radius: 50%;
  z-index: 1;
`;
