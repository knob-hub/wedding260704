import HeroSection from "@/components/wedding/HeroSection";
import InfoSection from "@/components/wedding/InfoSection";
import GallerySection from "@/components/wedding/GallerySection";
import AccountSection from "@/components/wedding/AccountSection";
import BGMPlayer from "@/components/wedding/BGMPlayer";

const Index = () => {
  const bgmSrc = "/bgm/wedding-music.mp3";

  return (
    <main className="min-h-screen bg-background">
      <BGMPlayer audioSrc={bgmSrc} />
      <HeroSection />
      <GallerySection />
      <InfoSection />
      <AccountSection />
    </main>
  );
};

export default Index;
