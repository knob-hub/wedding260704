import { motion, type Easing } from "framer-motion";

const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease }}
      >
        <p
          className="text-[9px] tracking-[0.5em] uppercase mb-12 font-light"
          style={{ color: "hsl(var(--foreground) / 0.35)" }}
        >
          Wedding Invitation
        </p>

        <div className="flex items-center justify-center gap-5 mb-8">
          <h1
            className="text-[28px] md:text-4xl font-light tracking-[0.15em]"
            style={{ fontFamily: "'Gowun Batang', serif", color: "hsl(var(--text-romantic))" }}
          >
            김희원
          </h1>
          <span className="w-px h-6" style={{ background: "hsl(var(--gold-light) / 0.5)" }} />
          <h1
            className="text-[28px] md:text-4xl font-light tracking-[0.15em]"
            style={{ fontFamily: "'Gowun Batang', serif", color: "hsl(var(--text-romantic))" }}
          >
            최유정
          </h1>
        </div>

        <p className="text-[11px] tracking-[0.25em] font-light" style={{ color: "hsl(var(--foreground) / 0.4)" }}>
          2026. 07. 04 SAT · PM 2:00
        </p>
        <p className="text-[10px] tracking-wider mt-1.5" style={{ color: "hsl(var(--foreground) / 0.3)" }}>
          더테라스 웨딩 11층
        </p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6"
          style={{ background: "linear-gradient(to bottom, hsl(var(--foreground) / 0.15), transparent)" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
