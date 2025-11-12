'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { FeaturedProduct } from '@/components/FeaturedProduct';
import { ExtraSale } from '@/components/ExtraSale';
import { Products } from '@/components/Products';
import { AboutUs } from '@/components/AboutUs';
import { Contact } from '@/components/Contact';
import { CursorifyProvider } from '@cursorify/react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl tracking-tight">In‑like‑new</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('extrasale')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                ExtraSale
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button
                onClick={() => scrollToSection('extrasale')}
                className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                ExtraSale
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* Featured Product Section */}
      <FeaturedProduct />

      {/* ExtraSale Section */}
      <section id="extrasale">
        <ExtraSale />
      </section>

      {/* Products Section */}
      <section id="products">
        <Products />
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F5F7] text-gray-600 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl text-gray-900 tracking-tight">In‑like‑new</span>
              </div>
              <p className="text-sm text-gray-500">
                Premium refurbished tech at unbeatable prices
              </p>
            </div>
            <div>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('extrasale')}
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  ExtraSale
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  About
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email: info@inlikenew.com</p>
              <p className="text-sm text-gray-500">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center">
            <p className="text-xs text-gray-500">&copy; 2025 In‑like‑new. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
