import { useQuery } from '@apollo/client';
import NextLink from 'next/link';

import ThemeModeSwitch from '../ThemeModeSwitch';
import {
  DashboardHeaderNavbarContainer,
  NavItemsBarContainer,
} from './DashboardHeaderNav.styles';
import Avatar from '@/components/Avatar';
import MobileNavBar from '../DashboardShell/MobileNavBar';
import useScreenType from '@/hooks/useScreenType';
import { GET_ME } from '@/gql/user/queries.graphql';

function NavItemsBar() {
  return (
    <NavItemsBarContainer>
      <NextLink href="/about">About</NextLink>
      <NextLink href="/terms">Terms and conditions</NextLink>
      <NextLink href="/privacy">Privacy</NextLink>
    </NavItemsBarContainer>
  );
}

function DashboardHeaderNav() {
  const { data } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  });
  const screenType = useScreenType();

  return (
    <DashboardHeaderNavbarContainer>
      <NextLink href="/">
        <a>
          <strong>🤝MILO</strong>
        </a>
      </NextLink>
      {screenType == 'lg' && <NavItemsBar />}
      {(screenType == 'lg' || screenType == 'md') && (
        <NavItemsBarContainer>
          <NextLink href="/dashboard/profile" passHref>
            <a>
              <Avatar src={data?.me?.avatar} size={32} />
            </a>
          </NextLink>
          <ThemeModeSwitch />
        </NavItemsBarContainer>
      )}
      {(screenType == 'xs' || screenType == 'sm') && <MobileNavBar />}
    </DashboardHeaderNavbarContainer>
  );
}

export default DashboardHeaderNav;
