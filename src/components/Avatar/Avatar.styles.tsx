import styled from 'styled-components';

export const AvatarSVG = styled.svg`
  margin: 0;
  background: var(--color-gray2);
  border-radius: 50%;
  > path {
    fill: var(--color-iconGray);
  }
`;

export const AvatarDiv = styled.div<{ width: string; height: string }>`
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
