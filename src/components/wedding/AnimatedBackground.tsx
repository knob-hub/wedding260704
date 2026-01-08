import { motion } from "framer-motion";
import coupleImage from "@/assets/couple-main.jpg";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush-light via-background to-cream" />
      
      {/* Animated blurred images */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1.05, 1.15, 1],
          x: [0, 30, -20, 10, 0],
          y: [0, -20, 30, -10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={coupleImage}
          alt=""
          className="w-full h-full object-cover blur-3xl opacity-30 scale-150"
        />
      </motion.div>

      {/* Animated color overlay 1 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, hsl(350 40% 80% / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, hsl(350 40% 80% / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 50%, hsl(350 40% 80% / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, hsl(350 40% 80% / 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated color overlay 2 - gold accent */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 70% 20%, hsl(38 50% 75% / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse at 30% 80%, hsl(38 50% 75% / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse at 60% 40%, hsl(38 50% 75% / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse at 70% 20%, hsl(38 50% 75% / 0.3) 0%, transparent 40%)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated color overlay 3 - cream/warm */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 40% 60%, hsl(40 30% 90% / 0.5) 0%, transparent 45%)",
            "radial-gradient(ellipse at 60% 30%, hsl(40 30% 90% / 0.5) 0%, transparent 45%)",
            "radial-gradient(ellipse at 30% 40%, hsl(40 30% 90% / 0.5) 0%, transparent 45%)",
            "radial-gradient(ellipse at 40% 60%, hsl(40 30% 90% / 0.5) 0%, transparent 45%)",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
    </div>
  );
};

export default AnimatedBackground;
