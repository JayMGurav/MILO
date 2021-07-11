import NextLink from 'next/link';

import ThemeModeSwitch from '@/components/ThemeModeSwitch';

import { HeaderNavbarContainer } from './HeaderNavbar.styles';

function HeaderNavbar() {
  return (
    <HeaderNavbarContainer>
      <NextLink href="/" passHref>
        <a>
          <strong>🤝MILO</strong>
        </a>
      </NextLink>
      <ThemeModeSwitch />
    </HeaderNavbarContainer>
  );
}

export default HeaderNavbar;
