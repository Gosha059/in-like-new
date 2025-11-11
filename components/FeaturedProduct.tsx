'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
              Premium comfort. Now refurbished.
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
                <div className="text-4xl tracking-tight mb-1">$279</div>
                <div className="text-sm text-gray-400 line-through">$399</div>
              </div>
              <Button className="bg-white hover:bg-gray-100 text-black px-8 py-6 rounded-full">
                Buy Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated Product Image */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Animated background circle */}
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
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761005654347-f5907893edb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb255JTIwaGVhZHBob25lcyUyMHByZW1pdW18ZW58MXx8fHwxNzYyNTYzMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sony WH-1000XM6 Headphones"
                  className="w-full max-w-md drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Animated accent elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-20 right-10 w-32 h-32 border border-white/30 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-20 left-10 w-24 h-24 border border-white/20 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}