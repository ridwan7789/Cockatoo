import { motion } from "framer-motion";
import cockatooLogo from "@/assets/cockatoo-logo.jpeg";
import { nftImages } from "./FloatingNFT";

// Social media icons as SVG components
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitbookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"/>
  </svg>
);

const socialLinks = [
  { icon: TelegramIcon, label: "Telegram", href: "https://t.me", color: "hover:bg-[#0088cc] hover:text-white" },
  { icon: XTwitterIcon, label: "X/Twitter", href: "https://x.com/cockatoo_monad", color: "hover:bg-black hover:text-white" },
  { icon: GitbookIcon, label: "Gitbook", href: "https://docs.cockatoo.world", color: "hover:bg-[#3884ff] hover:text-white" },
];

const navLinks = [
  { label: "Token", id: "token" },
  { label: "NFTs", id: "nft" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Community", id: "cta" },
  { label: "Docs", href: "https://docs.cockatoo.world" },
];

export const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-gradient-to-b from-cockatoo-pink/30 to-cockatoo-cream overflow-hidden">
      {/* Floating NFT decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { x: 5, y: 20, size: "w-10 h-10" },
          { x: 92, y: 30, size: "w-12 h-12" },
          { x: 8, y: 70, size: "w-8 h-8" },
          { x: 88, y: 65, size: "w-10 h-10" },
        ].map((pos, i) => (
          <motion.img
            key={i}
            src={nftImages[(i + 4) % nftImages.length]}
            alt={`Footer NFT ${i + 1}`}
            className={`absolute ${pos.size} object-cover rounded-xl shadow-lg border-2 border-cockatoo-yellow/40 opacity-60 hidden lg:block`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [-5, 5, -5],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
                $KATOO • Make Some Noise 🔊
              </span>
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href || "#"}
                onClick={(e) => {
                  if (link.id) {
                    e.preventDefault();
                    scrollTo(link.id);
                  }
                }}
                target={link.href ? "_blank" : undefined}
                rel={link.href ? "noopener noreferrer" : undefined}
                className="font-display font-semibold text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className={`w-11 h-11 rounded-full bg-cockatoo-white shadow-md flex items-center justify-center transition-all ${social.color}`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-cockatoo-yellow/20 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2026 Cockatoo. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 font-body text-xs mt-2">
            "Silence never changed the world. Noise did."
          </p>
        </div>
      </div>
    </footer>
  );
};
