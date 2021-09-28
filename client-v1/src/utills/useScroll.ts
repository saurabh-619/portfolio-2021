import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    setPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { position };
};
