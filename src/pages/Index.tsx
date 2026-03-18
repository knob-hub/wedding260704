import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import InfoSection from "@/components/wedding/InfoSection";
import { GalleryButton, GalleryOverlay } from "@/components/wedding/GallerySection";
import AccountSection from "@/components/wedding/AccountSection";
import BGMPlayer from "@/components/wedding/BGMPlayer";
import WatercolorBackground from "@/components/wedding/WatercolorBackground";

const Index = () => {
  const bgmSrc = "/bgm/wedding-music.mp3";
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <WatercolorBackground />
      <BGMPlayer audioSrc={bgmSrc} />
      <div className="relative z-10">
        <HeroSection />

        {/* Gallery button between hero and info */}
        <div className="flex justify-center -mt-16 mb-8 relative z-10">
          <GalleryButton onClick={() => setGalleryOpen(true)} />
        </div>

        <InfoSection />
        <AccountSection />
      </div>

      <AnimatePresence>
        {galleryOpen && <GalleryOverlay onClose={() => setGalleryOpen(false)} />}
      </AnimatePresence>
    </main>
  );
};

export default Index;
