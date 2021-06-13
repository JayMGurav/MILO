import { Story } from '@storybook/react';

import { ModeSwitch } from './ThemeModeSwitch';
import { ModeSwitchPropsType } from './ThemeModeSwitch.types';

const ModeSwitchTemplate: Story<ModeSwitchPropsType> = (args) => (
  <ModeSwitch {...args} />
);

export const LightMode = ModeSwitchTemplate.bind({});

LightMode.args = {
  springTransition: {
    type: 'spring',
    stiffness: 700,
    damping: 20,
  },
  label: '🌞',
  isDarkMode: false,
  changeMode: () => void 0,
};

export default {
  title: 'ModeSwitch',
  component: ModeSwitch,
};
