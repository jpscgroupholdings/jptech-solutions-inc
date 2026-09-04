import React from 'react';

interface ConstellationDecorProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const positionClasses: Record<string, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0 scale-x-[-1]',
  'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
  'bottom-right': 'bottom-0 right-0 scale-x-[-1] scale-y-[-1]',
};

const ConstellationDecor: React.FC<ConstellationDecorProps> = ({ position }) => (
  <div className={`absolute ${positionClasses[position]} pointer-events-none opacity-30`}>
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-df-body"
    >
      {/* Constellation lines */}
      <line x1="20" y1="40" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="80" y1="20" x2="120" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="120" y1="70" x2="60" y2="110" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="60" y1="110" x2="140" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <line x1="140" y1="140" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="80" y1="20" x2="160" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="160" y1="50" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="190" y1="100" x2="140" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />

      {/* Nodes (small squares) */}
      <rect x="18" y="38" width="4" height="4" fill="currentColor" opacity="0.6" />
      <rect x="78" y="18" width="4" height="4" fill="currentColor" opacity="0.7" />
      <rect x="118" y="68" width="4" height="4" fill="currentColor" opacity="0.5" />
      <rect x="58" y="108" width="4" height="4" fill="currentColor" opacity="0.6" />
      <rect x="138" y="138" width="4" height="4" fill="currentColor" opacity="0.5" />
      <rect x="98" y="188" width="4" height="4" fill="currentColor" opacity="0.4" />
      <rect x="158" y="48" width="4" height="4" fill="currentColor" opacity="0.5" />
      <rect x="188" y="98" width="4" height="4" fill="currentColor" opacity="0.6" />

      {/* Hexagon outline */}
      <polygon
        points="170,160 190,172 190,196 170,208 150,196 150,172"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.2"
      />
    </svg>
  </div>
);

export default ConstellationDecor;
