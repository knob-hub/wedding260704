import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [gallery1, gallery2, gallery3];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    if (selected !== null) setSelected((selected + dir + images.length) % images.length);
  }, [selected]);

  return (
    <>
      <section ref={ref} className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-sm mx-auto"
        >
          <div className="flex gap-1.5 overflow-hidden rounded-2xl">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="flex-1 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelected(i)}
              >
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] flex items-center justify-center"
          style={{ background: "hsl(30 5% 5% / 0.95)" }}
          onClick={() => setSelected(null)}
          onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={e => {
            if (touchX.current === null) return;
            const diff = touchX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button
            className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "hsl(0 0% 100% / 0.1)", color: "hsl(0 0% 80%)" }}
            onClick={() => setSelected(null)}
          >
            <X className="w-4 h-4" />
          </button>

          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 70%)" }}
            onClick={e => { e.stopPropagation(); go(-1); }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <motion.img
            key={selected}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={images[selected]}
            alt=""
            className="max-w-[90%] max-h-[85vh] object-contain rounded-xl"
            onClick={e => e.stopPropagation()}
          />

          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 70%)" }}
            onClick={e => { e.stopPropagation(); go(1); }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full transition-all"
                style={{ background: i === selected ? "hsl(0 0% 85%)" : "hsl(0 0% 35%)" }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
