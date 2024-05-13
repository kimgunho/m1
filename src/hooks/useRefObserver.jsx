import { useEffect, useState } from 'react';

const useRefObserver = (ref) => {
  const [observer, setObserver] = useState({
    top: false,
    center: false,
    bottom: false,
  });

  useEffect(() => {
    const scroll = () => {
      const getTop = () => {
        const { top } = ref.current.getBoundingClientRect();
        return top < 0;
      };

      const getCenter = () => {
        const { top } = ref.current.getBoundingClientRect();
        const center = top - window.innerHeight / 2;
        return center < 0;
      };

      const getBottom = () => {
        const { bottom } = ref.current.getBoundingClientRect();
        return bottom - window.innerHeight < 0;
      };

      const top = getTop();
      const center = getCenter();
      const bottom = getBottom();
      setObserver({ top, center, bottom });
    };
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [ref]);

  return observer;
};

export default useRefObserver;
