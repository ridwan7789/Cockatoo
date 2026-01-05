import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, ImageIcon, Volume2 } from "lucide-react";
import { FloatingNFT, nftImages } from "./FloatingNFT";
import cockatooVideo from "@/assets/cockatoo-video.mp4";

const Confetti = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {nftImages.map((nft, i) => (
        <motion.img
          key={i}
          src={nft}
          alt={`Confetti NFT ${i + 1}`}
          className="absolute w-8 h-8 rounded-lg object-cover shadow-md"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-50px",
          }}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, 720],
            opacity: [1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setShowConfetti(true), 500);
    }
  }, [isInView]);

  return (
    <section
      id="cta"
      className="relative py-32 bg-gradient-to-b from-cockatoo-yellow/30 via-cockatoo-orange/20 to-cockatoo-pink/30 overflow-hidden"
    >
      {showConfetti && <Confetti />}

      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-10"
        >
          <source src={cockatooVideo} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cockatoo-yellow/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cockatoo-pink/40 rounded-full blur-3xl" />
      </div>

      {/* Floating NFTs celebration */}
      <FloatingNFT
        className="absolute top-20 left-10 hidden md:block"
        imageIndex={0}
        size="md"
        delay={0}
      />
      <FloatingNFT
        className="absolute top-32 right-16 hidden md:block"
        imageIndex={1}
        size="sm"
        delay={0.3}
      />
      <FloatingNFT
        className="absolute bottom-20 left-20 hidden md:block"
        imageIndex={2}
        size="sm"
        delay={0.6}
      />
      <FloatingNFT
        className="absolute bottom-32 right-10 hidden md:block"
        imageIndex={3}
        size="md"
        delay={0.9}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-center gap-4 flex-wrap">
            {nftImages.slice(0, 5).map((nft, i) => (
              <motion.img
                key={i}
                src={nft}
                alt={`NFT ${i + 1}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-lg border-4 border-cockatoo-white"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.1 * i, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.h2
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          BE LOUD.
          <br />
          <span className="bg-gradient-to-r from-cockatoo-pink to-cockatoo-purple bg-clip-text text-transparent">
            BE KIND.
          </span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-cockatoo-yellow to-cockatoo-orange bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            BE COCKATOO.
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Join the flock and make some noise. 🦜
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="hero" size="xl" className="group">
            <Users className="w-5 h-5 group-hover:animate-bounce" />
            Join Community
          </Button>
          <motion.a
            href="https://opensea.io/collection/cockatoocoin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="playful" size="xl">
              <ImageIcon className="w-5 h-5" />
              Get NFT
            </Button>
          </motion.a>
          <Button variant="blue" size="xl">
            <Volume2 className="w-5 h-5" />
            Make Noise
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {["Twitter", "Discord", "Telegram"].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              className="font-display font-bold text-foreground/60 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {platform}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom NFT showcase */}
        <motion.div
          className="mt-12 flex justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {nftImages.slice(5, 10).map((nft, i) => (
            <motion.img
              key={i}
              src={nft}
              alt={`NFT ${i + 6}`}
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover shadow-md border-2 border-cockatoo-white/50 opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2, y: -5 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
