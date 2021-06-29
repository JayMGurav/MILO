import NextLink from 'next/link';
import {
  HeadJumboSectionContainer,
  HeaderJumboContent,
} from './HeaderIntroSection.styles';

function HeadIntroSection({ getStarted }: { getStarted?: boolean }) {
  return (
    <HeadJumboSectionContainer>
      <HeaderJumboContent>
        <h1>Meet Interact Excel</h1>
        <p>Get noticed and get your burning question answered.</p>
        {getStarted && <button>Get Started</button>}
      </HeaderJumboContent>
    </HeadJumboSectionContainer>
  );
}

export default HeadIntroSection;
