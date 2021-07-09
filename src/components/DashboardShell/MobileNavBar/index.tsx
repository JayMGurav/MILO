import { useState } from 'react';

import {
  MenuDiv,
  HamButton,
  ThemeBtnDiv,
  Div,
  UL,
  ProfileNavItem,
} from './MobileNavbar.styles';
import {
  Menu,
  X,
  HelpCircle,
  Home,
  BookOpen,
  Calendar,
  Briefcase,
  Users,
} from 'react-feather';
import NavItem from '../NavItems';
import Avatar from '@/components/Avatar';
import ThemeModeSwitch from '@/components/ThemeModeSwitch';

function MobileNavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const container = {
    hidden: { opacity: 0, width: 0, height: 0, borderRadius: '50%' },
    show: {
      opacity: 1,
      borderRadius: '8px',
      width: 'auto',
      height: 'auto',
      transition: {
        delayChildren: 0.125,
      },
    },
  };

  return (
    <MenuDiv>
      <HamButton onClick={() => setOpen(!open)}>
        {!open && <Menu size="20px" color="var(--color-iconGray)" />}
        {open && <X size="20px" color="var(--color-iconGray)" />}
      </HamButton>
      {open && (
        <Div variants={container} initial="hidden" animate="show">
          <UL>
            <ThemeBtnDiv>
              <ThemeModeSwitch />
            </ThemeBtnDiv>
            <br />
            <ProfileNavItem>
              <Avatar /> <span>Jay Gurav</span>
            </ProfileNavItem>
            <hr />
            <NavItem
              icon={
                <Home size="18px" fill="none" color="var(--color-iconGray)" />
              }
              label="Home"
              to="/dashboard"
            />
            <NavItem
              icon={
                <HelpCircle
                  size="18px"
                  fill="none"
                  color="var(--color-iconGray)"
                />
              }
              label="QnA"
              to="/dashboard/qna"
            />
            <NavItem
              icon={
                <Users size="18px" fill="none" color="var(--color-iconGray)" />
              }
              label="Groups"
              to="/dashboard/groups"
            />
            <NavItem
              icon={
                <Calendar
                  size="18px"
                  fill="none"
                  color="var(--color-iconGray)"
                />
              }
              label="Events"
              to="/dashboard/events"
            />
            <NavItem
              icon={
                <BookOpen
                  size="18px"
                  fill="none"
                  color="var(--color-iconGray)"
                />
              }
              label="Universities"
              to="/dashboard/blogs"
            />
            <NavItem
              icon={
                <Briefcase
                  size="18px"
                  fill="none"
                  color="var(--color-iconGray)"
                />
              }
              label="Companies"
              to="/dashboard/blogs"
            />
          </UL>
        </Div>
      )}
    </MenuDiv>
  );
}

export default MobileNavBar;
