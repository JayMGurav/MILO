import NextLink from 'next/link';

import ThemeModeSwitch from '@/components/ThemeModeSwitch';

import { HeaderNavbarContainer } from './HeaderNavbar.styles';

function HeaderNavbar() {
  return (
    <HeaderNavbarContainer>
      <NextLink href="/">
        <span>
          <strong>🤝MILO</strong>
        </span>
      </NextLink>
      <ThemeModeSwitch />
    </HeaderNavbarContainer>
  );
}

export default HeaderNavbar;
