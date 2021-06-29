import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-transparentBackground);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
`;

export const ModalContent = styled.div<{ bg: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ bg }) => (bg ? bg : 'var(--color-foreground)')};
  padding: var(--size-6);
  border-radius: var(--radius-xl);
  box-shadow: var(--system-shadow-4);
  width: fit-content;
`;

export const ModalConfettiOne = styled.img`
  position: absolute;
  bottom: -8%;
  right: -2%;
  transform: rotate(-45deg);
`;

export const ModalConfettiTwo = styled.img`
  position: absolute;
  bottom: -12%;
  left: -6%;
  transform: scale(0.7);
`;

export const ModalBrand = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--color-foreground);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--size-4);
`;

export const ModalMiloLogo = styled.img`
  /* position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* transform: scale(0.7); */
`;
