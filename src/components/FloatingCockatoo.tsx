import { motion } from "framer-motion";
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
  return (
    <motion.div
      className={`${sizes[size]} ${className}`}
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
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 },
      }}
    >
      <img
        src={cockatooLogo}
        alt="Cockatoo mascot"
        className="w-full h-full object-cover rounded-full shadow-xl border-4 border-cockatoo-white"
      />
    </motion.div>
  );
};
