import styled from 'styled-components';

export const DashboardHeaderNavbarContainer = styled.div`
  width: var(--size-full);
  padding: var(--size-2);
  margin-bottom: var(--size-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2ch;
  a {
    text-decoration: none;
    color: var(--color-text);
  }
`;

export const NavItemsBarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2ch;
  a {
    color: var(--color-grayText);
    :hover {
      color: var(--color-text);
    }
  }
`;
