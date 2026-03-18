import { motion, type Easing } from "framer-motion";
import coupleImg from "@/assets/couple-main.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => {
  return (
    <>
      {/* COVER — full-bleed photo with overlay text */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={coupleImg}
          alt="희원 & 유정"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.75) contrast(1.05)" }}
        />

        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(0 0% 0% / 0.15) 0%, transparent 40%, transparent 50%, hsl(0 0% 0% / 0.5) 100%)",
          }}
        />

        {/* Top label */}
        <motion.p
          className="absolute top-10 left-0 right-0 text-center text-[8px] tracking-[0.6em] uppercase"
          style={{ color: "hsl(0 0% 100% / 0.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease }}
        >
          Wedding Invitation
        </motion.p>

        {/* Names overlaid on photo — bottom area */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
        >
          <div className="flex items-end justify-between max-w-md mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light"
              style={{
                fontFamily: "'Cormorant Garamond', 'Gowun Batang', serif",
                color: "hsl(0 0% 100% / 0.95)",
                letterSpacing: "0.08em",
              }}
            >
              희원
            </h1>
            <h1
              className="text-4xl md:text-5xl font-light"
              style={{
                fontFamily: "'Cormorant Garamond', 'Gowun Batang', serif",
                color: "hsl(0 0% 100% / 0.95)",
                letterSpacing: "0.08em",
              }}
            >
              유정
            </h1>
          </div>

          <p
            className="text-center text-[9px] tracking-[0.4em] mt-4"
            style={{ color: "hsl(0 0% 100% / 0.5)" }}
          >
            2026. 07. 04
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-4"
            style={{ background: "linear-gradient(to bottom, hsl(0 0% 100% / 0.4), transparent)" }}
          />
        </motion.div>
      </section>

      {/* EDITORIAL PHOTO BREAK — between hero and info */}
      <section className="relative w-full" style={{ aspectRatio: "4/3" }}>
        <img
          src={gallery1}
          alt="Editorial"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.85) contrast(1.02) grayscale(10%)" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "hsl(0 0% 0% / 0.2)" }}
        >
          <motion.p
            className="text-[9px] tracking-[0.5em] uppercase"
            style={{ color: "hsl(0 0% 100% / 0.7)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Story Begins
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
