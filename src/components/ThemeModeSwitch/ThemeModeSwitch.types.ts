export type SpringTransitionType = {
  type: 'spring';
  stiffness: number;
  damping: number;
};

export type ModeSwitchPropsType = {
  springTransition: SpringTransitionType;
  label: '🌞' | '🌜';
  isDarkMode: boolean;
  changeMode: () => void;
};
