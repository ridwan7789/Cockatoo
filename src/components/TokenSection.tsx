import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nftImages } from "./FloatingNFT";
import cockatooVideo from "@/assets/cockatoo-video.mp4";

const features = [
  {
    title: "Payments",
    description: "Instant, borderless transactions",
    nftIndex: 0,
    emoji: "💸",
  },
  {
    title: "Marketplace",
    description: "Settlement layer for all trades",
    nftIndex: 1,
    emoji: "🛒",
  },
  {
    title: "Incentives",
    description: "Community rewards & governance",
    nftIndex: 2,
    emoji: "🎁",
  },
  {
    title: "Charity",
    description: "Direct on-chain donations",
    nftIndex: 3,
    emoji: "❤️",
  },
];

export const TokenSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="token"
      className="relative py-32 bg-gradient-to-b from-cockatoo-yellow/20 via-cockatoo-cream to-cockatoo-blue/20 overflow-hidden"
    >
      {/* Animated NFT river - more NFTs flowing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {nftImages.map((nft, i) => (
          <motion.div
            key={`river-${i}`}
            className="absolute"
            style={{
              top: `${10 + i * 8}%`,
              left: "-120px",
            }}
            animate={{
              x: ["0vw", "120vw"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 1.5,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src={nft}
              alt={`NFT ${i + 1}`}
              className="w-14 h-14 rounded-xl shadow-lg border-3 border-cockatoo-yellow/60 object-cover"
            />
          </motion.div>
        ))}
        
        {/* Second wave of NFTs */}
        {nftImages.slice(0, 6).map((nft, i) => (
          <motion.div
            key={`river2-${i}`}
            className="absolute"
            style={{
              top: `${5 + i * 15}%`,
              right: "-120px",
            }}
            animate={{
              x: ["0vw", "-120vw"],
              rotate: [360, 0],
            }}
            transition={{
              duration: 14 + i * 1.2,
              delay: i * 1.2 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src={nft}
              alt={`NFT reverse ${i + 1}`}
              className="w-12 h-12 rounded-xl shadow-lg border-2 border-cockatoo-pink/50 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Corner floating NFTs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: 5, y: 10, size: "w-16 h-16", delay: 0 },
          { x: 90, y: 15, size: "w-14 h-14", delay: 0.5 },
          { x: 8, y: 80, size: "w-12 h-12", delay: 1 },
          { x: 88, y: 75, size: "w-16 h-16", delay: 1.5 },
        ].map((pos, i) => (
          <motion.img
            key={`corner-${i}`}
            src={nftImages[(i + 2) % nftImages.length]}
            alt={`Corner NFT ${i + 1}`}
            className={`absolute ${pos.size} object-cover rounded-2xl shadow-xl border-4 border-cockatoo-white hidden md:block`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              delay: pos.delay,
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
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cockatoo-yellow to-cockatoo-orange rounded-full font-display font-bold text-cockatoo-dark mb-8 shadow-lg"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="text-2xl">🪙</span>
            $KATOO Token
          </motion.div>

          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            The Fuel of the{" "}
            <span className="bg-gradient-to-r from-cockatoo-yellow to-cockatoo-orange bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            $KATOO powers every transaction, reward, and donation in the
            Cockatoo universe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-cockatoo-white rounded-3xl p-6 shadow-lg border-4 border-cockatoo-yellow/30 hover:border-cockatoo-yellow transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={nftImages[feature.nftIndex]}
                  alt={feature.title}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-cockatoo-yellow"
                />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cockatoo-yellow to-cockatoo-orange flex items-center justify-center shadow-md text-2xl">
                  {feature.emoji}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video visual */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-cockatoo-white">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={cockatooVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-cockatoo-dark/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="font-display text-2xl font-bold text-cockatoo-white drop-shadow-lg">
                $KATOO to the Moon! 🚀
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
