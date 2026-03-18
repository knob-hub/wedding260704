import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import InfoSection from "@/components/wedding/InfoSection";
import { GalleryOverlay } from "@/components/wedding/GallerySection";
import AccountSection from "@/components/wedding/AccountSection";
import BGMPlayer from "@/components/wedding/BGMPlayer";

const Index = () => {
  const bgmSrc = "/bgm/wedding-music.mp3";
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      <BGMPlayer audioSrc={bgmSrc} />
      <div className="max-w-lg mx-auto overflow-hidden">
        <HeroSection />
        <InfoSection onGalleryOpen={() => setGalleryOpen(true)} />
        <AccountSection />
      </div>

      <AnimatePresence>
        {galleryOpen && <GalleryOverlay onClose={() => setGalleryOpen(false)} />}
      </AnimatePresence>
    </main>
  );
};

export default Index;
