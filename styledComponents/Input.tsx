import styled from 'styled-components';

const Input = styled.input<{ bg?: string }>`
  width: 100%;
  margin: var(--size-6);
  padding: var(--size-3);
  background: ${({ bg }) => (bg ? bg : 'var(--color-gray1)')};
  border-radius: var(--radius-md);
  border: none;
  color: var(--color-text);
  font-size: var(--system-fontSize-lg);
  &:focus {
    outline: none;
  }
  &:invalid {
    border: 1.2px solid var(--color-red400);
  }
`;

export default Input;
