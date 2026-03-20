import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
const characters = [
{
  name: 'Aria',
  band: 'NOVA PULSE',
  color: '#ff2d78',
  role: 'Lead Vocalist',
  quote: 'The future sounds like us.'
},
{
  name: 'Luna',
  band: 'VELVET ECHO',
  color: '#9b59ff',
  role: 'Lead Vocalist',
  quote: 'Close your eyes. Feel the echo.'
},
{
  name: 'Blaze',
  band: 'SOLAR FLARE',
  color: '#ff8c00',
  role: 'Lead Vocalist',
  quote: 'Turn it up until the world shakes.'
},
{
  name: 'Marina',
  band: 'CRYSTAL TIDE',
  color: '#00d4ff',
  role: 'Lead Vocalist',
  quote: 'Every wave carries a song.'
},
{
  name: 'Raven',
  band: 'MIDNIGHT BLOOM',
  color: '#e63956',
  role: 'Lead Vocalist',
  quote: 'The night is our stage.'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
export function CharacterSpotlight() {
  return (
    <section
      id="characters"
      className="py-24 bg-surface relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <SparklesIcon className="text-nova" size={28} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              MEET THE STARS
            </h2>
            <SparklesIcon className="text-velvet" size={28} />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Five bands. Five distinct voices. Choose your protagonist and lead
            them to the top of the charts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {characters.map((char) =>
          <motion.div
            key={char.name}
            variants={cardVariants}
            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            
              {/* Card Background & Border */}
              <div className="absolute inset-0 bg-surfaceHighlight border border-white/5 rounded-2xl transition-all duration-500 group-hover:border-transparent" />

              {/* Animated Glow Border on Hover */}
              <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: `inset 0 0 0 2px ${char.color}, 0 0 20px ${char.color}40`
              }} />
            

              {/* Abstract Character Graphic */}
              <div className="absolute inset-x-0 top-0 h-2/3 overflow-hidden">
                <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${char.color} 0%, transparent 70%)`
                }} />
              
                {/* Geometric shape representing character */}
                <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rotate-45 border-4 transition-transform duration-700 group-hover:rotate-90 group-hover:scale-110"
                style={{
                  borderColor: `${char.color}40`
                }} />
              
                <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full transition-transform duration-500 group-hover:scale-125"
                style={{
                  backgroundColor: `${char.color}80`,
                  boxShadow: `0 0 30px ${char.color}`
                }} />
              
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/90 to-transparent h-1/2 flex flex-col justify-end">
                <p
                className="text-xs font-bold tracking-widest uppercase mb-1"
                style={{
                  color: char.color
                }}>
                
                  {char.band}
                </p>
                <h3
                className="text-3xl font-heading font-bold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(to right, #fff, ${char.color})`
                }}>
                
                  {char.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{char.role}</p>

                {/* Hidden Quote that appears on hover */}
                <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p
                  className="text-sm italic text-white/90 border-l-2 pl-3 py-1"
                  style={{
                    borderColor: char.color
                  }}>
                  
                    "{char.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}