import NextLink from 'next/link';
import styled from 'styled-components';

const NavItemContainer = styled.a<{ active: boolean }>`
  position: relative;
  margin: 0;
  padding: var(--size-2) var(--size-8) var(--size-2) var(--size-4);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: 2ch;
  cursor: pointer;
  text-decoration: none;
  color: ${({ active }) =>
    active ? 'var(--color-text)' : 'var(--color-grayText)'};
  background: ${({ active }) =>
    active ? 'var(--color-foreground)' : 'var(--color-background)'};
  font-weight: var(--system-fontWeight-semibold);
  letter-spacing: var(--system-letterSpacing-wide);
  span {
    padding: 6px;
    line-height: 0.99;
    border-radius: 50%;
    background: ${({ active }) =>
      active ? 'var(--color-primary1)' : 'var(--color-foreground)'};
    box-shadow: var(--system-shadow-1);
  }
  :hover {
    background: var(--color-foreground);
    color: var(--color-text);
    span {
      background: var(--color-primary1);
    }
  }
`;

interface INavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

function NavItem({ icon, label, to, active }: INavItemProps) {
  return (
    <NextLink href={to} passHref>
      <NavItemContainer active={active}>
        <span>{icon}</span> {label}
      </NavItemContainer>
    </NextLink>
  );
}

export default NavItem;
