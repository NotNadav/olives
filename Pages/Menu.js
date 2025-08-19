
"use client";

import React, { useState, useMemo } from 'react';
import { menuItems as menuData } from '../data/menuItems';
import MenuHeader from '../components/Menu/MenuHeader.js';
import CategoryFilter from '../components/Menu/CategoryFilter.js';
import MenuItemCard from '../components/Menu/MenuItemCard.js';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Memoize expensive calculations
  const { filteredItems, groupedItems } = useMemo(() => {
    const filtered = selectedCategory === 'all' 
      ? menuData 
      : menuData.filter(item => item.category === selectedCategory);

    const grouped = filtered.reduce((groups, item) => {
      const category = item.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
      return groups;
    }, {});

    return { filteredItems: filtered, groupedItems: grouped };
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 to-lime-50/30" dir="rtl" style={{background: 'linear-gradient(to bottom, rgba(240, 253, 244, 0.5), rgba(247, 254, 231, 0.3))'}}>
      <MenuHeader />
      
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="space-y-8 sm:space-y-12">
          {selectedCategory === 'all' ? (
            // Show items grouped by category
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{color: '#1a472a'}}>{category}</h2>
                  <div className="w-20 sm:w-24 h-1 mx-auto rounded-full" style={{background: 'linear-gradient(to right, #22c55e, #16a34a)'}}></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show filtered items
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="text-4xl sm:text-6xl mb-4">🫒</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{color: '#1a472a'}}>אין פריטים בקטגוריה זו</h3>
              <p className="text-sm sm:text-base" style={{color: '#15803d'}}>נסה לבחור קטגוריה אחרת</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-8 sm:py-12 mt-12 sm:mt-16" style={{background: 'linear-gradient(135deg, #1a472a, #15803d)'}}>
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Olives - אוליבס קפה בין הזיתים</h3>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{color: '#bbf7d0'}}>חוויית קפה אותנטית בלב הטבע</p>
          <div className="text-xs sm:text-sm mb-4 sm:mb-6" style={{color: '#d1fae5'}}>
            <p>שעות פתיחה: חמישי 17:00-22:00 | שישי 9:00-17:00 | שבת 10:00-19:00</p>
            <p className="mt-2">טלפון: 050-2512529</p>
          </div>
          
          {/* Copyright Section */}
          <div className="border-t pt-4 sm:pt-6 mt-4 sm:mt-6 text-xs space-y-1" style={{borderColor: '#22543d', color: '#d1fae5'}}>
            <p>© 2024 Olives Coffee Trail. כל הזכויות שמורות.</p>
            <p>פותח על ידי נדב כהן | Developed by Nadav Cohen</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

