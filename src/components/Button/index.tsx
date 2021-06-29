import { IconSm } from '@/styledComponents/Icon';
import { ReactNode } from 'react';
import { StyledButton } from './Button.styles';

function Button({
  icon = null,
  label = null,
  pushable,
}: {
  type?: string;
  icon?: ReactNode;
  label?: string;
  pushable?: boolean;
}) {
  return (
    <StyledButton
      onlyIcon={icon && !label}
      aria-label={label}
      whileHover={{
        y: pushable ? -2 : 0,
      }}
      whileTap={{
        y: pushable ? 4 : 0,
      }}>
      {icon}
      {label}
    </StyledButton>
  );
}

export default Button;
