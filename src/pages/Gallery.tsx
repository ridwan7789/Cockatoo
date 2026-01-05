import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NFTCard } from "@/components/NFTCard";
import { NFTSearchBar, NFTFiltersSidebar, MobileFilters } from "@/components/NFTFilters";
import { nfts, Rarity, TraitCategory, allRarities } from "@/data/nftData";
import { ArrowLeft, LayoutGrid, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import cockatooLogo from "@/assets/cockatoo-logo.jpeg";

const Gallery = () => {
  const [selectedRarities, setSelectedRarities] = useState<Rarity[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<Record<TraitCategory, string[]>>({
    Headwear: [],
    Eyewear: [],
    Clothing: [],
    Accessory: [],
    Background: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("id-asc");
  const [gridSize, setGridSize] = useState<"normal" | "compact">("normal");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleRarityChange = (rarity: Rarity) => {
    setSelectedRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((r) => r !== rarity)
        : [...prev, rarity]
    );
  };

  const handleTraitChange = (category: TraitCategory, trait: string) => {
    setSelectedTraits((prev) => ({
      ...prev,
      [category]: prev[category].includes(trait)
        ? prev[category].filter((t) => t !== trait)
        : [...prev[category], trait],
    }));
  };

  const handleClearAll = () => {
    setSelectedRarities([]);
    setSelectedTraits({
      Headwear: [],
      Eyewear: [],
      Clothing: [],
      Accessory: [],
      Background: [],
    });
    setSearchQuery("");
  };

  const totalActiveFilters =
    selectedRarities.length +
    Object.values(selectedTraits).flat().length;

  const filteredAndSortedNfts = useMemo(() => {
    let result = [...nfts];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (nft) =>
          nft.name.toLowerCase().includes(query) ||
          nft.id.toString().includes(query) ||
          nft.traits.some((t) => t.value.toLowerCase().includes(query))
      );
    }

    // Filter by rarity
    if (selectedRarities.length > 0) {
      result = result.filter((nft) => selectedRarities.includes(nft.rarity));
    }

    // Filter by traits
    const activeTraitFilters = Object.entries(selectedTraits).filter(
      ([_, traits]) => traits.length > 0
    );

    if (activeTraitFilters.length > 0) {
      result = result.filter((nft) =>
        activeTraitFilters.every(([category, traits]) =>
          nft.traits.some(
            (t) => t.category === category && traits.includes(t.value)
          )
        )
      );
    }

    // Sort
    const [sortField, sortDirection] = sortBy.split("-");
    result.sort((a, b) => {
      let comparison = 0;

      if (sortField === "id") {
        comparison = a.id - b.id;
      } else if (sortField === "price") {
        comparison = a.price - b.price;
      } else if (sortField === "rarity") {
        comparison =
          allRarities.indexOf(a.rarity) - allRarities.indexOf(b.rarity);
      }

      return sortDirection === "desc" ? -comparison : comparison;
    });

    return result;
  }, [nfts, selectedRarities, selectedTraits, searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-cockatoo-cream via-cockatoo-blue/20 to-cockatoo-cream pb-24">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-40 bg-cockatoo-white/90 backdrop-blur-xl border-b-2 border-cockatoo-yellow/20"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <img
                  src={cockatooLogo}
                  alt="Cockatoo"
                  className="w-10 h-10 rounded-full border-2 border-cockatoo-yellow"
                />
                <div>
                  <h1 className="font-display font-bold text-xl text-foreground">
                    NFT Gallery
                  </h1>
                  <p className="text-sm text-muted-foreground font-body">
                    {filteredAndSortedNfts.length} of {nfts.length} Cockatoos
                  </p>
                </div>
              </div>
            </div>

            {/* Grid toggle */}
            <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-full p-1">
              <button
                onClick={() => setGridSize("normal")}
                className={`p-2 rounded-full transition-all ${
                  gridSize === "normal"
                    ? "bg-cockatoo-yellow text-cockatoo-dark"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setGridSize("compact")}
                className={`p-2 rounded-full transition-all ${
                  gridSize === "compact"
                    ? "bg-cockatoo-yellow text-cockatoo-dark"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Sort */}
        <NFTSearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalActiveFilters={totalActiveFilters}
          onMobileFilterClick={() => setShowMobileFilters(true)}
        />

        <div className="flex gap-8">
          {/* Sidebar (desktop only) */}
          <div className="hidden md:block w-72 shrink-0">
            <NFTFiltersSidebar
              selectedRarities={selectedRarities}
              selectedTraits={selectedTraits}
              onRarityChange={handleRarityChange}
              onTraitChange={handleTraitChange}
              onClearAll={handleClearAll}
              totalActiveFilters={totalActiveFilters}
            />
          </div>

          {/* Grid */}
          <div className="flex-1">
            {filteredAndSortedNfts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🐦</div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  No Cockatoos Found
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button variant="default" onClick={handleClearAll}>
                  Clear All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                className={`grid gap-6 ${
                  gridSize === "compact"
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
                layout
              >
                {filteredAndSortedNfts.map((nft, index) => (
                  <NFTCard key={nft.id} nft={nft} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <MobileFilters
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        selectedRarities={selectedRarities}
        selectedTraits={selectedTraits}
        onRarityChange={handleRarityChange}
        onTraitChange={handleTraitChange}
        onClearAll={handleClearAll}
        totalActiveFilters={totalActiveFilters}
      />

      {/* Stats Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-cockatoo-white/90 backdrop-blur-xl border-t-2 border-cockatoo-yellow/20 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-xs text-muted-foreground font-body">
                Total Volume
              </p>
              <p className="font-display font-bold text-foreground">
                12,450 SOL
              </p>
            </div>
            <div className="text-center hidden sm:block">
              <p className="text-xs text-muted-foreground font-body">
                Floor Price
              </p>
              <p className="font-display font-bold text-foreground">0.5 SOL</p>
            </div>
            <div className="text-center hidden sm:block">
              <p className="text-xs text-muted-foreground font-body">Owners</p>
              <p className="font-display font-bold text-foreground">3,245</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground font-body hidden sm:block">
              Showing {filteredAndSortedNfts.length} items
            </span>
            <Button variant="hero" size="sm">
              Connect Wallet
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Gallery;
