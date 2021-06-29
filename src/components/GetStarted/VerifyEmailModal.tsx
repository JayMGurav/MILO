import { forwardRef } from 'react';
import Modal from '../Modal';

import styled from 'styled-components';

const VerifyEmailContainer = styled.div`
  text-align: center;
  padding: var(--size-4);
  background: var(--color-transparentBackground);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 10px;
  border: 1px solid var(--color-gray2);
  p {
    font-size: var(--system-fontSize-lg);
    span {
      font-weight: var(--system-fontWeight-semibold);
    }
  }
`;

const VerifyEmailModal = ({ verifyModalRef, email }) => {
  return (
    <Modal modalRef={verifyModalRef} brand={false} confetti={true} bg="none">
      <VerifyEmailContainer>
        <h1>📮You've Got a mail!!</h1>
        <p>
          We've emailed a ✨magic link to <span>{email}</span>, click the link
          to login!!
        </p>
      </VerifyEmailContainer>
    </Modal>
  );
};

export default VerifyEmailModal;
