import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative bg-bgDark text-white min-h-screen font-sans selection:bg-primary selection:text-bgDark">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="animate-[fadeIn_1s_ease-out]">
            <ScrollProgress />
            <Navbar />
            
            <div className="relative z-0">
                 {/* Global Grid Overlay for texture */}
                <div 
                    className="fixed inset-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
                ></div>

                <Hero />
                <PortfolioGrid />
                <Contact />

                <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
                    <p>&copy; {new Date().getFullYear()} Malky Port. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default App;