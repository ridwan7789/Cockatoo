import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { TokenSection } from "@/components/TokenSection";
import { NFTSection } from "@/components/NFTSection";
import { ImpactSection } from "@/components/ImpactSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StorySection />
      <TokenSection />
      <NFTSection />
      <ImpactSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
