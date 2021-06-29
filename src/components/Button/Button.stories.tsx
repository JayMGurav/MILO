import { Story, Meta } from '@storybook/react';
import { ReactNode } from 'react';
import { Star } from 'react-feather';

import ButtonComp from './index';

const Template: Story<{
  type?: string;
  icon?: ReactNode;
  label?: string;
  pushable?: boolean;
}> = (args) => <ButtonComp {...args} />;

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <Star width="16" height="16" />,
};

export const LabelButton = Template.bind({});
LabelButton.args = {
  label: 'Star',
};

export const IconLabelButton = Template.bind({});
IconLabelButton.args = {
  icon: <Star width="16" height="16" />,
  label: 'Star',
};

export default {
  title: 'Button',
  component: ButtonComp,
  parameters: {
    layout: 'centered',
  },
} as Meta;
