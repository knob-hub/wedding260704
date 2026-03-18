import { motion, type Easing } from "framer-motion";
import coupleImg from "@/assets/couple-main.jpg";

const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Editorial header */}
      <motion.div
        className="pt-14 pb-8 px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease }}
      >
        <p className="magazine-caption mb-6">The Wedding of</p>
        <div className="flex items-center justify-center gap-4 mb-3">
          <h1
            className="text-3xl md:text-4xl font-light tracking-[0.18em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--charcoal))" }}
          >
            희원
          </h1>
          <span
            className="text-lg font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--silver))" }}
          >
            &
          </span>
          <h1
            className="text-3xl md:text-4xl font-light tracking-[0.18em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--charcoal))" }}
          >
            유정
          </h1>
        </div>
        <p
          className="text-[10px] tracking-[0.35em] font-light"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          2026. 07. 04 SAT
        </p>
      </motion.div>

      {/* Full-bleed photo */}
      <motion.div
        className="flex-1 px-6 pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease }}
      >
        <div className="relative h-full max-w-lg mx-auto overflow-hidden">
          <img
            src={coupleImg}
            alt="희원 & 유정"
            className="magazine-hero-img w-full h-full object-cover"
          />
          {/* Photo caption */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-right">
            <p
              className="text-[8px] tracking-[0.3em]"
              style={{ color: "hsl(0 0% 100% / 0.6)" }}
            >
              ILSAN · KOREA
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="py-6 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="text-[8px] tracking-[0.4em] uppercase" style={{ color: "hsl(var(--silver))" }}>
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-5"
          style={{ background: "linear-gradient(to bottom, hsl(var(--silver)), transparent)" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
