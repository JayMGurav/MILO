import DashboardSideNavBar from './DashboardSideNavBar';
import DashboardAside from './DashboardAside';
import {
  DashboardShellContainer,
  DashboardMainContainer,
} from './DashboardShell.styles';
import useScreenType from '@/hooks/useScreenType';

function DashboardShell({ children }) {
  const screenType = useScreenType();
  return (
    <DashboardShellContainer>
      {(function () {
        switch (screenType) {
          case 'sm':
          case 'xs':
            return (
              <>
                <DashboardMainContainer>{children}</DashboardMainContainer>
              </>
            );
          case 'md':
            return (
              <>
                <DashboardSideNavBar />
                <DashboardMainContainer>{children}</DashboardMainContainer>
              </>
            );
          case 'lg':
            return (
              <>
                <DashboardSideNavBar />
                <DashboardMainContainer>{children}</DashboardMainContainer>
                <DashboardAside />
              </>
            );
          default:
            return null;
        }
      })()}
    </DashboardShellContainer>
  );
}

export default DashboardShell;
