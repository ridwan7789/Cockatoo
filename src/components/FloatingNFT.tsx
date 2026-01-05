import { motion } from "framer-motion";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import nft1 from "@/assets/nfts/nft-1.jpeg";
import nft2 from "@/assets/nfts/nft-2.jpeg";
import nft3 from "@/assets/nfts/nft-3.jpeg";
import nft4 from "@/assets/nfts/nft-4.jpeg";
import nft5 from "@/assets/nfts/nft-5.jpeg";
import nft6 from "@/assets/nfts/nft-6.jpeg";
import nft7 from "@/assets/nfts/nft-7.jpeg";
import nft8 from "@/assets/nfts/nft-8.jpeg";
import nft9 from "@/assets/nfts/nft-9.jpeg";
import nft10 from "@/assets/nfts/nft-10.jpeg";

export const nftImages = [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8, nft9, nft10];

interface FloatingNFTProps {
  className?: string;
  imageIndex?: number;
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  duration?: number;
  interactive?: boolean;
}

const sizes = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export const FloatingNFT = ({
  className = "",
  imageIndex = 0,
  size = "md",
  delay = 0,
  duration = 4,
  interactive = true,
}: FloatingNFTProps) => {
  const image = nftImages[imageIndex % nftImages.length];
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
      whileHover={interactive ? {
        scale: 1.3,
        rotate: [0, -15, 15, -10, 10, 0],
        transition: { duration: 0.4 },
      } : undefined}
      whileTap={interactive ? { scale: 0.9 } : undefined}
      onHoverStart={() => interactive && playSound("pop")}
      onClick={() => interactive && playSound("squawk")}
    >
      <img
        src={image}
        alt={`Cockatoo NFT ${imageIndex + 1}`}
        className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-cockatoo-white nft-hover"
      />
    </motion.div>
  );
};

// Component for floating NFTs as coins replacement
interface FloatingNFTsProps {
  count?: number;
}

export const FloatingNFTs = ({ count = 6 }: FloatingNFTsProps) => {
  const positions = [
    { x: 5, y: 20, size: "sm" as const },
    { x: 15, y: 60, size: "md" as const },
    { x: 25, y: 30, size: "sm" as const },
    { x: 75, y: 50, size: "md" as const },
    { x: 85, y: 25, size: "lg" as const },
    { x: 92, y: 70, size: "sm" as const },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.slice(0, count).map((pos, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: 1,
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={nftImages[index % nftImages.length]}
            alt={`Floating NFT ${index + 1}`}
            className={`${sizes[pos.size]} object-cover rounded-xl shadow-lg border-2 border-cockatoo-yellow/50`}
          />
        </motion.div>
      ))}
    </div>
  );
};
