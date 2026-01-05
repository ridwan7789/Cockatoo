import nft1 from "@/assets/nfts/nft-1.jpeg";
import nft2 from "@/assets/nfts/nft-2.jpeg";
import nft3 from "@/assets/nfts/nft-3.jpeg";
import nft4 from "@/assets/nfts/nft-4.jpeg";
import nft5 from "@/assets/nfts/nft-5.jpeg";
import nft6 from "@/assets/nfts/nft-6.jpeg";
import nft7 from "@/assets/nfts/nft-7.jpeg";
import nft8 from "@/assets/nfts/nft-8.jpeg";
import nft9 from "@/assets/nfts/nft-9.jpeg";
import nft10 from "@/assets/nfts/nft-10.jpeg";

export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export type TraitCategory = "Headwear" | "Eyewear" | "Clothing" | "Accessory" | "Background";

export interface NFTTrait {
  category: TraitCategory;
  value: string;
}

export interface NFT {
  id: number;
  name: string;
  image: string;
  rarity: Rarity;
  traits: NFTTrait[];
  price: number;
}

export const rarityColors: Record<Rarity, string> = {
  Common: "bg-muted text-muted-foreground",
  Uncommon: "bg-cockatoo-green/20 text-cockatoo-green",
  Rare: "bg-cockatoo-blue/20 text-cockatoo-blue",
  Epic: "bg-cockatoo-purple/20 text-cockatoo-purple",
  Legendary: "bg-gradient-to-r from-cockatoo-yellow to-cockatoo-orange text-cockatoo-dark",
};

export const rarityBorders: Record<Rarity, string> = {
  Common: "border-muted",
  Uncommon: "border-cockatoo-green",
  Rare: "border-cockatoo-blue",
  Epic: "border-cockatoo-purple",
  Legendary: "border-cockatoo-yellow",
};

export const nfts: NFT[] = [
  {
    id: 1,
    name: "Cap Cockatoo",
    image: nft1,
    rarity: "Common",
    traits: [
      { category: "Headwear", value: "Red Cap" },
      { category: "Accessory", value: "Blue Pendant" },
      { category: "Background", value: "Yellow" },
    ],
    price: 0.5,
  },
  {
    id: 2,
    name: "Cozy Soldier",
    image: nft2,
    rarity: "Uncommon",
    traits: [
      { category: "Headwear", value: "Camo Beanie" },
      { category: "Clothing", value: "Red Sweater" },
      { category: "Background", value: "Beige" },
    ],
    price: 1.2,
  },
  {
    id: 3,
    name: "Viking Warrior",
    image: nft3,
    rarity: "Rare",
    traits: [
      { category: "Headwear", value: "Viking Helmet" },
      { category: "Clothing", value: "Yellow Tank Top" },
      { category: "Background", value: "Beige" },
    ],
    price: 2.5,
  },
  {
    id: 4,
    name: "Captain Cockatoo",
    image: nft4,
    rarity: "Epic",
    traits: [
      { category: "Headwear", value: "Pirate Hat" },
      { category: "Accessory", value: "Flower Lei" },
      { category: "Background", value: "Teal" },
    ],
    price: 5.0,
  },
  {
    id: 5,
    name: "Ninja Blossom",
    image: nft5,
    rarity: "Rare",
    traits: [
      { category: "Headwear", value: "Ninja Headband" },
      { category: "Accessory", value: "Flower Lei" },
      { category: "Background", value: "Purple" },
    ],
    price: 3.0,
  },
  {
    id: 6,
    name: "Solana Chad",
    image: nft6,
    rarity: "Legendary",
    traits: [
      { category: "Headwear", value: "Black Beanie" },
      { category: "Clothing", value: "Solana Hoodie" },
      { category: "Background", value: "Black" },
    ],
    price: 15.0,
  },
  {
    id: 7,
    name: "Cool Bandana",
    image: nft7,
    rarity: "Uncommon",
    traits: [
      { category: "Headwear", value: "Green Bandana" },
      { category: "Eyewear", value: "Wave Glasses" },
      { category: "Accessory", value: "Green Bowtie" },
      { category: "Background", value: "Yellow" },
    ],
    price: 1.5,
  },
  {
    id: 8,
    name: "Punk Rock",
    image: nft8,
    rarity: "Epic",
    traits: [
      { category: "Headwear", value: "Spiky Hair" },
      { category: "Eyewear", value: "Dark Shades" },
      { category: "Accessory", value: "Blue Pendant" },
      { category: "Background", value: "Teal" },
    ],
    price: 6.5,
  },
  {
    id: 9,
    name: "Royal Cockatoo",
    image: nft9,
    rarity: "Legendary",
    traits: [
      { category: "Headwear", value: "Flower Crown" },
      { category: "Accessory", value: "Black Bowtie" },
      { category: "Background", value: "Yellow" },
    ],
    price: 20.0,
  },
  {
    id: 10,
    name: "Sensei Cockatoo",
    image: nft10,
    rarity: "Epic",
    traits: [
      { category: "Headwear", value: "Straw Hat" },
      { category: "Eyewear", value: "Round Shades" },
      { category: "Clothing", value: "Yellow Robe" },
      { category: "Background", value: "Light Blue" },
    ],
    price: 7.0,
  },
];

export const allTraits: Record<TraitCategory, string[]> = {
  Headwear: [
    "Red Cap",
    "Camo Beanie",
    "Viking Helmet",
    "Pirate Hat",
    "Ninja Headband",
    "Black Beanie",
    "Green Bandana",
    "Spiky Hair",
    "Flower Crown",
    "Straw Hat",
  ],
  Eyewear: ["Wave Glasses", "Dark Shades", "Round Shades"],
  Clothing: ["Red Sweater", "Yellow Tank Top", "Solana Hoodie", "Yellow Robe"],
  Accessory: ["Blue Pendant", "Flower Lei", "Green Bowtie", "Black Bowtie"],
  Background: ["Yellow", "Beige", "Teal", "Purple", "Black", "Light Blue"],
};

export const allRarities: Rarity[] = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
