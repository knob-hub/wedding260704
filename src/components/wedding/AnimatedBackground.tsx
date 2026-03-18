import { motion } from "framer-motion";
import coupleImage from "@/assets/couple-main.jpg";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base warm neutral gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(30 12% 93%) 0%, hsl(30 15% 96%) 40%, hsl(35 12% 95%) 70%, hsl(30 12% 93%) 100%)",
        }}
      />

      {/* Blurred couple image - very subtle */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.05, 1.02, 1.08, 1],
          x: [0, 15, -10, 5, 0],
          y: [0, -10, 15, -5, 0],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={coupleImage}
          alt=""
          className="w-full h-full object-cover blur-3xl opacity-15 scale-150 saturate-50"
        />
      </motion.div>

      {/* Soft warm orb 1 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, hsl(30 15% 85% / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, hsl(30 15% 85% / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 50%, hsl(30 15% 85% / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, hsl(30 15% 85% / 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft warm orb 2 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 70% 20%, hsl(35 18% 80% / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse at 30% 80%, hsl(35 18% 80% / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse at 60% 40%, hsl(35 18% 80% / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse at 70% 20%, hsl(35 18% 80% / 0.3) 0%, transparent 40%)",
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      }} />

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, hsl(30 15% 96% / 0.6) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
