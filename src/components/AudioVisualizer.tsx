import React from 'react';
interface AudioVisualizerProps {
  color: string;
  barCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export function AudioVisualizer({
  color,
  barCount = 15,
  size = 'md',
  className = ''
}: AudioVisualizerProps) {
  const heights = ['sm', 'md', 'lg'];
  const sizeMap = {
    sm: 'h-8 w-1',
    md: 'h-16 w-1.5',
    lg: 'h-32 w-2'
  };
  const gapMap = {
    sm: 'gap-1',
    md: 'gap-1.5',
    lg: 'gap-2'
  };
  return (
    <div
      className={`flex items-end justify-center ${gapMap[size]} ${className}`}>
      
      {Array.from({
        length: barCount
      }).map((_, i) => {
        // Randomize animation duration and delay for organic feel
        const duration = 0.4 + Math.random() * 0.8;
        const delay = Math.random() * -2;
        return (
          <div
            key={i}
            className={`eq-bar rounded-t-sm ${sizeMap[size]}`}
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}80`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              height: `${20 + Math.random() * 80}%`
            }} />);


      })}
    </div>);

}