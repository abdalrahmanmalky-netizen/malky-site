import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';

interface ProjectModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-[#1a1d26] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-[modalUp_0.3s_ease-out]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[80vh]">
          {/* Image Section */}
          <div className="md:w-3/5 h-64 md:h-auto bg-black relative">
            <img 
              src={item.imageURL} 
              alt={item.title} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d26] via-transparent to-transparent md:bg-gradient-to-r"></div>
          </div>

          {/* Details Section */}
          <div className="md:w-2/5 p-8 flex flex-col overflow-y-auto">
            <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-bold text-bgDark bg-primary rounded uppercase tracking-wider">
              {item.category}
            </span>
            
            <h2 className="text-3xl font-heading font-bold text-white mb-6 leading-tight">
              {item.title}
            </h2>
            
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
            
            <p className="text-gray-300 leading-relaxed text-lg mb-8 font-light">
              {item.description}
            </p>

            <div className="mt-auto pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Project Details</h4>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-gray-500">Client</dt>
                  <dd className="text-white">Confidential</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Year</dt>
                  <dd className="text-white">2024</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Role</dt>
                  <dd className="text-white">Lead Designer</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;