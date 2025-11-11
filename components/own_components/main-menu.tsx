"use client"
import * as React from "react"
import Link from "next/link"
import { useState } from "react";
import { Menu, X, Sparkles, Shield, TrendingDown, Phone } from 'lucide-react';



export function MainMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    } }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 -z-1">
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
  ) };