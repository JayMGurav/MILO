import useViewportSize from '@/hooks/useViewportSize';
import NextLink from 'next/link';

import ThemeModeSwitch from '../ThemeModeSwitch';
import {
  DashboardHeaderNavbarContainer,
  NavItemsBarContainer,
} from './DashboardHeaderNav.styles';
import Avatar from '@/components/Avatar';
import MobileNavBar from '../DashboardShell/MobileNavBar';
import useScreenType from '@/hooks/useScreenType';

function NavItemsBar() {
  return (
    <NavItemsBarContainer>
      <NextLink href="/about">About</NextLink>
      <NextLink href="/terms">Terms an conditions</NextLink>
      <NextLink href="/privacy">Privacy</NextLink>
    </NavItemsBarContainer>
  );
}

function DashboardHeaderNav() {
  const screenType = useScreenType();

  return (
    <DashboardHeaderNavbarContainer>
      <NextLink href="/">
        <span>
          <strong>🤝MILO</strong>
        </span>
      </NextLink>
      {screenType == 'lg' && <NavItemsBar />}
      {(screenType == 'lg' || screenType == 'md') && (
        <NavItemsBarContainer>
          <Avatar src="/jaygurav.jpg" size={32} />
          <ThemeModeSwitch />
        </NavItemsBarContainer>
      )}
      {(screenType == 'xs' || screenType == 'sm') && <MobileNavBar />}
    </DashboardHeaderNavbarContainer>
  );
}

export default DashboardHeaderNav;
