import styled from 'styled-components';

export const DashboardShellContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2ch;
  margin: 0;
  padding: 0;
`;

export const DashboardMainContainer = styled.main`
  flex: 3 3 0;
  height: 1000px;
  margin: 0;
  padding: var(--size-4);
  background: var(--color-foreground);
  border-radius: var(--radius-md);
`;
