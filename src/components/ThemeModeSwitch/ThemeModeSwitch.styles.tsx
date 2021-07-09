import { motion as m } from 'framer-motion';
import styled from 'styled-components';

export const ModeButtonDiv = styled(m.div)<{ isDarkMode: boolean }>`
  width: 44px;
  height: 16px;
  background-color: var(--color-foreground);
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: ${({ isDarkMode }) =>
    isDarkMode ? 'flex-start' : 'flex-end'};
`;

export const ModeButton = styled(m.button)`
  cursor: pointer;
  width: 26px;
  height: 26px;
  background-color: var(--color-text);
  border: none;
  border-radius: 50%;
  font-size: var(--system-fontSize-sm);
  display: flex;
  align-items: center;
  justify-content: center;
`;
