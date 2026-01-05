import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import cockatooLogo from "@/assets/cockatoo-logo.jpeg";

export const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto bg-cockatoo-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border-2 border-cockatoo-yellow/20">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo("hero")}
          >
            <img
              src={cockatooLogo}
              alt="Cockatoo"
              className="w-10 h-10 rounded-full border-2 border-cockatoo-yellow"
            />
            <span className="font-display font-bold text-xl text-foreground">
              COCKATOO
            </span>
            <span className="text-xs bg-cockatoo-yellow/30 px-2 py-1 rounded-full font-bold text-cockatoo-dark">
              $KATOO
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-2">
            {[
              { label: "Story", id: "story" },
              { label: "Token", id: "token" },
              { label: "NFTs", id: "nft" },
              { label: "Impact", id: "impact" },
              { label: "Roadmap", id: "roadmap" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded-full font-display font-semibold text-foreground/80 hover:text-foreground hover:bg-cockatoo-yellow/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" onClick={() => scrollTo("cta")}>
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
