'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sonyImg from "@/public/img/sony_wh1000mx6.webp";
import { redirect } from 'next/dist/server/api-utils';
import { url } from 'inspector';

export function FeaturedProduct() {
  return (
    <div className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm uppercase tracking-widest text-gray-400 mb-4"
            >
              Premium Audio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl mb-6 tracking-tight"
            >
              Sony WH‑1000XM6
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-400 mb-8 max-w-md"
            >
              Industry‑leading noise cancellation. Exceptional sound quality. 
              Premium comfort. 
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="text-sm text-gray-300">Up to 30 hours battery life</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="text-sm text-gray-300">Advanced noise cancellation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="text-sm text-gray-300">Premium build quality</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <div>
                <div className="text-4xl tracking-tight mb-1">$299</div>
                <div className="text-sm text-gray-400 line-through">$399</div>
              </div>
              <Button onClick={() => window.open('https://www.ebay.com/itm/227062792417')} className="bg-white hover:bg-gray-400 text-black px-8 py-6 rounded-full">
                Buy Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated Product Image */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Animated background circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-96 h-96 bg-white rounded-full blur-3xl"
            />
             <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-96 h-96 bg-white rounded-full blur-3xl"
            />
             <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-96 h-96 bg-white rounded-full blur-3xl"
            />

            {/* Product image with parallax effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ImageWithFallback
                  src="/img/sony_wh1000mx6.webp"
                  alt="Sony WH-1000XM6 Headphones"
                  className="w-full max-w-md drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Animated accent elements */}

            
          </div>
        </div>
      </div>
    </div>
  );
}