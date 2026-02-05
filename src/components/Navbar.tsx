import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import cockatooLogo from "@/assets/cockatoo-logo.jpeg";

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Story", id: "story" },
    { label: "Token", id: "token" },
    { label: "NFTs", id: "nft" },
    { label: "Impact", id: "impact" },
    { label: "Roadmap", id: "roadmap" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-2 sm:py-3"
    >
      <div className="max-w-7xl mx-auto bg-cockatoo-white/80 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border-2 border-cockatoo-yellow/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo("hero")}
          >
            <img
              src={cockatooLogo}
              alt="Cockatoo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-cockatoo-yellow"
            />
            <span className="font-display font-bold text-lg sm:text-xl text-foreground">
              COCKATOO
            </span>
            <span className="hidden sm:inline text-xs bg-cockatoo-yellow/30 px-2 py-1 rounded-full font-bold text-cockatoo-dark">
              $KATOO
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {isHomePage && navItems.map((item) => (
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
            <motion.a
              href="https://nad.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full font-display font-semibold text-cockatoo-dark bg-cockatoo-yellow/80 hover:bg-cockatoo-yellow transition-all flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Buy $KATOO
            </motion.a>
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button 
              variant="hero" 
              size="sm" 
              onClick={() => scrollTo("cta")}
              className="hidden sm:flex text-xs sm:text-sm px-3 sm:px-4"
            >
              Join Community
            </Button>
            
            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-full bg-cockatoo-yellow/20 hover:bg-cockatoo-yellow/40 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 mx-auto max-w-7xl"
          >
            <div className="bg-cockatoo-white/95 backdrop-blur-xl rounded-2xl px-4 py-4 shadow-lg border-2 border-cockatoo-yellow/20">
              <div className="flex flex-col gap-2">
                {isHomePage && navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="px-4 py-3 rounded-xl font-display font-semibold text-foreground/80 hover:text-foreground hover:bg-cockatoo-yellow/20 transition-all text-left"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <hr className="border-cockatoo-yellow/20 my-2" />
                
                <motion.a
                  href="https://nad.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl font-display font-semibold text-cockatoo-dark bg-cockatoo-yellow/80 hover:bg-cockatoo-yellow transition-all flex items-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 Buy $KATOO
                </motion.a>
                
                <Button 
                  variant="hero" 
                  size="default" 
                  onClick={() => scrollTo("cta")}
                  className="w-full mt-1"
                >
                  Join Community
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
