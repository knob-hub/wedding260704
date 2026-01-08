import { motion, type Easing } from "framer-motion";

const easeOutQuart: Easing = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background) / 0.3) 100%)",
            "radial-gradient(circle at 30% 70%, transparent 0%, hsl(var(--background) / 0.4) 100%)",
            "radial-gradient(circle at 70% 30%, transparent 0%, hsl(var(--background) / 0.3) 100%)",
            "radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background) / 0.3) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 py-20"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0, ease: easeOutQuart }}
          className="text-sm tracking-[0.3em] text-muted-foreground mb-8 font-light"
        >
          WEDDING INVITATION
        </motion.p>

        <motion.div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: easeOutQuart }}
            className="font-cormorant text-5xl md:text-6xl font-light tracking-wide text-romantic"
          >
            김희원
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: easeOutQuart }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-4"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: easeOutQuart }}
            className="font-cormorant text-5xl md:text-6xl font-light tracking-wide text-romantic"
          >
            최유정
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6, ease: easeOutQuart }}
          className="text-lg text-muted-foreground font-light tracking-wide"
        >
          결혼합니다
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: easeOutQuart }}
          className="mt-12 space-y-2"
        >
          <motion.p
            animate={{
              textShadow: [
                "0 0 0px hsl(var(--gold))",
                "0 0 10px hsl(var(--gold) / 0.3)",
                "0 0 0px hsl(var(--gold))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-foreground/80 font-light"
          >
            2026년 7월 4일 토요일 오후 2시
          </motion.p>
          <p className="text-muted-foreground text-sm">더테라스 웨딩 11층</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px hsl(var(--gold) / 0)",
                "0 0 15px hsl(var(--gold) / 0.3)",
                "0 0 0px hsl(var(--gold) / 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-muted-foreground/30 rounded-full mx-auto flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gold/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
