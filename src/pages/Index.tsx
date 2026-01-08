import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import DateSection from "@/components/wedding/DateSection";
import GallerySection from "@/components/wedding/GallerySection";
import LocationSection from "@/components/wedding/LocationSection";
import AccountSection from "@/components/wedding/AccountSection";
import FooterSection from "@/components/wedding/FooterSection";
import AnimatedBackground from "@/components/wedding/AnimatedBackground";
import BGMPlayer from "@/components/wedding/BGMPlayer";

const Index = () => {
  // BGM 파일 경로 - 업로드 후 여기에 경로를 넣어주세요
  const bgmSrc = undefined; // 예: "/bgm/wedding-music.mp3"

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <BGMPlayer audioSrc={bgmSrc} />
      
      <div className="relative z-10">
        <HeroSection />
        <CoupleSection />
        <DateSection />
        <GallerySection />
        <LocationSection />
        <AccountSection />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
