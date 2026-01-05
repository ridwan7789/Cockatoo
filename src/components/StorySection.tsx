import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Image, Trophy, Heart, Users } from "lucide-react";
import { nftImages } from "./FloatingNFT";

const concepts = [
  {
    icon: CreditCard,
    title: "Payment",
    description: "Seamless transactions powered by $KATOO",
    color: "from-cockatoo-yellow to-cockatoo-orange",
    emoji: "💳",
    nftIndex: 0,
  },
  {
    icon: Image,
    title: "NFT Identity",
    description: "Your reputation, access, and role in one token",
    color: "from-cockatoo-blue to-cockatoo-purple",
    emoji: "🎨",
    nftIndex: 1,
  },
  {
    icon: Users,
    title: "Sponsorship",
    description: "Community-first brand partnerships",
    color: "from-cockatoo-green to-cockatoo-blue",
    emoji: "🤝",
    nftIndex: 2,
  },
  {
    icon: Trophy,
    title: "Sport",
    description: "Supporting grassroots athletes worldwide",
    color: "from-cockatoo-orange to-cockatoo-pink",
    emoji: "⚽",
    nftIndex: 3,
  },
  {
    icon: Heart,
    title: "Charity",
    description: "Noise for the unheard, impact on-chain",
    color: "from-cockatoo-pink to-cockatoo-purple",
    emoji: "❤️",
    nftIndex: 4,
  },
];

const ConceptCard = ({
  concept,
  index,
}: {
  concept: typeof concepts[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group cursor-pointer"
    >
      <div className="bg-cockatoo-white rounded-3xl p-8 shadow-lg border-4 border-transparent hover:border-cockatoo-yellow/50 transition-all duration-300 h-full">
        <div className="flex items-center gap-4 mb-6">
          <motion.img
            src={nftImages[concept.nftIndex]}
            alt={concept.title}
            className="w-20 h-20 rounded-2xl object-cover shadow-lg border-4 border-cockatoo-white group-hover:scale-110 transition-transform"
            whileHover={{ rotate: [0, -5, 5, 0] }}
          />
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${concept.color} flex items-center justify-center shadow-md`}
          >
            <span className="text-2xl">{concept.emoji}</span>
          </div>
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          {concept.title}
        </h3>
        <p className="text-muted-foreground font-body">{concept.description}</p>
      </div>
    </motion.div>
  );
};

export const StorySection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="story"
      className="relative py-32 bg-gradient-to-b from-cockatoo-blue/30 via-cockatoo-cream to-cockatoo-yellow/20"
    >
      {/* Floating NFT decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {nftImages.slice(5, 8).map((nft, i) => (
          <motion.img
            key={i}
            src={nft}
            alt={`Floating NFT ${i + 1}`}
            className="absolute w-20 h-20 rounded-2xl shadow-lg border-2 border-cockatoo-yellow/30 object-cover opacity-30"
            style={{
              right: `${5 + i * 10}%`,
              top: `${20 + i * 25}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 5 + i,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-cockatoo-yellow/30 rounded-full font-display font-bold text-foreground mb-6"
            initial={{ scale: 0 }}
            animate={isHeaderInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            What is Cockatoo?
          </motion.span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            One Ecosystem.
            <br />
            <span className="bg-gradient-to-r from-cockatoo-yellow to-cockatoo-pink bg-clip-text text-transparent">
              Infinite Possibilities.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Cockatoo turns attention into action through payment, identity, and
            community impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.slice(0, 3).map((concept, index) => (
            <ConceptCard key={concept.title} concept={concept} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {concepts.slice(3).map((concept, index) => (
            <ConceptCard
              key={concept.title}
              concept={concept}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
