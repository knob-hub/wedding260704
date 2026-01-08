import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import DateSection from "@/components/wedding/DateSection";
import GallerySection from "@/components/wedding/GallerySection";
import LocationSection from "@/components/wedding/LocationSection";
import AccountSection from "@/components/wedding/AccountSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CoupleSection />
      <DateSection />
      <GallerySection />
      <LocationSection />
      <AccountSection />
      <FooterSection />
    </main>
  );
};

export default Index;
