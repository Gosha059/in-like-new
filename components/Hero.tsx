'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <div className="pt-12 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
            Like new.
            <br />
            <span className="text-gray-400">Better price.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Premium refurbished technology. Rigorously tested. Certified quality. 
            Unbeatable value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              onClick={() => scrollToSection('extrasale')}
              className="bg-[#0071E3] hover:bg-[#0077ED] text-white px-8 py-6 rounded-full text-lg"
            >
              Shop ExtraSale
            </Button>
            <Button
              onClick={() => scrollToSection('products')}
              variant="outline"
              className="border-[#0071E3] text-[#0071E3] hover:bg-[#0071E3] hover:text-white px-8 py-6 rounded-full text-lg"
            >
              Browse all products
            </Button>
          </div>

          {/* Clean stats */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto pt-12 border-t border-gray-200">
            <div>
              <div className="text-5xl mb-2 tracking-tight">50k+</div>
              <div className="text-sm text-gray-500">Happy customers</div>
            </div>
            <div>
              <div className="text-5xl mb-2 tracking-tight">99%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl mb-2 tracking-tight">12mo</div>
              <div className="text-sm text-gray-500">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}