import styled from 'styled-components';
import { motion as m } from 'framer-motion';

export const StyledButton = styled(m.button)<{ onlyIcon: boolean }>`
  border: none;
  padding: ${({ onlyIcon }) =>
    onlyIcon ? 'var(--size-2)' : 'var(--size-2) var(--size-6)'};
  font-size: var(--system-fontSize-md);
  font-weight: var(--system-fontWeight-medium);
  letter-spacing: var(--system-letterSpacing-wide);
  border-radius: var(--radius-md);
  background: var(--color-primary1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1ch;
  cursor: pointer;
  &:hover {
    background: var(--color-primary2);
  }
  &:active {
    background: var(--color-primary3);
  }
`;
