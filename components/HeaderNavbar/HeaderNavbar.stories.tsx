import { Story, Meta } from '@storybook/react';

import HeaderComponent from './index';

export const Header: Story = () => <HeaderComponent />;

export default {
  title: 'Header',
  component: HeaderComponent,
} as Meta;
