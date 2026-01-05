import { motion } from "framer-motion";
import cockatooLogo from "@/assets/cockatoo-logo.jpeg";

export const Footer = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-cockatoo-pink/30 to-cockatoo-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={cockatooLogo}
              alt="Cockatoo"
              className="w-12 h-12 rounded-full border-4 border-cockatoo-yellow"
            />
            <div>
              <span className="font-display font-bold text-2xl text-foreground block">
                COCKATOO
              </span>
              <span className="text-sm text-muted-foreground font-body">
                $KATOO • Make Some Noise
              </span>
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Token", "NFTs", "Roadmap", "Community", "Docs"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="font-display font-semibold text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {["🐦", "💬", "📱"].map((emoji, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-cockatoo-white shadow-md flex items-center justify-center text-xl hover:shadow-lg transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                {emoji}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-cockatoo-yellow/20 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2025 Cockatoo. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 font-body text-xs mt-2">
            "Silence never changed the world. Noise did."
          </p>
        </div>
      </div>
    </footer>
  );
};
