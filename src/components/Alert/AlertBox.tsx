import { Info, CheckCircle, XCircle, AlertTriangle } from 'react-feather';

import {
  AlertBoxDiv,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from './Alert.styles';

interface AlertProps {
  type: 'error' | 'success' | 'warning' | 'info';
  title: string;
  description: string;
}

function AlertBox({ type, title, description }: AlertProps) {
  const iconBgColorObj = {
    error: {
      icon: <XCircle size="24px" />,
      background: 'var(--color-red200)',
      iconBackground: 'var(--color-red300)',
    },
    success: {
      icon: <CheckCircle size="24px" />,
      background: '',
      iconBackground: 'var(--color-red300)',
    },
    info: {
      icon: <Info size="24px" />,
      background: '',
      iconBackground: 'var(--color-red300)',
    },
    warning: {
      icon: <AlertTriangle size="24px" />,
      background: '',
      iconBackground: 'var(--color-red300)',
    },
  };
  return (
    <AlertBoxDiv bg={iconBgColorObj[type].background}>
      <AlertIcon bg={iconBgColorObj[type].iconBackground}>
        {iconBgColorObj[type].icon}
      </AlertIcon>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </AlertBoxDiv>
  );
}

export default AlertBox;
