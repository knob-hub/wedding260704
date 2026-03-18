import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [gallery1, gallery2, gallery3];

const GalleryButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="account-btn flex items-center gap-2"
    whileTap={{ scale: 0.97 }}
  >
    <Images className="w-3 h-3" />
    Gallery
  </motion.button>
);

const GalleryOverlay = ({ onClose }: { onClose: () => void }) => {
  const [current, setCurrent] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setCurrent((p) => (p + dir + images.length) % images.length),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: "hsl(0 0% 4% / 0.96)" }}
      onClick={onClose}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const diff = touchX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <button
        className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center"
        style={{ color: "hsl(0 0% 60%)" }}
        onClick={onClose}
      >
        <X className="w-4 h-4" />
      </button>

      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center"
        style={{ color: "hsl(0 0% 50%)" }}
        onClick={(e) => { e.stopPropagation(); go(-1); }}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
          src={images[current]}
          alt={`Photo ${current + 1}`}
          className="max-w-[90%] max-h-[85vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center"
        style={{ color: "hsl(0 0% 50%)" }}
        onClick={(e) => { e.stopPropagation(); go(1); }}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <p
          className="text-[9px] tracking-[0.3em]"
          style={{ color: "hsl(0 0% 40%)" }}
        >
          {current + 1} / {images.length}
        </p>
      </div>
    </motion.div>
  );
};

export { GalleryButton, GalleryOverlay };
export default GalleryButton;
