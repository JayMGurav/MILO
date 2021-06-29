import styled from 'styled-components';
import { motion as m } from 'framer-motion';

const Button = styled(m.button)<{ bg?: string; bgTo?: string; color?: string }>`
  cursor: pointer;
  padding: var(--size-2) var(--size-6);
  background: ${({ bg }) => (bg ? bg : 'var(--color-gray1)')};
  border-radius: var(--radius-md);
  border: none;
  color: ${({ color }) => (color ? color : 'var(--color-text)')};
  font-size: var(--system-fontSize-md);
  &:hover {
    background: ${({ bgTo }) => (bgTo ? bgTo : 'var(--color-gray2)')};
  }
`;

function PushableButton({ label, ...props }) {
  return (
    <Button
      {...props}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        y: 4,
      }}>
      {label}
    </Button>
  );
}

export default PushableButton;
