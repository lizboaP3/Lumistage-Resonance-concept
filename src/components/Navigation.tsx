import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Bands',
    href: '#bands',
    color: '#ff2d78'
  },
  {
    name: 'Characters',
    href: '#characters',
    color: '#9b59ff'
  },
  {
    name: 'Gameplay',
    href: '#gameplay',
    color: '#ff8c00'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          className="text-3xl font-heading font-bold tracking-widest text-white flex items-center gap-2">
          
          RESONANCE
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) =>
          <motion.a
            key={link.name}
            href={link.href}
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: i * 0.1
            }}
            className="relative font-heading text-lg font-medium text-gray-300 hover:text-white transition-colors group">
            
              {link.name}
              <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{
                backgroundColor: link.color,
                boxShadow: `0 0 8px ${link.color}`
              }} />
            
            </motion.a>
          )}
          <motion.a
            href="#preorder"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.3
            }}
            className="px-6 py-2 rounded-full font-heading font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105">
            
            PRE-REGISTER
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden glass-panel border-t border-white/10 overflow-hidden">
          
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading text-xl font-medium text-gray-300 hover:text-white"
              style={{
                color: link.color
              }}>
              
                  {link.name}
                </a>
            )}
              <a
              href="#preorder"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-6 py-3 text-center rounded-full font-heading font-bold text-white bg-nova/20 border border-nova/50">
              
                PRE-ORDER NOW
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}