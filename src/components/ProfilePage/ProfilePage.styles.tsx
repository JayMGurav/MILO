import styled from 'styled-components';

export const ProfileHeaderImage = styled.div`
  width: var(--size-full);
  height: 250px;
  margin-bottom: var(--size-8);
  border-radius: var(--radius-xl);
  background: url('/header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const ProfileImage = styled.div`
  border: 6px solid var(--color-foreground);
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
