import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Globe, Star } from "lucide-react";
import { FloatingNFT, nftImages } from "./FloatingNFT";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    icon: Rocket,
    items: [
      "Token Launch",
      "NFT Collection Drop",
      "Community Building",
      "Initial Partnerships",
    ],
    color: "from-cockatoo-yellow to-cockatoo-orange",
    status: "active",
    nftIndex: 0,
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    icon: Globe,
    items: [
      "Cockatoo Pay Launch",
      "Marketplace Integration",
      "Brand Partnerships",
      "Sports Sponsorships",
    ],
    color: "from-cockatoo-blue to-cockatoo-purple",
    status: "upcoming",
    nftIndex: 1,
  },
  {
    phase: "Phase 3",
    title: "Impact",
    icon: Star,
    items: [
      "Charity DAO",
      "Global Expansion",
      "Governance Launch",
      "Ecosystem Maturity",
    ],
    color: "from-cockatoo-pink to-cockatoo-orange",
    status: "future",
    nftIndex: 2,
  },
];

export const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="roadmap"
      className="relative py-32 bg-gradient-to-b from-cockatoo-green/20 via-cockatoo-cream to-cockatoo-yellow/30 overflow-hidden"
    >
      {/* Floating NFT decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {nftImages.slice(7, 10).map((nft, i) => (
          <motion.img
            key={i}
            src={nft}
            alt={`Floating NFT ${i + 1}`}
            className="absolute w-16 h-16 rounded-xl shadow-lg border-2 border-cockatoo-yellow/30 object-cover opacity-30"
            style={{
              left: `${10 + i * 35}%`,
              top: i % 2 === 0 ? "5%" : "85%",
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 5 + i,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-cockatoo-yellow/30 rounded-full font-display font-bold text-foreground mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            🗺️ Roadmap
          </motion.span>

          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            The Journey{" "}
            <span className="bg-gradient-to-r from-cockatoo-yellow to-cockatoo-pink bg-clip-text text-transparent">
              Ahead
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Follow the Cockatoo as it travels through milestones toward global
            impact.
          </p>
        </motion.div>

        {/* Journey path */}
        <div className="relative">
          {/* Path line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-cockatoo-yellow via-cockatoo-blue to-cockatoo-pink rounded-full -translate-y-1/2" />

          {/* Traveling NFT */}
          <motion.div
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 z-20"
            initial={{ left: "0%" }}
            animate={isInView ? { left: ["0%", "40%", "80%", "40%", "0%"] } : {}}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FloatingNFT size="sm" imageIndex={9} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative"
              >
                {/* Phase indicator */}
                <motion.div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${phase.color} shadow-lg border-4 border-cockatoo-white hidden lg:flex items-center justify-center z-10`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                >
                  {phase.status === "active" && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cockatoo-yellow"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                <div className="bg-cockatoo-white rounded-3xl p-8 shadow-lg border-4 border-cockatoo-yellow/20 hover:border-cockatoo-yellow/50 transition-all h-full mt-4 lg:mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={nftImages[phase.nftIndex]}
                      alt={phase.title}
                      className="w-14 h-14 rounded-xl object-cover border-2 border-cockatoo-yellow shadow-md"
                    />
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-md`}
                    >
                      <phase.icon className="w-5 h-5 text-cockatoo-white" />
                    </div>
                  </div>

                  <span className="text-sm font-bold text-muted-foreground font-display">
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {phase.title}
                  </h3>

                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-3 text-foreground/80 font-body"
                      >
                        <img
                          src={nftImages[(phase.nftIndex + i + 3) % 10]}
                          alt={`Item ${i + 1}`}
                          className="w-6 h-6 rounded-lg object-cover border border-cockatoo-yellow/50"
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {phase.status === "active" && (
                    <motion.div
                      className="mt-6 px-4 py-2 bg-cockatoo-yellow/30 rounded-full inline-flex items-center gap-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 rounded-full bg-cockatoo-green animate-pulse" />
                      <span className="text-sm font-bold text-foreground font-display">
                        In Progress
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
