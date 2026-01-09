import React, { useEffect, useState } from 'react';
import { SITE_NAME } from '../constants';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2s
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 2000);

    // Remove component after 2.5s
    const timer2 = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-bgDark transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse-slow tracking-wider">
          {SITE_NAME}
        </h1>
        <div className="mt-4 h-1 w-32 mx-auto bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary animate-[loading_2s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;