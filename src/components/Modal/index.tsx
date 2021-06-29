import { useEffect, useState, useImperativeHandle, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import {
  ModalContainer,
  ModalContent,
  ModalOverlay,
  ModalConfettiOne,
  ModalConfettiTwo,
  ModalMiloLogo,
  ModalBrand,
} from './Modal.styles';

function Modal({
  children,
  brand,
  confetti,
  modalRef,
  bg,
}: {
  children: ReactNode;
  brand: boolean;
  confetti: boolean;
  modalRef: any;
  bg: string;
}) {
  const [mountpoint, setMountpoint] = useState(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    let mountPoint = document.getElementById('modalMountPoint');
    setMountpoint(mountPoint);
    return () => void (mountPoint = null);
  });

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useImperativeHandle(
    modalRef,
    () => ({
      open,
      close,
    }),
    []
  );

  return (
    <>
      {/* <button onClick={open}>click</button> */}
      {mountpoint &&
        isOpen &&
        createPortal(
          <ModalContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}>
            <ModalOverlay onClick={close} />
            {confetti && (
              <>
                <ModalConfettiOne
                  src="/confettiOne.png"
                  width={300}
                  height={400}
                />
                <ModalConfettiTwo src="/confettiTwo.png" />
              </>
            )}

            <ModalContent bg={bg}>
              {brand && (
                <ModalBrand>
                  <ModalMiloLogo src="/logo192.png" width={60} height={60} />
                </ModalBrand>
              )}
              {children}
            </ModalContent>
          </ModalContainer>,
          mountpoint
        )}
    </>
  );
}

export default Modal;
