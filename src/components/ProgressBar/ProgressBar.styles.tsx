import styled from 'styled-components';
import { motion as m } from 'framer-motion';

export const ProgressContainer = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: 3px;
  padding: 0;
  margin: var(--size-4) 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.25);
`;

export const ProgressBarDiv = styled(m.div)`
  height: 3px;
  border-radius: 3px;
  background: var(--color-primary1);
`;
