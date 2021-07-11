import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button';
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
          <Button
            label="Get Started"
            pushable={true}
            color="var(--color-background)"
            onClick={() => router.push('/getstarted')}
          />
        )}
      </HeaderJumboContent>
    </HeadJumboSectionContainer>
  );
}

export default HeadIntroSection;
