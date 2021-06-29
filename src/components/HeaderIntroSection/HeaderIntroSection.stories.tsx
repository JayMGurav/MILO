import { Story, Meta } from '@storybook/react';

import HeaderIntroSection from './index';

const Template: Story<{ getStarted?: boolean }> = (args) => (
  <HeaderIntroSection {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  getStarted: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  getStarted: false,
};

export default {
  title: 'HeaderIntroSection',
  component: HeaderIntroSection,
} as Meta;
