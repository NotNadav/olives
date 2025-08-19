import React from 'react';
import { Button } from '../../components/ui/button';

const categories = [
  { key: 'all', name: 'הכל' },
  { key: 'קפה', name: 'קפה' },
  { key: 'משקאות קרים', name: 'משקאות קרים' },
  { key: 'מאפים', name: 'מאפים' },
  { key: 'ארוחות בוקר', name: 'ארוחות בוקר' },
  { key: 'כריכים וסלטים', name: 'כריכים וסלטים' },
  { key: 'קינוחים', name: 'קינוחים' }
];

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-20 border-b" style={{borderColor: '#dcfce7'}}>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={selectedCategory === category.key ? "default" : "ghost"}
              onClick={() => onCategoryChange(category.key)}
              className={`whitespace-nowrap rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 min-w-fit ${
                selectedCategory === category.key
                  ? 'text-white shadow-lg'
                  : 'hover:bg-green-50'
              }`}
              style={selectedCategory === category.key ? 
                {background: 'linear-gradient(to right, #059669, #047857)', color: 'white'} :
                {color: '#15803d'}
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}