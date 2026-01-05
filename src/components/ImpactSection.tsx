import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Trophy, Heart } from "lucide-react";

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cockatoo-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cockatoo-green/20 rounded-full blur-3xl" />
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
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <span className="text-3xl">{area.emoji}</span>
                  </motion.div>
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
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${area.color} opacity-60`}
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
