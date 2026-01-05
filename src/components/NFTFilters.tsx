import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { allTraits, allRarities, Rarity, TraitCategory } from "@/data/nftData";
import { Filter, X, ChevronDown, ChevronUp, Search, SlidersHorizontal } from "lucide-react";

interface NFTSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalActiveFilters: number;
  onMobileFilterClick: () => void;
}

export const NFTSearchBar = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalActiveFilters,
  onMobileFilterClick,
}: NFTSearchBarProps) => {
  return (
    <div className="bg-cockatoo-white rounded-2xl p-4 shadow-lg border-2 border-cockatoo-yellow/20 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Cockatoos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-secondary border-2 border-transparent focus:border-cockatoo-yellow focus:outline-none font-body text-foreground placeholder:text-muted-foreground transition-all"
          />
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 rounded-full bg-secondary font-body text-foreground border-2 border-transparent focus:border-cockatoo-yellow focus:outline-none cursor-pointer"
        >
          <option value="id-asc">ID: Low to High</option>
          <option value="id-desc">ID: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rarity-asc">Rarity: Common First</option>
          <option value="rarity-desc">Rarity: Legendary First</option>
        </select>

        {/* Mobile filter toggle */}
        <Button
          variant="default"
          className="md:hidden"
          onClick={onMobileFilterClick}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {totalActiveFilters > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-cockatoo-white text-cockatoo-dark rounded-full text-xs">
              {totalActiveFilters}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

interface NFTFiltersSidebarProps {
  selectedRarities: Rarity[];
  selectedTraits: Record<TraitCategory, string[]>;
  onRarityChange: (rarity: Rarity) => void;
  onTraitChange: (category: TraitCategory, trait: string) => void;
  onClearAll: () => void;
  totalActiveFilters: number;
}

export const NFTFiltersSidebar = ({
  selectedRarities,
  selectedTraits,
  onRarityChange,
  onTraitChange,
  onClearAll,
  totalActiveFilters,
}: NFTFiltersSidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<TraitCategory[]>(["Headwear"]);

  const toggleCategory = (category: TraitCategory) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="bg-cockatoo-white rounded-3xl p-6 shadow-lg border-2 border-cockatoo-yellow/20 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </h2>
        {totalActiveFilters > 0 && (
          <motion.button
            onClick={onClearAll}
            className="text-sm text-cockatoo-pink font-semibold hover:underline flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            <X className="w-4 h-4" />
            Clear ({totalActiveFilters})
          </motion.button>
        )}
      </div>

      {/* Rarity Section */}
      <div className="mb-6">
        <h3 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
          ✨ Rarity
        </h3>
        <div className="flex flex-wrap gap-2">
          {allRarities.map((rarity) => {
            const isSelected = selectedRarities.includes(rarity);
            return (
              <motion.button
                key={rarity}
                onClick={() => onRarityChange(rarity)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-display font-semibold text-sm transition-all ${
                  isSelected
                    ? rarity === "Legendary"
                      ? "bg-gradient-to-r from-cockatoo-yellow to-cockatoo-orange text-cockatoo-dark shadow-lg"
                      : rarity === "Epic"
                      ? "bg-cockatoo-purple text-cockatoo-white"
                      : rarity === "Rare"
                      ? "bg-cockatoo-blue text-cockatoo-dark"
                      : rarity === "Uncommon"
                      ? "bg-cockatoo-green text-cockatoo-dark"
                      : "bg-muted-foreground text-cockatoo-white"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {rarity}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Traits Sections */}
      {(Object.keys(allTraits) as TraitCategory[]).map((category) => (
        <div key={category} className="mb-4">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full flex items-center justify-between font-display font-bold text-foreground mb-2 hover:text-primary transition-colors"
          >
            <span className="flex items-center gap-2">
              {category === "Headwear" && "🎩"}
              {category === "Eyewear" && "👓"}
              {category === "Clothing" && "👕"}
              {category === "Accessory" && "💎"}
              {category === "Background" && "🎨"}
              {category}
            </span>
            {expandedCategories.includes(category) ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expandedCategories.includes(category) ? "auto" : 0,
              opacity: expandedCategories.includes(category) ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 pb-2">
              {allTraits[category].map((trait) => {
                const isSelected = selectedTraits[category]?.includes(trait);
                return (
                  <motion.button
                    key={trait}
                    onClick={() => onTraitChange(category, trait)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 rounded-full text-sm font-body transition-all ${
                      isSelected
                        ? "bg-cockatoo-yellow text-cockatoo-dark font-semibold shadow-md"
                        : "bg-secondary text-secondary-foreground hover:bg-cockatoo-yellow/20"
                    }`}
                  >
                    {trait}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRarities: Rarity[];
  selectedTraits: Record<TraitCategory, string[]>;
  onRarityChange: (rarity: Rarity) => void;
  onTraitChange: (category: TraitCategory, trait: string) => void;
  onClearAll: () => void;
  totalActiveFilters: number;
}

export const MobileFilters = ({
  isOpen,
  onClose,
  selectedRarities,
  selectedTraits,
  onRarityChange,
  onTraitChange,
  onClearAll,
  totalActiveFilters,
}: MobileFiltersProps) => {
  const [expandedCategories, setExpandedCategories] = useState<TraitCategory[]>(["Headwear"]);

  const toggleCategory = (category: TraitCategory) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-cockatoo-dark/50 z-50 md:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-cockatoo-white p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-foreground">
            Filters
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {totalActiveFilters > 0 && (
          <button
            onClick={onClearAll}
            className="mb-4 text-sm text-cockatoo-pink font-semibold hover:underline flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear all ({totalActiveFilters})
          </button>
        )}

        {/* Rarity Section */}
        <div className="mb-6">
          <h3 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
            ✨ Rarity
          </h3>
          <div className="flex flex-wrap gap-2">
            {allRarities.map((rarity) => {
              const isSelected = selectedRarities.includes(rarity);
              return (
                <motion.button
                  key={rarity}
                  onClick={() => onRarityChange(rarity)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-display font-semibold text-sm transition-all ${
                    isSelected
                      ? rarity === "Legendary"
                        ? "bg-gradient-to-r from-cockatoo-yellow to-cockatoo-orange text-cockatoo-dark shadow-lg"
                        : rarity === "Epic"
                        ? "bg-cockatoo-purple text-cockatoo-white"
                        : rarity === "Rare"
                        ? "bg-cockatoo-blue text-cockatoo-dark"
                        : rarity === "Uncommon"
                        ? "bg-cockatoo-green text-cockatoo-dark"
                        : "bg-muted-foreground text-cockatoo-white"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {rarity}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Traits Sections */}
        {(Object.keys(allTraits) as TraitCategory[]).map((category) => (
          <div key={category} className="mb-4">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between font-display font-bold text-foreground mb-2"
            >
              <span className="flex items-center gap-2">
                {category === "Headwear" && "🎩"}
                {category === "Eyewear" && "👓"}
                {category === "Clothing" && "👕"}
                {category === "Accessory" && "💎"}
                {category === "Background" && "🎨"}
                {category}
              </span>
              {expandedCategories.includes(category) ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {expandedCategories.includes(category) && (
              <div className="flex flex-wrap gap-2 pb-2">
                {allTraits[category].map((trait) => {
                  const isSelected = selectedTraits[category]?.includes(trait);
                  return (
                    <button
                      key={trait}
                      onClick={() => onTraitChange(category, trait)}
                      className={`px-3 py-1.5 rounded-full text-sm font-body transition-all ${
                        isSelected
                          ? "bg-cockatoo-yellow text-cockatoo-dark font-semibold shadow-md"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {trait}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        <div className="sticky bottom-0 pt-4 mt-6 border-t border-border">
          <Button variant="hero" className="w-full" onClick={onClose}>
            Apply Filters
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
