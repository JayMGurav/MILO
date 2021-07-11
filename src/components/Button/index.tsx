import { ReactNode } from 'react';
import { StyledButton } from './Button.styles';

function Button({
  icon = null,
  label = null,
  pushable,
  disabled,
  onClick,
  color,
}: {
  type?: string;
  icon?: ReactNode;
  label?: string;
  disabled?: boolean;
  pushable?: boolean;
  onClick?: (e) => void;
  color?: string;
}) {
  return (
    <StyledButton
      disabled={disabled}
      hasIcon={icon && !label}
      aria-label={label}
      color={color}
      whileHover={{
        y: pushable ? -2 : 0,
      }}
      whileTap={{
        y: pushable ? 4 : 0,
      }}
      onClick={onClick}>
      {icon}
      {label}
    </StyledButton>
  );
}

export default Button;
