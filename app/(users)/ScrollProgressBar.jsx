'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth((scrollTop / height) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div
      id="scroll-progress"
      style={{
        position: 'fixed',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        boxShadow: 'rgba(211, 154, 240, 0.76) 0px 50px 100px -20px, rgba(221, 201, 201, 0.3) 0px 30px 60px -30px',
        width: `${width}%`,
        height: '2px',
        background: 'linear-gradient(to right, rgba(144, 77, 239, 1), rgba(120, 71, 253, 1))',
        transition: 'width 0.1s ease-in-out',
        zIndex: 10000,
      }}
    />
  );
}
