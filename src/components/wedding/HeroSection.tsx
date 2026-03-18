import { motion, type Easing } from "framer-motion";

const easeOutQuart: Easing = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Soft glass card background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background) / 0.2) 100%)",
            "radial-gradient(circle at 30% 70%, transparent 0%, hsl(var(--background) / 0.3) 100%)",
            "radial-gradient(circle at 70% 30%, transparent 0%, hsl(var(--background) / 0.2) 100%)",
            "radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background) / 0.2) 100%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 py-20"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0, ease: easeOutQuart }}
          className="text-xs tracking-[0.4em] uppercase mb-10 font-light"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Wedding Invitation
        </motion.p>

        <motion.div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: easeOutQuart }}
            className="text-4xl md:text-5xl font-light tracking-widest"
            style={{ color: "hsl(var(--text-romantic))", fontFamily: "'Gowun Batang', serif" }}
          >
            김희원
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.8, ease: easeOutQuart }}
            className="w-10 h-px mx-auto my-5"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold-light)), transparent)" }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: easeOutQuart }}
            className="text-4xl md:text-5xl font-light tracking-widest"
            style={{ color: "hsl(var(--text-romantic))", fontFamily: "'Gowun Batang', serif" }}
          >
            최유정
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: easeOutQuart }}
          className="text-base font-light tracking-widest"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          결혼합니다
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8, ease: easeOutQuart }}
          className="mt-14 space-y-2"
        >
          <p className="font-light text-sm" style={{ color: "hsl(var(--foreground) / 0.7)" }}>
            2026년 7월 4일 토요일 오후 2시
          </p>
          <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            더테라스 웨딩 11층
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full mx-auto flex justify-center"
            style={{ border: "1px solid hsl(var(--border))" }}
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 rounded-full mt-2"
              style={{ background: "hsl(var(--gold-light))" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
