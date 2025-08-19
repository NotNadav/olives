import React from 'react';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent } from '../../components/ui/card';
import { Star } from 'lucide-react';

export default function MenuItemCard({ item }) {
  return (
    <Card className="group overflow-hidden bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative">
        {item.image_url && (
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={item.image_url} 
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        {item.is_popular && (
          <Badge className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white shadow-lg text-xs sm:text-sm" style={{background: 'linear-gradient(to right, #059669, #047857)'}}>
            <Star className="w-3 h-3 mr-1 fill-current" />
            פופולרי
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#1a472a'}}>{item.name}</h3>
          <span className="text-xl sm:text-2xl font-bold ml-3 sm:ml-4" style={{color: '#059669'}}>₪{item.price}</span>
        </div>
        
        {item.description && (
          <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4" style={{color: 'rgba(21, 128, 61, 0.8)'}}>{item.description}</p>
        )}
        
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="text-xs sm:text-sm" style={{color: '#059669', borderColor: '#bbf7d0'}}>
            {item.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}