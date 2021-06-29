import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Magic } from 'magic-sdk';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Send } from 'react-feather';

import { GetStartedContainer, GetStartedBox } from './GetStarted.styles';
import Input from '../Input';
import PushableButton from '@/styledComponents/PushableButton';
import { IS_REGISTERED_USER } from 'src/gql/user/queries.graphql';
import SignUpModal from './SignUpModal';
import VerifyEmailModal from './VerifyEmailModal';
import { LOGIN } from 'src/gql/user/mutation.graphql';
import Button from '../Button';

interface IFormInputs {
  email: string;
}

function GetStarted() {
  const router = useRouter();
  const signUpModalRef = useRef(null);
  const verifyModalRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMsg, setLoadingMsg] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<IFormInputs>();

  const [login] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      console.log(login);
      setLoading(() => {
        setLoadingMsg('');
        return false;
      });
      reset({ email: '' });
      // verifyModalRef.current.close();
      router.push('/dashboard');
    },
  });

  const [checkIsUserRegistered, { called, loading: checkIsUserLoading }] =
    useLazyQuery(IS_REGISTERED_USER, {
      onCompleted: async ({ isRegisteredUser }) => {
        const userEmail = getValues('email');
        if (!isRegisteredUser) {
          signUpModalRef.current.open();
        } else {
          setLoadingMsg('Verifying...');
          const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);
          // verifyModalRef.current.open();
          const did = await magic.auth.loginWithMagicLink({
            email: userEmail,
            showUI: true,
            // redirectURI: new URL('/dashboard', window.location.origin).href,
          });
          if (did) {
            login({
              variables: {
                did,
              },
            });
          }
          // console.log(did);
        }
      },
    });

  async function onSubmit(data: IFormInputs) {
    try {
      setLoading(() => {
        setLoadingMsg('Checking email...');
        return true;
      });
      checkIsUserRegistered({
        variables: { email: data.email },
      });
    } catch (err) {
      console.log({ msg: err.message, code: err.code });
    }
  }

  return (
    <GetStartedContainer>
      <GetStartedBox onSubmit={handleSubmit(onSubmit)}>
        <Image src="/logo192.png" width={80} height={80} />
        <h1>Get Started</h1>
        <Input
          type="text"
          label="Email"
          error={errors?.email?.message}
          {...register('email', { required: 'Email is required' })}
          placeholder="example@example.xyz"
        />
        <Button
          type="submit"
          label={loadingMsg || 'Lets go'}
          icon={<Send width="16" height="16" fill="none" />}
          // disabled={errors.email || loading}
          // bg="#B2F5EA"
          // color="#000"
          // bgTo="#B2F5EA"
        />
      </GetStartedBox>
      <SignUpModal
        signUpModalRef={signUpModalRef}
        verifyModalRef={verifyModalRef}
        userEmail={getValues('email')}
      />
    </GetStartedContainer>
  );
}

export default GetStarted;
