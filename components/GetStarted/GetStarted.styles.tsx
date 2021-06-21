import styled from 'styled-components';

export const GetStartedContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GetStartedBox = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: var(--radius-md);
  padding: var(--size-4);
  h1 {
    margin: 0;
  }
`;
