import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: -20,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 100, Math.cos(petal.id) * 50, 0],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-60"
          >
            <path
              d="M12 2C12 2 14 6 14 10C14 14 12 18 12 18C12 18 10 14 10 10C10 6 12 2 12 2Z"
              fill="hsl(350 40% 80%)"
            />
            <path
              d="M12 6C12 6 16 8 18 12C20 16 18 20 18 20C18 20 14 18 12 14C10 10 12 6 12 6Z"
              fill="hsl(350 35% 75%)"
            />
            <path
              d="M12 6C12 6 8 8 6 12C4 16 6 20 6 20C6 20 10 18 12 14C14 10 12 6 12 6Z"
              fill="hsl(350 45% 85%)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;
