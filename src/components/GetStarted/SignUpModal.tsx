import dynamic from 'next/dynamic';

import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { forwardRef, useState } from 'react';
import { Magic } from 'magic-sdk';

import Modal from '../Modal';
import Input from '@/components/Input';
import Button from '../Button';

import { IS_USERNAME_UNIQUE } from 'src/gql/user/queries.graphql';
import { useLazyQuery, useMutation } from '@apollo/client';
import { LOGIN, SIGNUP } from 'src/gql/user/mutation.graphql';
import { useRouter } from 'next/router';
import useFileUploader from '@/hooks/useFileUploader';
import ProfileImageUploader from '../ProfileImageUploader';
import ProgressBar from '../ProgressBar';

const AlertMessage = dynamic(() => import('../Alert/AlertMessage'));

interface ISignUpObj {
  fullname: string;
  username: string;
  email: string;
  avatar?: string | ArrayBuffer;
}

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-2);
`;
const SignUpProfileImageContainer = styled.div`
  margin-top: var(--size-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const SignUpModal = ({ signUpModalRef, verifyModalRef, userEmail }) => {
  const router = useRouter();
  const [loadingMsg, setLoadingMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const { url, uploadProgress, upload, handleFileChange } =
    useFileUploader('profile_images');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const [login] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      console.log(login);
      reset({ fullname: '', username: '' });
      router.push('/dashboard');
      setLoadingMsg('');
    },
    onError: (err) => {
      setErrorMsg(err.message);
      console.log(err.message);
    },
  });

  const [signup] = useMutation(SIGNUP, {
    onCompleted: async ({ signUp }) => {
      if (signUp) {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);
        const did = await magic.auth.loginWithMagicLink({
          email: userEmail,
          showUI: true,
        });
        if (did) {
          setLoadingMsg('Logging in');
          login({
            variables: {
              did,
            },
          });
        }
      }
    },
    onError: (err) => {
      setErrorMsg(err.message);
      console.log(err.message);
    },
  });

  const [checkIsUserNameUnique] = useLazyQuery(IS_USERNAME_UNIQUE, {
    onCompleted: async ({ isUserNameUnique }) => {
      if (!isUserNameUnique) {
        errors.username.message = 'Username is not unique';
      } else {
        setLoadingMsg('Setting up!!');
        const signUpObj: ISignUpObj = {
          fullname: getValues('fullname'),
          username: getValues('username'),
          email: userEmail,
        };
        if (url) {
          signUpObj.avatar = url;
        }
        signup({
          variables: {
            user: {
              fullname: getValues('fullname'),
              username: getValues('username'),
              email: userEmail,
            },
          },
        });
      }
    },
    onError: (err) => {
      setErrorMsg(err.message);
      console.log(err.message);
    },
  });

  const onSubmit = (data) => {
    setLoadingMsg('Saving image');
    upload({ ...data, email: userEmail });
    setLoadingMsg('Verifying..');
    checkIsUserNameUnique({
      variables: {
        username: data.username,
      },
    });
  };
  return (
    <Modal
      modalRef={signUpModalRef}
      brand={true}
      confetti={false}
      bg="var(--color-foreground)">
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        {errorMsg && (
          <AlertMessage type="error" title="Error" description={errorMsg} />
        )}
        {/* <strong>Complete your signup process</strong> */}
        <SignUpProfileImageContainer>
          <ProfileImageUploader url={url} handleFileChange={handleFileChange} />
          <ProgressBar progress={uploadProgress} />
        </SignUpProfileImageContainer>
        <Input
          type="text"
          label="fullname"
          error={errors?.fullname?.message}
          {...register('fullname', { required: 'Your fullname is required' })}
          placeholder="John Doe"
        />
        <Input
          type="text"
          label="username"
          error={errors?.username?.message}
          {...register('username', {
            required: 'Your username is required',
            minLength: {
              value: 3,
              message: 'Minimum 3 character long',
            },
            maxLength: {
              value: 10,
              message: 'Maximum 10 character long',
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'Should be alphanumeric',
            },
          })}
          placeholder="john_doe"
        />
        <Button
          type="submit"
          disabled={Boolean(loadingMsg.length)}
          label={loadingMsg || 'signup'}
        />
      </SignUpForm>
    </Modal>
  );
};

export default SignUpModal;
