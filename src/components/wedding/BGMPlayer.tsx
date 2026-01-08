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
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked, user needs to click
          setShowPrompt(true);
        });
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
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  if (!audioSrc) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-muted-foreground">
          <Music className="w-5 h-5" />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">BGM 준비중</p>
      </div>
    );
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      
      {/* Floating player button */}
      <motion.button
        onClick={togglePlay}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-romantic hover:bg-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative"
            >
              <Volume2 className="w-5 h-5" />
              {/* Audio visualizer bars */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-romantic rounded-full"
                    animate={{
                      height: ["4px", "8px", "4px"],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <VolumeX className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Initial prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 1.5 }}
            className="fixed top-20 right-4 z-50 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg max-w-[180px]"
          >
            <p className="text-xs text-romantic text-center leading-relaxed">
              스크롤하시면<br />음악이 시작됩니다 🎵
            </p>
            <div className="absolute -top-2 right-6 w-4 h-4 bg-white/90 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BGMPlayer;
