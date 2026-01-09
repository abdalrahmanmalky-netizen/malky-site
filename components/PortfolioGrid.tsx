
import React, { useMemo, useState } from 'react';
import { ALL_CATEGORY, PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';
import ProjectModal from './ProjectModal';

const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Derive unique categories from items
  const categories = useMemo(() => {
    const unique = new Set(PORTFOLIO_ITEMS.map(item => item.category));
    return [ALL_CATEGORY, ...Array.from(unique)];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">My Creative Arsenal</h2>
             <p className="text-gray-400">Selected works from 2023-2024</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,242,234,0.2)]'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <PortfolioCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Modal Rendering */}
      {selectedItem && (
        <ProjectModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
};

const PortfolioCard: React.FC<{ item: PortfolioItem; onClick: () => void }> = ({ item, onClick }) => {
  return (
    <div 
        onClick={onClick}
        className="block break-inside-avoid group relative rounded-2xl overflow-hidden bg-glass border border-glassBorder glass-card hover:border-primary/60 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,242,234,0.3)] transition-all duration-500 cursor-pointer"
    >
        <div className="relative overflow-hidden">
            <img 
                src={item.imageURL} 
                alt={item.title} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            {/* Content showing on hover (or always visible at bottom) */}
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-bgDark bg-primary rounded">
                    {item.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                </h3>
            </div>
            
            {/* Action Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </div>
        </div>
    </div>
  );
};

export default PortfolioGrid;
