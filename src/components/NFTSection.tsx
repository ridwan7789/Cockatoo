import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Key, Star, Award } from "lucide-react";
import { nftImages } from "./FloatingNFT";
import nftBanner from "@/assets/cockatoo-nft-banner.jpeg";

const nftFeatures = [
  { icon: Shield, label: "Identity", desc: "Your unique on-chain identity", nftIndex: 4 },
  { icon: Key, label: "Access", desc: "Unlock exclusive features", nftIndex: 5 },
  { icon: Star, label: "Reputation", desc: "Build your community standing", nftIndex: 6 },
  { icon: Award, label: "Benefits", desc: "Earn rewards and perks", nftIndex: 7 },
];

export const NFTSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="nft"
      className="relative py-32 bg-gradient-to-b from-cockatoo-blue/20 via-cockatoo-cream to-cockatoo-pink/20 overflow-hidden"
    >
      {/* Floating NFT decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {nftImages.slice(0, 4).map((nft, i) => (
          <motion.img
            key={i}
            src={nft}
            alt={`Floating NFT ${i + 1}`}
            className="absolute w-16 h-16 rounded-xl shadow-lg border-2 border-cockatoo-purple/30 object-cover opacity-40"
            style={{
              left: `${10 + i * 25}%`,
              top: i % 2 === 0 ? "10%" : "80%",
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + i,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-cockatoo-purple/30 rounded-full font-display font-bold text-foreground mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            🎨 Cockatoo NFTs
          </motion.span>

          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Your Identity.{" "}
            <span className="bg-gradient-to-r from-cockatoo-blue to-cockatoo-purple bg-clip-text text-transparent">
              Your Access.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Cockatoo NFTs are more than art. They're your key to the ecosystem.
          </p>
        </motion.div>

        {/* NFT Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {nftImages.map((nft, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
            >
              <img
                src={nft}
                alt={`Cockatoo NFT #${index + 1}`}
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border-4 border-cockatoo-white group-hover:border-cockatoo-purple transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cockatoo-dark/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <span className="font-display font-bold text-cockatoo-white text-lg">
                  #{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NFT Banner Image */}
        <motion.div
          className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl border-8 border-cockatoo-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={nftBanner}
            alt="Cockatoo NFT Collection"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cockatoo-dark/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-display text-3xl font-bold text-cockatoo-white mb-2">
              10,000 Unique Cockatoos
            </h3>
            <p className="text-cockatoo-white/80 font-body">
              Each with unique traits, accessories, and personalities
            </p>
          </div>
        </motion.div>

        {/* Floating NFT cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {nftFeatures.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 5,
                z: 50,
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="perspective-1000"
            >
              <div
                className={`bg-cockatoo-white rounded-2xl p-6 shadow-lg border-4 transition-all duration-300 ${
                  hoveredCard === index
                    ? "border-cockatoo-purple shadow-xl"
                    : "border-cockatoo-blue/30"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={nftImages[feature.nftIndex]}
                  alt={feature.label}
                  className="w-12 h-12 rounded-xl object-cover mb-4 border-2 border-cockatoo-blue"
                />
                <h4 className="font-display text-lg font-bold text-foreground mb-1">
                  {feature.label}
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* OpenSea Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://opensea.io/collection/cockatoocoin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cockatoo-blue to-cockatoo-purple rounded-full font-display font-bold text-cockatoo-white shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🖼️ View Full Collection on OpenSea
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
