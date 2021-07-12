import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Magic } from 'magic-sdk';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Send } from 'react-feather';

import { GetStartedContainer, GetStartedBox } from './GetStarted.styles';
import Input from '../Input';
import { IS_REGISTERED_USER } from 'src/gql/user/queries.graphql';
// import SignUpModal from './SignUpModal';
import { LOGIN } from 'src/gql/user/mutation.graphql';
import Button from '../Button';

const SignUpModal = dynamic(() => import('./SignUpModal'));
const AlertMessage = dynamic(() => import('../Alert/AlertMessage'));

interface IFormInputs {
  email: string;
}

function GetStarted() {
  const router = useRouter();
  const signUpModalRef = useRef(null);
  const verifyModalRef = useRef(null);
  const [loadingMsg, setLoadingMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

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
      setLoadingMsg('');
      reset({ email: '' });
      // verifyModalRef.current.close();
      router.push('/dashboard');
    },
    onError: (err) => {
      setErrorMsg(() => {
        setLoadingMsg('Error!');
        return err.message;
      });
      console.error(err.message);
    },
  });

  const [checkIsUserRegistered, { called, loading: checkIsUserLoading }] =
    useLazyQuery(IS_REGISTERED_USER, {
      onCompleted: async ({ isRegisteredUser }) => {
        const userEmail = getValues('email');
        if (!isRegisteredUser) {
          signUpModalRef.current.open();
        } else {
          try {
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
          } catch (err) {
            setErrorMsg(() => {
              setLoadingMsg('Error!');
              return err.message;
            });
            // throw new Error(err.message);
          }
        }
      },
      onError: (err) => {
        setErrorMsg(() => {
          setLoadingMsg('Error!');
          return err.message;
        });
        console.error(err.message);
      },
    });

  async function onSubmit(data: IFormInputs) {
    setLoadingMsg('Checking email...');
    checkIsUserRegistered({
      variables: { email: data.email },
    });
  }

  return (
    <GetStartedContainer>
      <GetStartedBox onSubmit={handleSubmit(onSubmit)}>
        <Image src="/logo192.png" width={80} height={80} />
        <h3>Get Started with MILO</h3>
        {errorMsg && (
          <AlertMessage type="error" title="Error" description={errorMsg} />
        )}
        <Input
          type="text"
          label="Email"
          error={errors?.email?.message}
          {...register('email', { required: 'Email is required' })}
          placeholder="example@example.xyz"
        />
        <Button
          disabled={Boolean(loadingMsg)}
          type="submit"
          label={loadingMsg || 'Lets go'}
          icon={<Send width="16" height="16" fill="none" />}
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
