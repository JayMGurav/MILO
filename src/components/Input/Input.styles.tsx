import styled from 'styled-components';

export const InputDiv = styled.div`
  margin: var(--size-6) 0;
  /* background: red; */
  /* width: fit-content; */
`;
export const InputLabel = styled.label`
  /* color: var(--system-palette-gray24); */
  margin-bottom: var(--size-6);
  letter-spacing: var(--system-letterSpacing-wider);
  font-size: var(--system-fontSize-md);
`;

export const StyledInput = styled.input<{
  bg?: string;
  error?: boolean;
  w?: string;
}>`
  display: block;
  width: ${({ w }) => (w ? w : '100%')};
  margin: 0;
  margin-top: var(--size-1);
  padding: var(--size-3);
  background: ${({ bg }) => (bg ? bg : 'var(--color-gray1)')};
  border-radius: var(--radius-md);
  border: ${({ error }) =>
    error ? '1.2px solid var(--color-red400)' : 'none'};
  color: var(--color-text);
  font-size: var(--system-fontSize-lg);
  &:focus {
    outline: none;
  }
  &:invalid {
    border: 1.2px solid var(--color-red400);
  }
`;

export const InputError = styled.span<{ center?: boolean }>`
  color: var(--color-red400);
  margin-top: var(--size-2);
  font-size: var(--system-fontSize-sm);
`;
