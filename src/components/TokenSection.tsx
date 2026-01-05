import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coins, ShoppingCart, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Payments",
    description: "Instant, borderless transactions",
  },
  {
    icon: ShoppingCart,
    title: "Marketplace",
    description: "Settlement layer for all trades",
  },
  {
    icon: Users,
    title: "Incentives",
    description: "Community rewards & governance",
  },
  {
    icon: Heart,
    title: "Charity",
    description: "Direct on-chain donations",
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
      {/* Animated token river */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 10}%`,
              left: "-100px",
            }}
            animate={{
              x: ["0vw", "120vw"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cockatoo-yellow to-cockatoo-orange shadow-lg border-4 border-cockatoo-white/50 flex items-center justify-center font-display font-bold text-cockatoo-dark text-sm">
              $K
            </div>
          </motion.div>
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
            <Coins className="w-6 h-6" />
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cockatoo-yellow to-cockatoo-orange flex items-center justify-center mb-4 shadow-md">
                <feature.icon className="w-7 h-7 text-cockatoo-dark" />
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

        {/* Token visual */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="relative w-48 h-48 md:w-64 md:h-64"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cockatoo-yellow via-cockatoo-orange to-cockatoo-yellow shadow-2xl border-8 border-cockatoo-white/50" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cockatoo-orange to-cockatoo-yellow flex items-center justify-center">
              <span className="font-display text-5xl md:text-7xl font-bold text-cockatoo-dark">
                $K
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
