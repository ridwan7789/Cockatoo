import { motion } from "framer-motion";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import cockatooLogo from "@/assets/cockatoo-logo.jpeg";

interface FloatingCockatooProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  duration?: number;
}

const sizes = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export const FloatingCockatoo = ({
  className = "",
  size = "md",
  delay = 0,
  duration = 4,
}: FloatingCockatooProps) => {
  const { playSound } = useSoundEffects();

  return (
    <motion.div
      className={`${sizes[size]} ${className} cursor-pointer`}
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [-10, 10, -10],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.3,
        rotate: [0, -15, 15, -15, 15, 0],
        transition: { duration: 0.6 },
      }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => playSound("boing")}
      onClick={() => playSound("squawk")}
    >
      <img
        src={cockatooLogo}
        alt="Cockatoo mascot"
        className="w-full h-full object-cover rounded-full shadow-xl border-4 border-cockatoo-white hover-meme-jelly"
      />
    </motion.div>
  );
};
