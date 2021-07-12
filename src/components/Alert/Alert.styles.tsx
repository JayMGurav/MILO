import styled from 'styled-components';

export const Alert = styled.div<{ bg: string }>`
  width: var(--size-full);
  border-radius: var(--radius-lg);
  padding: 0 var(--size-6);
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  gap: 1ch;
  color: #000;
`;
export const AlertBoxDiv = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  width: var(--size-full);
  border-radius: var(--radius-md);
  padding: var(--size-4) var(--size-6);
  background: ${({ bg }) => bg};
`;
export const AlertIcon = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlertIconSm = styled(AlertIcon)`
  width: 30px;
  height: 30px;
`;
export const AlertIconLg = styled(AlertIcon)`
  width: 50px;
  height: 50px;
`;

export const AlertDescription = styled.p`
  font-size: var(--system-fontSize-lg);
`;
export const AlertTitle = styled.strong`
  font-size: var(--system-fontSize-xl);
`;
