'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Laptop, Smartphone, Headphones, Tablet, Watch, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  { id: 'all', name: 'All', icon: null },
  { id: 'laptops', name: 'Mac', icon: Laptop },
  { id: 'phones', name: 'iPhone', icon: Smartphone },
  { id: 'audio', name: 'Audio', icon: Headphones },
  { id: 'tablets', name: 'iPad', icon: Tablet },
  { id: 'wearables', name: 'Watch', icon: Watch },
  { id: 'cameras', name: 'Camera', icon: Camera },
];

const products = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    price: 1899,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1643691291828-648e708e16c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZ1cmJpc2hlZCUyMGxhcHRvcCUyMGNvbXB1dGVyfGVufDF8fHx8MTc2MjQ2MDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excellent',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 999,
    category: 'phones',
    image: 'https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzYyNDU3NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Like New',
  },
  {
    id: 3,
    name: 'AirPods Max',
    price: 399,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYyNTI4ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excellent',
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 899,
    category: 'tablets',
    image: 'https://images.unsplash.com/photo-1760708369071-e8a50a8979cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYyNTU3OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Like New',
  },
  {
    id: 5,
    name: 'Apple Watch Ultra',
    price: 599,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI0NjE2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excellent',
  },
  {
    id: 6,
    name: 'Canon EOS R6',
    price: 1799,
    category: 'cameras',
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjI0NjgyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Like New',
  },
  {
    id: 7,
    name: 'MacBook Air M2',
    price: 949,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1643691291828-648e708e16c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZ1cmJpc2hlZCUyMGxhcHRvcCUyMGNvbXB1dGVyfGVufDF8fHx8MTc2MjQ2MDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Very Good',
  },
  {
    id: 8,
    name: 'iPhone 14 Plus',
    price: 649,
    category: 'phones',
    image: 'https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzYyNDU3NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excellent',
  },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#FBFBFD] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">All Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Certified refurbished. Quality guaranteed.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  isActive
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{category.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-4 bg-white rounded-2xl overflow-hidden aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">{product.condition}</p>
                <h3 className="text-xl mb-2 tracking-tight">{product.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl tracking-tight">${product.price}</span>
                </div>
                <Button className="w-full bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-full">
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}