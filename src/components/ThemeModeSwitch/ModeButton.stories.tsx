import { Story } from '@storybook/react';

import { ModeSwitch } from './ThemeModeSwitch';
import { ModeSwitchPropsType } from './ThemeModeSwitch.types';

const ModeSwitchTemplate: Story<ModeSwitchPropsType> = (args) => (
  <ModeSwitch {...args} />
);

export const DarkMode = ModeSwitchTemplate.bind({});

DarkMode.args = {
  springTransition: {
    type: 'spring',
    stiffness: 700,
    damping: 20,
  },
  label: '🌜',
  isDarkMode: true,
  changeMode: () => void 0,
};

export default {
  title: 'ModeSwitch',
  component: ModeSwitch,
  parameters: {
    layout: 'centered',
  },
};
