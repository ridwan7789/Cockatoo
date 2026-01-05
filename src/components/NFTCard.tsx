import { motion } from "framer-motion";
import { useState } from "react";
import { NFT, rarityColors, rarityBorders } from "@/data/nftData";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NFTCardProps {
  nft: NFT;
  index: number;
}

export const NFTCard = ({ nft, index }: NFTCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div
        className={`bg-cockatoo-white rounded-3xl overflow-hidden shadow-lg border-4 ${rarityBorders[nft.rarity]} transition-all duration-300 hover:shadow-xl`}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={nft.image}
            alt={nft.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-cockatoo-dark/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Like button */}
          <motion.button
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isLiked
                ? "bg-cockatoo-pink text-cockatoo-white"
                : "bg-cockatoo-white/80 text-foreground hover:bg-cockatoo-pink hover:text-cockatoo-white"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </motion.button>

          {/* Rarity badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold font-display ${rarityColors[nft.rarity]}`}
            >
              {nft.rarity}
            </span>
          </div>

          {/* Quick buy on hover */}
          <motion.div
            className="absolute bottom-3 left-3 right-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant="hero" size="sm" className="w-full">
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </Button>
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display font-bold text-lg text-foreground truncate">
              {nft.name}
            </h3>
            <span className="text-xs text-muted-foreground font-body">
              #{nft.id.toString().padStart(4, "0")}
            </span>
          </div>

          {/* Traits preview */}
          <div className="flex flex-wrap gap-1 mb-3">
            {nft.traits.slice(0, 3).map((trait) => (
              <span
                key={trait.value}
                className="px-2 py-0.5 bg-secondary rounded-full text-xs font-body text-secondary-foreground"
              >
                {trait.value}
              </span>
            ))}
            {nft.traits.length > 3 && (
              <span className="px-2 py-0.5 bg-muted rounded-full text-xs font-body text-muted-foreground">
                +{nft.traits.length - 3}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-muted-foreground font-body">Price</span>
              <p className="font-display font-bold text-foreground">
                {nft.price} SOL
              </p>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-cockatoo-yellow to-cockatoo-orange flex items-center justify-center text-xs font-bold text-cockatoo-dark font-display shadow-md"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              $K
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
