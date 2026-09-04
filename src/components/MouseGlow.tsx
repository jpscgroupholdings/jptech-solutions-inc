import React, { useEffect, useState } from 'react';

const MouseGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] h-[600px] w-[600px] rounded-full opacity-[0.07] blur-[100px] transition-transform duration-700 ease-out"
      style={{
        background: 'radial-gradient(circle, #8B5CF6 0%, #2DD4BF 40%, transparent 70%)',
        transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
      }}
    />
  );
};

export default MouseGlow;
