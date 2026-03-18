import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

interface BGMPlayerProps {
  audioSrc?: string;
}

const BGMPlayer = ({ audioSrc }: BGMPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasInteracted && audioRef.current && audioSrc) {
        setHasInteracted(true);
        setShowPrompt(false);
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setShowPrompt(true));
      }
    };
    window.addEventListener("scroll", handleScroll, { once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasInteracted, audioSrc]);

  const togglePlay = () => {
    if (!audioRef.current || !audioSrc) return;
    setShowPrompt(false);
    setHasInteracted(true);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  if (!audioSrc) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "hsl(var(--glass-bg))",
            backdropFilter: "blur(12px)",
            border: "1px solid hsl(var(--glass-border))",
            color: "hsl(var(--muted-foreground))",
          }}
        >
          <Music className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      <motion.button
        onClick={togglePlay}
        className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "hsl(var(--glass-bg))",
          backdropFilter: "blur(12px)",
          border: "1px solid hsl(var(--glass-border))",
          color: "hsl(var(--text-romantic))",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div key="playing" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="relative">
              <Volume2 className="w-4 h-4" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 rounded-full"
                    style={{ background: "hsl(var(--gold))" }}
                    animate={{ height: ["3px", "6px", "3px"] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="paused" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <VolumeX className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 1.5 }}
            className="fixed top-[4.5rem] right-4 z-50 rounded-2xl px-4 py-3 max-w-[160px]"
            style={{
              background: "hsl(var(--glass-bg))",
              backdropFilter: "blur(16px)",
              border: "1px solid hsl(var(--glass-border))",
              boxShadow: "var(--glass-shadow)",
            }}
          >
            <p className="text-[10px] text-center leading-relaxed" style={{ color: "hsl(var(--text-romantic))" }}>
              스크롤하시면
              <br />
              음악이 시작됩니다 🎵
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BGMPlayer;
