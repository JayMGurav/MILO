import styled from 'styled-components';
import { motion as m } from 'framer-motion';

export const HamButton = styled.button`
  border: none;
  background: var(--color-gray1);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

export const MenuDiv = styled(m.div)`
  position: relative;
  z-index: 99999;
`;
export const UL = styled.ul`
  padding: var(--size-2);
  margin: 0;
  color: #000;
  hr {
    border: 1px dashed var(--color-iconGray);
    border-bottom: none;
  }
`;

export const Div = styled(m.div)`
  position: absolute;
  top: 120%;
  right: 0;
  background: var(--color-gray1);
  overflow: hidden;
`;

export const ProfileNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2ch;
  border-radius: var(--radius-lg);
  padding: var(--size-2) var(--size-4);
  font-weight: var(--system-fontWeight-semibold);
  letter-spacing: var(--system-letterSpacing-wide);
  color: var(--color-iconGray);
  cursor: pointer;
  :hover {
    background: var(--color-foreground);
    color: var(--color-text);
  }
`;

export const ThemeBtnDiv = styled.div`
  padding: var(--size-2) var(--size-4);
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;
