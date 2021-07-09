import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

interface IViewportSize {
  width: number;
  height: number;
}

function useViewportSize() {
  const [viewportSize, setViewportSize] = useState<IViewportSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const viewportSizeSetter = () => {
      setViewportSize({
        width: window.visualViewport?.width ?? window.innerWidth,
        height: window.visualViewport?.height ?? window.innerHeight,
      });
    };
    viewportSizeSetter();
    const debounced = debounce(viewportSizeSetter, 1000);
    window.addEventListener('resize', debounced);

    return () => {
      debounced.cancel();
      window.removeEventListener('resize', debounced);
    };
  }, []);

  return viewportSize;
}

export default useViewportSize;
