import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Image, Trophy, Heart, Users } from "lucide-react";

const concepts = [
  {
    icon: CreditCard,
    title: "Payment",
    description: "Seamless transactions powered by $KATOO",
    color: "from-cockatoo-yellow to-cockatoo-orange",
    emoji: "💳",
  },
  {
    icon: Image,
    title: "NFT Identity",
    description: "Your reputation, access, and role in one token",
    color: "from-cockatoo-blue to-cockatoo-purple",
    emoji: "🎨",
  },
  {
    icon: Users,
    title: "Sponsorship",
    description: "Community-first brand partnerships",
    color: "from-cockatoo-green to-cockatoo-blue",
    emoji: "🤝",
  },
  {
    icon: Trophy,
    title: "Sport",
    description: "Supporting grassroots athletes worldwide",
    color: "from-cockatoo-orange to-cockatoo-pink",
    emoji: "⚽",
  },
  {
    icon: Heart,
    title: "Charity",
    description: "Noise for the unheard, impact on-chain",
    color: "from-cockatoo-pink to-cockatoo-purple",
    emoji: "❤️",
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
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${concept.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
        >
          <span className="text-4xl">{concept.emoji}</span>
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
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cockatoo-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cockatoo-yellow/30 rounded-full blur-3xl" />
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
