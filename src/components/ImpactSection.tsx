import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Trophy, Heart } from "lucide-react";
import { nftImages } from "./FloatingNFT";

const impactAreas = [
  {
    id: "brand",
    icon: Palette,
    title: "Brand",
    subtitle: "Community-First Exposure",
    description:
      "Sponsored Cockatoos bring brands into the community naturally. Sticker-style visuals, authentic partnerships.",
    color: "from-cockatoo-purple to-cockatoo-pink",
    bgColor: "bg-cockatoo-purple/10",
    emoji: "🎨",
    nftIndex: 0,
  },
  {
    id: "sport",
    icon: Trophy,
    title: "Sport",
    subtitle: "Grassroots Champions",
    description:
      "Supporting athletes at every level. From local leagues to rising stars, we back the underdogs.",
    color: "from-cockatoo-green to-cockatoo-blue",
    bgColor: "bg-cockatoo-green/10",
    emoji: "⚽",
    nftIndex: 1,
  },
  {
    id: "charity",
    icon: Heart,
    title: "Charity",
    subtitle: "Noise for the Unheard",
    description:
      "On-chain transparency for every donation. Warm hearts, verifiable impact. Making noise for those who can't.",
    color: "from-cockatoo-pink to-cockatoo-orange",
    bgColor: "bg-cockatoo-pink/10",
    emoji: "❤️",
    nftIndex: 2,
  },
];

export const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
      className="relative py-32 bg-gradient-to-b from-cockatoo-pink/20 via-cockatoo-cream to-cockatoo-green/20 overflow-hidden"
    >
      {/* Floating NFT decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {nftImages.slice(3, 7).map((nft, i) => (
          <motion.img
            key={i}
            src={nft}
            alt={`Floating NFT ${i + 1}`}
            className="absolute w-14 h-14 rounded-xl shadow-lg border-2 border-cockatoo-pink/30 object-cover opacity-30"
            style={{
              left: i % 2 === 0 ? `${5 + i * 5}%` : "auto",
              right: i % 2 !== 0 ? `${5 + i * 5}%` : "auto",
              top: `${15 + i * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-3, 3, -3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4 + i,
              delay: i * 0.4,
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-cockatoo-pink/30 rounded-full font-display font-bold text-foreground mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            🌍 Impact Zone
          </motion.span>

          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Noise Creates{" "}
            <span className="bg-gradient-to-r from-cockatoo-pink via-cockatoo-purple to-cockatoo-green bg-clip-text text-transparent">
              Change
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Brand partnerships, sports sponsorship, and charitable giving - all
            powered by Cockatoo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div
                className={`${area.bgColor} rounded-3xl p-8 h-full border-4 border-transparent hover:border-cockatoo-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.img
                    src={nftImages[area.nftIndex]}
                    alt={area.title}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg border-4 border-cockatoo-white"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 font-body leading-relaxed mb-6">
                  {area.description}
                </p>

                <div className="flex gap-2">
                  {nftImages.slice(area.nftIndex + 3, area.nftIndex + 6).map((nft, i) => (
                    <motion.img
                      key={i}
                      src={nft}
                      alt={`Mini NFT ${i + 1}`}
                      className="w-10 h-10 rounded-lg object-cover shadow-md border-2 border-cockatoo-white"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.15 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
