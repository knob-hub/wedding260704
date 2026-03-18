import HeroSection from "@/components/wedding/HeroSection";
import InfoSection from "@/components/wedding/InfoSection";
import AccountSection from "@/components/wedding/AccountSection";
import BGMPlayer from "@/components/wedding/BGMPlayer";

const Index = () => {
  const bgmSrc = "/bgm/wedding-music.mp3";

  return (
    <main className="min-h-screen bg-background">
      <BGMPlayer audioSrc={bgmSrc} />
      <HeroSection />
      <InfoSection />
      <AccountSection />
    </main>
  );
};

export default Index;
