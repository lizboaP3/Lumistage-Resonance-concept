import React from 'react';
import { motion } from 'framer-motion';
import { MusicIcon, BookOpenIcon, MicIcon, UsersIcon } from 'lucide-react';
const features = [
{
  title: 'Rhythm Battles',
  description:
  'Hit notes to the beat in intense rhythm showdowns. Master timing, combos, and style.',
  icon: MusicIcon,
  color: '#ff2d78'
},
{
  title: 'Story Mode',
  description:
  "Follow each band's journey from underground gigs to the world stage. Your choices shape their destiny.",
  icon: BookOpenIcon,
  color: '#9b59ff'
},
{
  title: 'Live Concerts',
  description:
  'Experience full animated concert sequences. Feel the crowd, the lights, the music.',
  icon: MicIcon,
  color: '#00d4ff'
},
{
  title: 'Multiplayer Jams',
  description:
  'Team up or compete with friends. Sync your rhythms and dominate the charts.',
  icon: UsersIcon,
  color: '#ff8c00'
}];

export function GameplayFeatures() {
  return (
    <section id="gameplay" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

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
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            HOW YOU PLAY
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-nova via-velvet to-crystal" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-50px'
                }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5
                }}
                className="group relative glass-panel p-8 rounded-2xl overflow-hidden hover:bg-surfaceHighlight transition-colors duration-300">
                
                {/* Animated Gradient Border using pseudo-element */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  <div
                    className="absolute inset-0 border-2 rounded-2xl transition-colors duration-500"
                    style={{
                      borderColor: `${feature.color}40`
                    }} />
                  
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                  <div
                    className="p-4 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: `${feature.color}15`,
                      color: feature.color
                    }}>
                    
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text transition-colors"
                      style={{
                        backgroundImage: `linear-gradient(to right, #fff, ${feature.color})`
                      }}>
                      
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}