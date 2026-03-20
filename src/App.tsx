import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BandShowcase } from './components/BandShowcase';
import { CharacterSpotlight } from './components/CharacterSpotlight';
import { GameplayFeatures } from './components/GameplayFeatures';
import { ReleaseSection } from './components/ReleaseSection';
export function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-nova selection:text-white">
      <Navigation />

      <main>
        <HeroSection />
        <BandShowcase />
        <CharacterSpotlight />
        <GameplayFeatures />
        <ReleaseSection />
      </main>

      <footer className="bg-background border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p className="font-heading text-lg mb-2">LUMISTAGE PROJECT © 2027</p>
        <p>This is a promotional concept. Not a real game.</p>
      </footer>
    </div>);

}