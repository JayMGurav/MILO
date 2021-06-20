import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: var(--size-full);
  margin: 0;
  margin-top: var(--size-4);
  padding: var(--size-4) calc((var(--size-full) - var(--size-8xl)) / 2);
  background: var(--color-foreground);
`;
export const FooterDiv = styled.div`
  padding: var(--size-2);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2ch;
`;

export const FooterFlexDiv = styled.div`
  flex: 1 1 0;
  padding: var(--size-4);
`;

export const FooterBrandDiv = styled.div`
  strong {
    font-size: var(--system-fontSize-xl);
    font-weight: var(--system-fontWeight-semibold);
    letter-spacing: var(--system-letterSpacing-wider);
  }
  p {
    margin: 0;
  }
`;

export const FooterMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  gap: 2ch;
  a {
    color: var(--color-text);
    word-break: none;
    white-space: nowrap;
    :hover {
      cursor: pointer;
    }
  }
`;
