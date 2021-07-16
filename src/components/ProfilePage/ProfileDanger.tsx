import { useRouter } from 'next/router';
import styled from 'styled-components';
import { LogOut, Trash2 } from 'react-feather';
import { useMutation } from '@apollo/client';

import Button from '../Button';
import { LOGOUT } from '@/gql/user/mutation.graphql';

const DangerDiv = styled.div`
  width: var(--size-full);
  margin-top: var(--size-10);
  padding: var(--size-4);
  text-align: center;
  border-radius: var(--radius-md);
  background: var(--color-red200);
  span {
    font-size: var(--system-fontSize-lg);
    font-weight: var(--system-fontWeight-semibold);
    color: var(--color-red600);
  }
`;

const DangerActionsDiv = styled.div`
  margin-top: var(--size-10);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2ch;
  button {
    color: var(--color-text);
    font-size: var(--system-fontSize-md);
    @media only screen and (max-width: 680px) {
      flex: 1 1 18ch;
    }
  }
`;

function ProfileDanger() {
  const router = useRouter();
  const [logout] = useMutation(LOGOUT, {
    onCompleted: ({ logout }) => {
      if (logout) {
        router.push('/');
      }
    },
  });

  return (
    <DangerDiv>
      <span>Danger ahead!, Be careful of your action</span>
      <DangerActionsDiv>
        <Button
          icon={<LogOut size="18px" />}
          label="Logout"
          pushable={true}
          color="var(--color-red400)"
          onClick={logout}
        />
        <Button
          icon={<Trash2 size="18px" />}
          label="Delete Account"
          pushable={true}
          color="var(--color-red400)"
        />
      </DangerActionsDiv>
    </DangerDiv>
  );
}

export default ProfileDanger;
