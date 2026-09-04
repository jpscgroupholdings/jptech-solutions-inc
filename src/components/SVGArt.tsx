import React from 'react';

export const CrystalForm: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 500" fill="none" className={className}>
    <defs>
      <linearGradient id="crystal-g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="crystal-g2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
      </linearGradient>
      <radialGradient id="crystal-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.1" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
      <filter id="crystal-blur">
        <feGaussianBlur stdDeviation="2" />
      </filter>
    </defs>
    {/* Background glow */}
    <ellipse cx="200" cy="260" rx="150" ry="180" fill="url(#crystal-glow)" />
    {/* Main crystal body */}
    <polygon points="200,40 310,160 280,380 120,380 90,160" fill="url(#crystal-g1)" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.4" />
    {/* Left facet */}
    <polygon points="200,40 90,160 120,380 200,260" fill="url(#crystal-g2)" stroke="#2DD4BF" strokeWidth="0.3" strokeOpacity="0.3" />
    {/* Right facet */}
    <polygon points="200,40 310,160 280,380 200,260" fill="#8B5CF6" fillOpacity="0.15" stroke="#EC4899" strokeWidth="0.3" strokeOpacity="0.3" />
    {/* Inner highlight */}
    <polygon points="200,80 260,170 240,320 160,320 140,170" fill="white" fillOpacity="0.04" />
    {/* Refraction lines */}
    <line x1="140" y1="170" x2="260" y2="170" stroke="white" strokeWidth="0.3" strokeOpacity="0.15" />
    <line x1="160" y1="320" x2="240" y2="320" stroke="white" strokeWidth="0.3" strokeOpacity="0.1" />
    <line x1="200" y1="80" x2="200" y2="380" stroke="white" strokeWidth="0.2" strokeOpacity="0.08" />
    {/* Floating shards */}
    <polygon points="60,120 80,100 95,130" fill="#8B5CF6" fillOpacity="0.25" stroke="#8B5CF6" strokeWidth="0.3" strokeOpacity="0.2" />
    <polygon points="320,200 345,185 340,220" fill="#2DD4BF" fillOpacity="0.2" stroke="#2DD4BF" strokeWidth="0.3" strokeOpacity="0.2" />
    <polygon points="70,300 55,280 85,290" fill="#EC4899" fillOpacity="0.15" stroke="#EC4899" strokeWidth="0.3" strokeOpacity="0.2" />
    <polygon points="330,340 350,325 345,355" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="0.3" strokeOpacity="0.15" />
  </svg>
);

export const GeometricForm: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 300 300" fill="none" className={className}>
    <defs>
      <linearGradient id="geo-g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
      </linearGradient>
      <radialGradient id="geo-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.2" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="150" cy="150" r="100" fill="url(#geo-glow)" />
    {/* Icosahedron-like wireframe */}
    <polygon points="150,50 230,110 210,210 90,210 70,110" fill="none" stroke="#2DD4BF" strokeWidth="0.8" strokeOpacity="0.5" />
    <polygon points="150,50 230,110 150,150" fill="url(#geo-g1)" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.3" />
    <polygon points="230,110 210,210 150,150" fill="#8B5CF6" fillOpacity="0.1" stroke="#EC4899" strokeWidth="0.5" strokeOpacity="0.3" />
    <polygon points="210,210 90,210 150,150" fill="#2DD4BF" fillOpacity="0.08" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.3" />
    <polygon points="90,210 70,110 150,150" fill="#EC4899" fillOpacity="0.06" stroke="#EC4899" strokeWidth="0.5" strokeOpacity="0.2" />
    <polygon points="70,110 150,50 150,150" fill="#8B5CF6" fillOpacity="0.12" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.3" />
  </svg>
);

export const ConstellationArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 800 600" fill="none" className={className} preserveAspectRatio="xMidYMid slice">
    {/* Constellation lines */}
    <g stroke="#8A93A6" strokeWidth="0.5" opacity="0.15">
      <line x1="100" y1="80" x2="250" y2="150" />
      <line x1="250" y1="150" x2="400" y2="90" />
      <line x1="400" y1="90" x2="550" y2="180" />
      <line x1="550" y1="180" x2="700" y2="120" />
      <line x1="250" y1="150" x2="300" y2="300" />
      <line x1="300" y1="300" x2="500" y2="350" />
      <line x1="500" y1="350" x2="550" y2="180" />
      <line x1="300" y1="300" x2="150" y2="400" />
      <line x1="150" y1="400" x2="200" y2="520" />
      <line x1="500" y1="350" x2="650" y2="450" />
      <line x1="650" y1="450" x2="700" y2="300" />
      <line x1="700" y1="300" x2="700" y2="120" />
    </g>
    {/* Nodes */}
    <g fill="#8A93A6" opacity="0.25">
      <rect x="97" y="77" width="5" height="5" />
      <rect x="247" y="147" width="5" height="5" />
      <rect x="397" y="87" width="5" height="5" />
      <rect x="547" y="177" width="5" height="5" />
      <rect x="697" y="117" width="5" height="5" />
      <rect x="297" y="297" width="5" height="5" />
      <rect x="497" y="347" width="5" height="5" />
      <rect x="147" y="397" width="5" height="5" />
      <rect x="197" y="517" width="5" height="5" />
      <rect x="647" y="447" width="5" height="5" />
      <rect x="697" y="297" width="5" height="5" />
    </g>
    {/* Hexagon accent */}
    <polygon points="680,500 710,485 740,500 740,530 710,545 680,530" stroke="#8A93A6" strokeWidth="0.5" fill="none" opacity="0.1" />
    <polygon points="50,200 80,185 110,200 110,230 80,245 50,230" stroke="#8A93A6" strokeWidth="0.5" fill="none" opacity="0.08" />
  </svg>
);

export const WaveDivider: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 1440 60" fill="none" className={className} preserveAspectRatio="none">
    <path d="M0,30 Q360,0 720,30 T1440,30" stroke="url(#wave-grad)" strokeWidth="1" fill="none" opacity="0.3" />
    <defs>
      <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#2DD4BF" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);
