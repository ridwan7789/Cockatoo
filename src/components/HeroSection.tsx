import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingCockatoo } from "./FloatingCockatoo";
import { nftImages } from "./FloatingNFT";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { Sparkles, Volume2 } from "lucide-react";
import cockatooLambo from "@/assets/cockatoo-lambo.mp4";

export const HeroSection = () => {
  const { playSound } = useSoundEffects();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cockatoo-yellow/40 via-cockatoo-cream to-cockatoo-blue/30"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-20"
        >
          <source src={cockatooLambo} type="video/mp4" />
        </video>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cockatoo-yellow/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cockatoo-pink/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cockatoo-blue/20 rounded-full blur-3xl" />
      </div>

      {/* Interactive floating NFTs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side NFTs */}
        {[
          { x: 3, y: 15, size: "w-14 h-14", delay: 0 },
          { x: 8, y: 35, size: "w-20 h-20", delay: 0.3 },
          { x: 5, y: 55, size: "w-16 h-16", delay: 0.6 },
          { x: 10, y: 75, size: "w-12 h-12", delay: 0.9 },
          { x: 15, y: 25, size: "w-10 h-10", delay: 1.2 },
          { x: 12, y: 85, size: "w-18 h-18", delay: 1.5 },
        ].map((pos, i) => (
          <motion.img
            key={`left-${i}`}
            src={nftImages[i % nftImages.length]}
            alt={`NFT ${i + 1}`}
            className={`absolute ${pos.size} object-cover rounded-2xl shadow-xl border-4 border-cockatoo-white/80 hidden lg:block cursor-pointer nft-hover`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-5, 5, -5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              delay: pos.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              rotate: [0, -15, 15, 0],
              zIndex: 50,
            }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => playSound("pop")}
            onClick={() => playSound("squawk")}
          />
        ))}

        {/* Right side NFTs */}
        {[
          { x: 85, y: 12, size: "w-16 h-16", delay: 0.2 },
          { x: 90, y: 32, size: "w-14 h-14", delay: 0.5 },
          { x: 82, y: 50, size: "w-20 h-20", delay: 0.8 },
          { x: 88, y: 68, size: "w-12 h-12", delay: 1.1 },
          { x: 92, y: 82, size: "w-16 h-16", delay: 1.4 },
          { x: 78, y: 20, size: "w-10 h-10", delay: 1.7 },
        ].map((pos, i) => (
          <motion.img
            key={`right-${i}`}
            src={nftImages[(i + 5) % nftImages.length]}
            alt={`NFT ${i + 6}`}
            className={`absolute ${pos.size} object-cover rounded-2xl shadow-xl border-4 border-cockatoo-white/80 hidden lg:block cursor-pointer nft-hover`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [-12, 12, -12],
              rotate: [5, -5, 5],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4.5 + i * 0.5,
              delay: pos.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              rotate: [0, 15, -15, 0],
              zIndex: 50,
            }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => playSound("pop")}
            onClick={() => playSound("squawk")}
          />
        ))}

        {/* Scattered smaller NFTs for mobile and extra flair */}
        {[
          { x: 20, y: 10, size: "w-10 h-10" },
          { x: 75, y: 8, size: "w-12 h-12" },
          { x: 25, y: 88, size: "w-14 h-14" },
          { x: 70, y: 90, size: "w-10 h-10" },
        ].map((pos, i) => (
          <motion.img
            key={`scatter-${i}`}
            src={nftImages[(i + 3) % nftImages.length]}
            alt={`NFT scatter ${i + 1}`}
            className={`absolute ${pos.size} object-cover rounded-xl shadow-lg border-3 border-cockatoo-yellow/60 cursor-pointer nft-hover`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [-8, 8, -8],
              x: [-5, 5, -5],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 5 + i,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.4,
              rotate: [0, -10, 10, 0],
              zIndex: 50,
            }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => playSound("pop")}
            onClick={() => playSound("squawk")}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

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
