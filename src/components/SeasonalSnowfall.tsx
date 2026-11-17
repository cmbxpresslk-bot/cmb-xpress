import { useMemo } from 'react';
import { motion } from 'motion/react';

interface SeasonalSnowfallProps {
  active: boolean;
}

export function SeasonalSnowfall({ active }: SeasonalSnowfallProps) {
  const flakes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 5.7 + 3) % 96}%`,
        size: i % 3 === 0 ? 5 : 3,
        duration: 8 + (i % 5) * 2.2,
        delay: (i % 6) * 0.9,
        isGold: i % 4 === 0,
      })),
    []
  );

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {flakes.map((flake) => (
        <motion.span
          key={flake.id}
          initial={{ y: -16, opacity: 0 }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.55, 0.55, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            top: '-12px',
          }}
          className={`absolute rounded-full ${
            flake.isGold ? 'bg-[#D4AF37]/70' : 'bg-white/45'
          }`}
        />
      ))}
    </div>
  );
}
