import NextLink from 'next/link';
import Image from 'next/image';
import { GetStartedContainer, GetStartedBox } from './GetStarted.styles';
import Input from '@/styledComponents/Input';
import PushableButton from '@/styledComponents/PushableButton';

function GetStarted() {
  function handleClick(e: any) {
    e.preventDefault();
    console.log('Hello');
  }
  return (
    <GetStartedContainer>
      <GetStartedBox>
        <Image src="/logo192.png" width={80} height={80} />
        <h1>Get Started</h1>
        <Input
          type="email"
          placeholder="Enter your email id"
          bg="var(--color-foreground)"
        />
        <PushableButton
          type="submit"
          onClick={handleClick}
          label="Lets go 🚀"
          bg="#B2F5EA"
          color="#000"
          bgTo="#B2F5EA"
        />
      </GetStartedBox>
    </GetStartedContainer>
  );
}

export default GetStarted;
