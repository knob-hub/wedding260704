import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

// 여기에 사진을 추가하세요. import 후 images 배열에 넣으면 됩니다.
// 예: import gallery4 from "@/assets/gallery-4.jpg";
// 그리고 아래 images 배열에 gallery4 추가

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const images = [gallery1, gallery2, gallery3];
  // 사진 추가 시 위 배열에 추가하세요. 예: [gallery1, gallery2, gallery3, gallery4, gallery5, ...]

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setSelectedIndex(null);
    },
    [goNext, goPrev]
  );

  return (
    <>
      <section ref={ref} className="wedding-section bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <h2 className="wedding-title">갤러리</h2>

          <div className="wedding-divider" />

          <div className="grid grid-cols-2 gap-3">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className={`cursor-pointer overflow-hidden rounded-lg ${
                  idx === 0 ? "col-span-2" : ""
                }`}
                onClick={() => setSelectedIndex(idx)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${
                    idx === 0 ? "aspect-video" : "aspect-square"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox with swipe */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <motion.img
            key={selectedIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            src={images[selectedIndex]}
            alt={`Gallery ${selectedIndex + 1}`}
            className="max-w-[90%] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
