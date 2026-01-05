import { motion } from "framer-motion";

interface FloatingCoinProps {
  delay?: number;
  x?: number;
  size?: number;
}

const FloatingCoin = ({ delay = 0, x = 0, size = 40 }: FloatingCoinProps) => (
  <motion.div
    className="absolute"
    style={{ left: `${x}%`, top: "50%" }}
    initial={{ y: 0, opacity: 0.7, rotate: 0 }}
    animate={{
      y: [-20, 20, -20],
      opacity: [0.5, 1, 0.5],
      rotate: [0, 360],
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div
      className="rounded-full bg-gradient-to-br from-cockatoo-yellow to-cockatoo-orange shadow-lg border-4 border-cockatoo-white/50 flex items-center justify-center font-display font-bold text-cockatoo-dark"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      $K
    </div>
  </motion.div>
);

export const FloatingCoins = () => {
  const coins = [
    { delay: 0, x: 5, size: 35 },
    { delay: 0.5, x: 15, size: 45 },
    { delay: 1, x: 25, size: 30 },
    { delay: 1.5, x: 75, size: 40 },
    { delay: 2, x: 85, size: 50 },
    { delay: 2.5, x: 92, size: 35 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {coins.map((coin, index) => (
        <FloatingCoin key={index} {...coin} />
      ))}
    </div>
  );
};
