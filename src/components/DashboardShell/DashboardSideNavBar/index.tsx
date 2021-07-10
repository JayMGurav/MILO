import { useRouter } from 'next/router';
import {
  HelpCircle,
  Home,
  BookOpen,
  Calendar,
  Briefcase,
  Users,
} from 'react-feather';
import {
  DashboardSideNavBarContainer,
  DashboardSideNavList,
} from './DashboardSideNavBar.styles';
import NavItem from '../NavItems';

function DashboardSideNavBar() {
  const { asPath } = useRouter();

  return (
    <DashboardSideNavBarContainer>
      <DashboardSideNavList>
        <NavItem
          icon={<Home size="18px" fill="none" color="var(--color-iconGray)" />}
          label="Home"
          to="/dashboard"
          active={asPath == '/dashboard'}
        />
        <NavItem
          icon={
            <HelpCircle size="18px" fill="none" color="var(--color-iconGray)" />
          }
          label="QnA"
          to="/dashboard/qna"
          active={asPath == '/dashboard/qna'}
        />
        <NavItem
          icon={<Users size="18px" fill="none" color="var(--color-iconGray)" />}
          label="Groups"
          to="/dashboard/groups"
          active={asPath == '/dashboard/groups'}
        />
        <NavItem
          icon={
            <Calendar size="18px" fill="none" color="var(--color-iconGray)" />
          }
          label="Events"
          to="/dashboard/events"
          active={asPath == '/dashboard/events'}
        />
        <NavItem
          icon={
            <BookOpen size="18px" fill="none" color="var(--color-iconGray)" />
          }
          label="Universities"
          to="/dashboard/universities"
          active={asPath == '/dashboard/universities'}
        />
        <NavItem
          icon={
            <Briefcase size="18px" fill="none" color="var(--color-iconGray)" />
          }
          label="Companies"
          to="/dashboard/companies"
          active={asPath == '/dashboard/companies'}
        />
      </DashboardSideNavList>
    </DashboardSideNavBarContainer>
  );
}

export default DashboardSideNavBar;
