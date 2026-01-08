import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Share2 } from "lucide-react";
import { toast } from "sonner";
const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "민준 ♥ 서연 결혼합니다",
          text: "2025년 3월 15일 토요일 오후 2시\n그랜드 웨딩홀 5층",
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("링크가 복사되었습니다");
      }
    } catch (err) {
      // User cancelled sharing
    }
  };
  return <section ref={ref} className="wedding-section pb-24">
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.8
    }} className="max-w-md mx-auto text-center">
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="mb-8">
          <p className="font-cormorant text-3xl text-romantic mb-2">
            Thank You
          </p>
          <p className="text-sm text-muted-foreground">
            참석해 주셔서 감사합니다
          </p>
        </motion.div>

        <motion.button initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.4
      }} onClick={handleShare} className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
          <Share2 className="w-4 h-4" />
          청첩장 공유하기
        </motion.button>

        <motion.p initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-12 text-xs text-muted-foreground">희원 ♥ 유정</motion.p>
      </motion.div>
    </section>;
};
export default FooterSection;