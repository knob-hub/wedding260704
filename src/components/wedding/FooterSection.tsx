import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "희원 ♥ 유정 결혼합니다",
          text: "2026년 7월 4일 토요일 오후 2시\n더테라스 웨딩 11층",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("링크가 복사되었습니다");
      }
    } catch {
      // User cancelled
    }
  };

  return (
    <section ref={ref} className="wedding-section pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <p
            className="text-3xl mb-3 font-light tracking-widest"
            style={{
              color: "hsl(var(--text-romantic))",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Thank You
          </p>
          <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            참석해 주셔서 감사합니다
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-medium transition-all hover:scale-105"
          style={{
            background: "hsl(var(--glass-bg))",
            backdropFilter: "blur(12px)",
            border: "1px solid hsl(var(--glass-border))",
            color: "hsl(var(--text-romantic))",
          }}
        >
          <Share2 className="w-3.5 h-3.5" />
          청첩장 공유하기
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 text-[10px] tracking-widest"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          희원 ♥ 유정
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FooterSection;
