import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioVisualizer } from './AudioVisualizer';
const bands = [
{
  id: 'nova',
  name: 'NOVA PULSE',
  color: '#ff2d78',
  genre: 'Electropop',
  vibe: 'Futuristic, high-energy, neon lights',
  description:
  'Lighting up the digital frontier with beats that shatter dimensions. Three girls, one mission: make the future dance.',
  members: [
  {
    name: 'Aria',
    role: 'Lead Vocalist',
    tagline: 'The voice of tomorrow.'
  },
  {
    name: 'Kira',
    role: 'DJ / Synth',
    tagline: 'Hacking the mainframe with bass.'
  },
  {
    name: 'Lexi',
    role: 'Electronic Drums',
    tagline: 'Heartbeat of the machine.'
  }]

},
{
  id: 'velvet',
  name: 'VELVET ECHO',
  color: '#9b59ff',
  genre: 'Dream pop',
  vibe: 'Ethereal, mysterious, starlit',
  description:
  'Whispers that become anthems. Their dreamy melodies pull you into a world between stars and silence.',
  members: [
  {
    name: 'Luna',
    role: 'Lead Vocalist',
    tagline: 'Singing to the cosmos.'
  },
  {
    name: 'Stella',
    role: 'Keyboardist',
    tagline: 'Weaving constellations in sound.'
  },
  {
    name: 'Nova',
    role: 'Bassist',
    tagline: 'The gravity holding it together.'
  }]

},
{
  id: 'solar',
  name: 'SOLAR FLARE',
  color: '#ff8c00',
  genre: 'Rock / Punk',
  vibe: 'Bold, rebellious, fire',
  description:
  "Raw power, untamed spirit. They don't just play music — they ignite revolutions with every chord.",
  members: [
  {
    name: 'Blaze',
    role: 'Lead Vocalist / Guitar',
    tagline: 'Burning down the rules.'
  },
  {
    name: 'Roxy',
    role: 'Bassist',
    tagline: 'Thunder in her fingertips.'
  },
  {
    name: 'Jett',
    role: 'Drummer',
    tagline: 'Explosive rhythm, zero apologies.'
  }]

},
{
  id: 'crystal',
  name: 'CRYSTAL TIDE',
  color: '#00d4ff',
  genre: 'Synthwave',
  vibe: 'Cool, oceanic, crystalline',
  description:
  'Riding waves of pure synth energy. Their sound is the ocean at midnight — vast, electric, unstoppable.',
  members: [
  {
    name: 'Marina',
    role: 'Lead Vocalist',
    tagline: 'Siren of the digital sea.'
  },
  {
    name: 'Pearl',
    role: 'Keytar',
    tagline: 'Surfing the neon waves.'
  },
  {
    name: 'Coral',
    role: 'Electronic Percussion',
    tagline: 'Crashing like the tide.'
  }]

},
{
  id: 'midnight',
  name: 'MIDNIGHT BLOOM',
  color: '#e63956',
  genre: 'Jazz / R&B',
  vibe: 'Elegant, sultry, moonlit',
  description:
  'Where moonlight meets melody. Smooth, sophisticated, and dangerously captivating.',
  members: [
  {
    name: 'Raven',
    role: 'Lead Vocalist',
    tagline: 'A voice like dark velvet.'
  },
  {
    name: 'Jade',
    role: 'Saxophone / Keys',
    tagline: 'Breathing soul into the night.'
  },
  {
    name: 'Scarlet',
    role: 'Upright Bass',
    tagline: 'The pulse in the shadows.'
  }]

}];

export function BandShowcase() {
  const [activeBandId, setActiveBandId] = useState(bands[0].id);
  const activeBand = bands.find((b) => b.id === activeBandId)!;
  return (
    <section
      id="bands"
      className="relative py-24 min-h-screen flex flex-col overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: `${activeBand.color}0a`
      }}>
      
      {/* Dynamic Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{
          backgroundColor: activeBand.color
        }} />
      

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
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
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            THE BANDS
          </h2>
          <div
            className="h-1 w-24 mx-auto rounded-full transition-colors duration-500"
            style={{
              backgroundColor: activeBand.color
            }} />
          
        </motion.div>

        {/* Band Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
          {bands.map((band) =>
          <button
            key={band.id}
            onClick={() => setActiveBandId(band.id)}
            className={`relative px-6 py-3 rounded-full font-heading font-bold text-lg transition-all duration-300 overflow-hidden ${activeBandId === band.id ? 'text-white scale-105' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            
              {activeBandId === band.id &&
            <motion.div
              layoutId="activeBandTab"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundColor: band.color
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }} />

            }
              <div className="relative z-10 flex items-center gap-2">
                <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: band.color,
                  boxShadow: `0 0 8px ${band.color}`
                }} />
              
                {band.name}
              </div>
              {activeBandId === band.id &&
            <div
              className="absolute inset-0 border-2 rounded-full"
              style={{
                borderColor: band.color
              }} />

            }
            </button>
          )}
        </div>

        {/* Active Band Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBand.id}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -20
              }}
              transition={{
                duration: 0.4
              }}
              className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Band Info */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <div
                  className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase"
                  style={{
                    backgroundColor: `${activeBand.color}20`,
                    color: activeBand.color,
                    border: `1px solid ${activeBand.color}50`
                  }}>
                  
                  {activeBand.genre}
                </div>
                <h3
                  className="text-5xl md:text-7xl font-heading font-bold mb-4 leading-none"
                  style={{
                    textShadow: `0 0 30px ${activeBand.color}60`
                  }}>
                  
                  {activeBand.name}
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {activeBand.description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gray-400 font-medium">VIBE:</span>
                  <span className="text-white font-heading text-lg">
                    {activeBand.vibe}
                  </span>
                </div>

                <AudioVisualizer
                  color={activeBand.color}
                  barCount={12}
                  size="sm" />
                
              </div>

              {/* Members Grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
                {activeBand.members.map((member, idx) =>
                <motion.div
                  key={member.name}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: 0.2 + idx * 0.1
                  }}
                  className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                  
                    <div
                    className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundColor: activeBand.color,
                      boxShadow: `0 0 10px ${activeBand.color}`
                    }} />
                  

                    {/* Abstract Avatar Placeholder */}
                    <div className="w-16 h-16 rounded-full mb-6 relative flex items-center justify-center overflow-hidden">
                      <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundColor: activeBand.color
                      }} />
                    
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20" />
                      <span
                      className="font-heading font-bold text-2xl"
                      style={{
                        color: activeBand.color
                      }}>
                      
                        {member.name[0]}
                      </span>
                    </div>

                    <h4 className="text-2xl font-heading font-bold mb-1">
                      {member.name}
                    </h4>
                    <p
                    className="text-sm font-bold mb-4 uppercase tracking-wider"
                    style={{
                      color: activeBand.color
                    }}>
                    
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm italic">
                      "{member.tagline}"
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}