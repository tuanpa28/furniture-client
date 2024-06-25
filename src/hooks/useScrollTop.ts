import { useState, useEffect } from 'react';

export const useScrollTop = (threshold: number) => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsFixed(scrollTop >= threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isFixed;
};
