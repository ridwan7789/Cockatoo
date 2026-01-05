import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Key, Star, Award } from "lucide-react";
import nftBanner from "@/assets/cockatoo-nft-banner.jpeg";

const nftFeatures = [
  { icon: Shield, label: "Identity", desc: "Your unique on-chain identity" },
  { icon: Key, label: "Access", desc: "Unlock exclusive features" },
  { icon: Star, label: "Reputation", desc: "Build your community standing" },
  { icon: Award, label: "Benefits", desc: "Earn rewards and perks" },
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
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cockatoo-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cockatoo-blue/20 rounded-full blur-3xl" />
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cockatoo-blue to-cockatoo-purple flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cockatoo-white" />
                </div>
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
      </div>
    </section>
  );
};
