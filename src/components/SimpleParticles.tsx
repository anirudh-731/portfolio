import React from 'react';

const SimpleParticles = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-tl from-neon-purple/10 via-transparent to-neon-cyan/10" 
             style={{ animation: 'float 8s ease-in-out infinite' }} />
      </div>
      
      {/* Simple animated dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
      
      {/* Floating accent elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute rounded-full bg-accent/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SimpleParticles;