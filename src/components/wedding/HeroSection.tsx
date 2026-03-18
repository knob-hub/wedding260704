import { motion, type Easing } from "framer-motion";
import coupleImage from "@/assets/couple-main.jpg";

const easeOutQuart: Easing = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pb-16">
      {/* Full-bleed couple image with editorial crop */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: easeOutQuart }}
      >
        <img
          src={coupleImage}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.6) 30%, transparent 60%, hsl(var(--background) / 0.2) 100%)",
          }}
        />
      </motion.div>

      {/* Content — editorial bottom-aligned */}
      <motion.div className="relative z-10 w-full max-w-lg mx-auto px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: easeOutQuart }}
          className="section-label mb-8"
          style={{ color: "hsl(var(--foreground) / 0.5)" }}
        >
          Wedding Invitation
        </motion.p>

        <div className="flex items-center justify-center gap-6 mb-6">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: easeOutQuart }}
            className="text-3xl md:text-4xl font-light tracking-[0.2em]"
            style={{ color: "hsl(var(--text-romantic))", fontFamily: "'Gowun Batang', serif" }}
          >
            김희원
          </motion.h1>

          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: easeOutQuart }}
            className="w-px h-8 block origin-center"
            style={{ background: "hsl(var(--gold-light))" }}
          />

          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: easeOutQuart }}
            className="text-3xl md:text-4xl font-light tracking-[0.2em]"
            style={{ color: "hsl(var(--text-romantic))", fontFamily: "'Gowun Batang', serif" }}
          >
            최유정
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: easeOutQuart }}
          className="space-y-1.5"
        >
          <p className="text-xs tracking-[0.3em] font-light" style={{ color: "hsl(var(--foreground) / 0.5)" }}>
            2026. 07. 04 SAT PM 2:00
          </p>
          <p className="text-[11px] tracking-wider" style={{ color: "hsl(var(--foreground) / 0.4)" }}>
            더테라스 웨딩 11층
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.span
            className="text-[9px] tracking-[0.4em] uppercase"
            style={{ color: "hsl(var(--foreground) / 0.3)" }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, hsl(var(--gold-light)), transparent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
