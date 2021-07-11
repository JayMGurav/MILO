import styled from 'styled-components';
import { motion as m } from 'framer-motion';

export const StyledButton = styled(m.button)<{
  hasIcon: boolean;
  color?: string;
}>`
  border: none;
  padding: ${({ hasIcon }) =>
    hasIcon ? 'var(--size-2)' : 'var(--size-2) var(--size-6)'};
  font-size: var(--system-fontSize-md);
  font-weight: var(--system-fontWeight-medium);
  letter-spacing: var(--system-letterSpacing-wide);
  border-radius: var(--radius-md);
  background: ${({ color }) => (color ? color : 'var(--color-primary1)')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1ch;
  cursor: pointer;
  &:hover {
    background: ${({ color }) => (color ? color : 'var(--color-primary2)')};
  }
  &:active {
    background: ${({ color }) => (color ? color : 'var(--color-primary3)')};
  }
`;
