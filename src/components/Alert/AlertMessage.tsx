import { Info, CheckCircle, XCircle, AlertTriangle } from 'react-feather';

import { Alert, AlertIconSm } from './Alert.styles';

interface AlertProps {
  type: 'error' | 'success' | 'warning' | 'info';
  title: string;
  description: string;
}

function AlertMessage({ type, title, description }: AlertProps) {
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
    <Alert bg={iconBgColorObj[type].background}>
      <AlertIconSm bg={iconBgColorObj[type].iconBackground}>
        {iconBgColorObj[type].icon}
      </AlertIconSm>
      <p>
        <strong>{title}: </strong>
        {description}
      </p>
    </Alert>
  );
}

export default AlertMessage;
