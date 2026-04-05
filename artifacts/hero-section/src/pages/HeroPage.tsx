import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeatureRow from "@/components/FeatureRow";
import CampaignBanner from "@/components/CampaignBanner";
import FlashSale from "@/components/FlashSale";
import LazMallSection from "@/components/LazMallSection";
import CategoriesSection from "@/components/CategoriesSection";

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <TopNav />
      <Header />
      <main className="max-w-[1200px] mx-auto px-2 pt-2 pb-4">
        <HeroBanner />
        <FeatureRow />
        <CampaignBanner />
        <FlashSale />
        <LazMallSection />
        <CategoriesSection />
      </main>
    </div>
  );
}
