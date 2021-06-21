import styled from 'styled-components';
import Image from 'next/image';

export const HeadJumboSectionContainer = styled.div`
  max-width: var(--size-full);
  padding: var(--size-6);
  border-radius: var(--radius-lg);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-image: url('/header3.svg'),
    linear-gradient(to right bottom, var(--color-red200), var(--color-red50));
  background-position: bottom 0% right 0%;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: local;
  /* overflow: hidden; */

  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 800px) {
    background-image: linear-gradient(
      to right bottom,
      var(--color-red200),
      var(--color-red50)
    );
  }
`;

export const HeaderJumboContent = styled.div`
  flex: 1 1 0;
  margin: var(--size-10) 0;
  color: #000;
  h1 {
    word-break: break-word;
    margin: 0;
    font-size: var(--size-10);
  }
  p {
    margin: 0;
    font-size: var(--size-5);
  }
  button {
    width: fit-content;
    cursor: pointer;
    margin: var(--size-4) 0;
    padding: var(--size-3) var(--size-4);
    border: none;
    background: var(--color-background);
    color: var(--color-text);
    border-radius: var(--radius-lg);
  }
`;
