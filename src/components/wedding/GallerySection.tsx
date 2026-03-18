import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const images = [gallery1, gallery2, gallery3];

  const goNext = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    else if (e.key === "ArrowLeft") goPrev();
    else if (e.key === "Escape") setSelectedIndex(null);
  }, [goNext, goPrev]);

  return (
    <>
      <section ref={ref} className="py-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="max-w-lg mx-auto"
        >
          <p className="section-label">Gallery</p>
          <h2 className="wedding-title">우리의 순간</h2>
          <div className="wedding-divider" />

          {/* Staggered editorial grid */}
          <div className="grid grid-cols-12 gap-3">
            {/* First image — large, left-aligned */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-7 cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedIndex(0)}
            >
              <img
                src={images[0]}
                alt="Gallery 1"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Right column — stacked */}
            <div className="col-span-5 flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="cursor-pointer overflow-hidden rounded-3xl mt-8"
                onClick={() => setSelectedIndex(1)}
              >
                <img
                  src={images[1]}
                  alt="Gallery 2"
                  className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="cursor-pointer overflow-hidden rounded-3xl"
                onClick={() => setSelectedIndex(2)}
              >
                <img
                  src={images[2]}
                  alt="Gallery 3"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>

          {/* Image counter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-right mt-4 text-[10px] tracking-[0.3em]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {images.length} Photos
          </motion.p>
        </motion.div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center"
          style={{ background: "hsl(30 5% 5% / 0.95)", backdropFilter: "blur(30px)" }}
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "hsl(0 0% 100% / 0.1)", color: "hsl(0 0% 80%)" }}
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-5 h-5" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 75%)" }}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <motion.img
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[selectedIndex]}
            alt={`Gallery ${selectedIndex + 1}`}
            className="max-w-[90%] max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 75%)" }}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
          >
            {images.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: i === selectedIndex ? "hsl(0 0% 90%)" : "hsl(0 0% 40%)",
                  transform: i === selectedIndex ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
