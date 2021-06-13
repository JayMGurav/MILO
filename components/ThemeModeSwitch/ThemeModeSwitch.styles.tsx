import { motion as m } from 'framer-motion';
import styled from 'styled-components';

export const ModeButtonDiv = styled(m.div)<{ isDarkMode: boolean }>`
  width: 50px;
  height: 16px;
  background-color: var(--color-gray3);
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: ${({ isDarkMode }) =>
    isDarkMode ? 'flex-start' : 'flex-end'};
`;

export const ModeButton = styled(m.button)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: var(--color-text);
  border: none;
  border-radius: 50%;
`;
