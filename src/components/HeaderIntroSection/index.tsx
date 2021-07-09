import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  HeadJumboSectionContainer,
  HeaderJumboContent,
} from './HeaderIntroSection.styles';

function HeadIntroSection({ getStarted }: { getStarted?: boolean }) {
  const router = useRouter();

  return (
    <HeadJumboSectionContainer>
      <HeaderJumboContent>
        <h1>Meet Interact Excel</h1>
        <p>Get noticed and get your burning question answered.</p>
        {getStarted && (
          <button onClick={() => router.push('/getstarted')}>
            Get Started
          </button>
        )}
      </HeaderJumboContent>
    </HeadJumboSectionContainer>
  );
}

export default HeadIntroSection;
