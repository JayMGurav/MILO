import { useEffect, useState } from 'react';
import useViewportSize from './useViewportSize';

type TScreenType = 'xs' | 'sm' | 'md' | 'lg' | null;

function useScreenType() {
  const { width } = useViewportSize();
  const [screenType, setScreenType] = useState<TScreenType>(null);

  useEffect(() => {
    if (width <= 480) {
      setScreenType('xs');
    } else if (width <= 680) {
      setScreenType('sm');
    } else if (width <= 960) {
      setScreenType('md');
    } else {
      setScreenType('lg');
    }
  }, [width]);

  return screenType;
}

export default useScreenType;
