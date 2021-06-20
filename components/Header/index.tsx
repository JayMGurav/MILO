// import NextLink from 'next/link';

import ThemeModeSwitch from '@/components/ThemeModeSwitch';

import { HeaderContainer } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <span>
        <strong>🤝MILO</strong>
      </span>
      <ThemeModeSwitch />
    </HeaderContainer>
  );
}

export default Header;
