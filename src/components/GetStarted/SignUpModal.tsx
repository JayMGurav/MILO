import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { forwardRef } from 'react';
import { Magic } from 'magic-sdk';

import Modal from '../Modal';
import Input from '@/components/Input';
import Button from '../Button';

import { IS_USERNAME_UNIQUE } from 'src/gql/user/queries.graphql';
import { useLazyQuery, useMutation } from '@apollo/client';
import { LOGIN, SIGNUP } from 'src/gql/user/mutation.graphql';
import { useRouter } from 'next/router';

const SignUpForm = styled.form`
  padding: var(--size-2);
`;

const SignUpModal = ({ signUpModalRef, verifyModalRef, userEmail }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const [login] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      console.log(login);
      reset({ fullname: '', username: '' });
      // verifyModalRef.current.close();
      router.push('/dashboard');
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
          login({
            variables: {
              did,
            },
          });
        }
      }
    },
  });

  const [checkIsUserNameUnique] = useLazyQuery(IS_USERNAME_UNIQUE, {
    onCompleted: async ({ isUserNameUnique }) => {
      if (!isUserNameUnique) {
        errors.username.message = 'Username is not unique';
      } else {
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
  });

  const onSubmit = (data) => {
    console.log(data);
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
        <h3>Complete your signup process</h3>
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
              value: 6,
              message: 'Maximum 6 character long',
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'Should be alphanumeric',
            },
          })}
          placeholder="john_doe"
        />
        <Button type="submit" label="signup" />
      </SignUpForm>
    </Modal>
  );
};

export default SignUpModal;
