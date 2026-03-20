import React from 'react';
import { motion } from 'framer-motion';
import {
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  ZapIcon,
  HeartIcon } from
'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
export function ReleaseSection() {
  return (
    <section
      id="preorder"
      className="relative py-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Animated Shifting Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nova/20 via-velvet/20 to-crystal/20 animate-gradient-x opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-nova via-velvet to-crystal">
            COMING SPRING 2027
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['PC / STEAM', 'PLAYSTATION 5', 'NINTENDO SWITCH'].map(
              (platform) =>
              <span
                key={platform}
                className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-bold tracking-widest text-gray-300">
                
                  {platform}
                </span>

            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 w-full">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-background font-heading font-bold text-2xl rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3">
              PRE-REGISTER NOW
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass-panel font-heading font-bold text-2xl rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-3">
              <HeartIcon />
              WISHLIST ON STEAM
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 mb-16">
            <a
              href="#"
              className="text-gray-400 hover:text-nova transition-colors hover:scale-110 transform duration-300">
              
              <TwitterIcon size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-velvet transition-colors hover:scale-110 transform duration-300">
              
              <InstagramIcon size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-midnight transition-colors hover:scale-110 transform duration-300">
              
              <YoutubeIcon size={28} />
            </a>
          </div>
        </motion.div>

        <AudioVisualizer
          color="#ffffff"
          barCount={20}
          size="md"
          className="opacity-30" />
        
      </div>
    </section>);

}