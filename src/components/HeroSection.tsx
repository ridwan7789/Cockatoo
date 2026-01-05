import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingCockatoo } from "./FloatingCockatoo";
import { FloatingCoins } from "./FloatingCoins";
import { Sparkles, Volume2 } from "lucide-react";

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cockatoo-yellow/40 via-cockatoo-cream to-cockatoo-blue/30"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cockatoo-yellow/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cockatoo-pink/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cockatoo-blue/20 rounded-full blur-3xl" />
      </div>

      <FloatingCoins />

      {/* Floating Cockatoos around */}
      <FloatingCockatoo
        className="absolute top-32 left-10 hidden lg:block"
        size="sm"
        delay={0}
      />
      <FloatingCockatoo
        className="absolute top-40 right-16 hidden lg:block"
        size="md"
        delay={0.5}
      />
      <FloatingCockatoo
        className="absolute bottom-32 left-20 hidden lg:block"
        size="sm"
        delay={1}
      />
      <FloatingCockatoo
        className="absolute bottom-40 right-32 hidden lg:block"
        size="sm"
        delay={1.5}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main mascot */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <FloatingCockatoo size="xl" className="mx-auto" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-foreground">MAKE SOME</span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-cockatoo-yellow via-cockatoo-orange to-cockatoo-pink bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            NOISE.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-xl md:text-2xl text-foreground/80 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Payment. Sponsorship. Sport. Charity.
        </motion.p>

        <motion.p
          className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          "Silence never changed the world. Noise did."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            variant="hero"
            size="xl"
            className="group"
            onClick={() => scrollTo("story")}
          >
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            Enter the Ecosystem
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            onClick={() => scrollTo("nft")}
          >
            <Volume2 className="w-5 h-5" />
            View NFTs
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
        >
          <div className="w-8 h-12 rounded-full border-4 border-foreground/30 flex items-start justify-center pt-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-foreground/50"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
