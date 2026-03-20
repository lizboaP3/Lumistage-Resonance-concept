import React, { useEffect, useState, Children } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
const bandColors = ['#ff2d78', '#9b59ff', '#ff8c00', '#00d4ff', '#e63956'];
export function HeroSection() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % bandColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const activeColor = bandColors[currentColorIndex];
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({
          length: 15
        }).map((_, i) =>
        <div
          key={i}
          className={`absolute rounded-full mix-blend-screen ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
          style={{
            width: Math.random() * 100 + 20 + 'px',
            height: Math.random() * 100 + 20 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, ${bandColors[i % 5]}20 0%, transparent 70%)`,
            filter: 'blur(10px)'
          }} />

        )}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="mb-6">
          
          <h1
            className="text-7xl md:text-9xl font-heading font-bold tracking-tighter transition-all duration-1000"
            style={{
              textShadow: `0 0 40px ${activeColor}80, 0 0 80px ${activeColor}40`,
              color: '#ffffff'
            }}>
            
            LUMISTAGE RESONANCE
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.5
              }
            }
          }}
          className="flex flex-wrap justify-center gap-x-2 text-xl md:text-3xl font-heading font-medium text-gray-300 mb-12 tracking-wide">
          
          {'Feel the Beat. Lead the Stage.'.split(' ').map((word, i) =>
          <motion.span
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 20
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }}>
            
              {word}
            </motion.span>
          )}
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1.2,
            duration: 0.5
          }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-24">
          
          <a
            href="#preorder"
            className="group relative px-8 py-4 bg-white text-background font-heading font-bold text-xl rounded-full overflow-hidden animate-pulse-glow">
            
            <span className="relative z-10">PRE-REGISTER NOW</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                backgroundColor: activeColor
              }} />
            
          </a>
          <a
            href="#bands"
            className="px-8 py-4 font-heading font-bold text-xl rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
            
            MEET THE BANDS
            <ChevronDownIcon size={20} />
          </a>
        </motion.div>
      </div>

      {/* Bottom Visualizer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-60 pointer-events-none flex items-end justify-center overflow-hidden">
        <AudioVisualizer
          color={activeColor}
          barCount={40}
          size="lg"
          className="w-[120%] -mb-4" />
        
      </div>
    </section>);

}