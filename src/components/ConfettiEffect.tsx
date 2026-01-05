import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
}

const colors = [
  "#FFD700", // gold
  "#FF6B9D", // pink
  "#00D4FF", // cyan
  "#FF8C00", // orange
  "#9B59B6", // purple
  "#2ECC71", // green
  "#FF4757", // red
  "#FFFFFF", // white
];

const shapes = ["circle", "square", "triangle", "star"];

export const useConfetti = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerConfetti = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = [];
    const particleCount = 20 + Math.floor(Math.random() * 15);

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 10,
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * 400,
        velocityY: -200 - Math.random() * 300,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles after animation
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id))
      );
    }, 1500);
  }, []);

  return { particles, triggerConfetti };
};

interface ConfettiRendererProps {
  particles: Particle[];
}

export const ConfettiRenderer = ({ particles }: ConfettiRendererProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0,
              rotate: 0,
              opacity: 1,
            }}
            animate={{
              x: particle.x + particle.velocityX,
              y: particle.y + particle.velocityY + 500,
              scale: [0, 1.2, 1, 0.8],
              rotate: particle.rotation + Math.random() * 720,
              opacity: [1, 1, 0.8, 0],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 1.2 + Math.random() * 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius:
                Math.random() > 0.5 ? "50%" : Math.random() > 0.5 ? "2px" : "0",
              boxShadow: `0 0 ${particle.size / 2}px ${particle.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Star shape component for variety
const StarShape = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
