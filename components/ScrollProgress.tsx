import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    setScrollWidth(Number(scroll));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,242,234,0.7)]"
        style={{ width: `${scrollWidth * 100}%` }}
      />
    </div>
  );
};

export default ScrollProgress;