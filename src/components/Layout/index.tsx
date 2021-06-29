import LayoutContainer from '@/styledComponents/LayoutContainer';
import HeaderNavbar from '../HeaderNavbar';

function Layout({ children }) {
  return (
    <LayoutContainer>
      <HeaderNavbar />
      {children}
    </LayoutContainer>
  );
}

export default Layout;
