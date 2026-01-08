import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import coupleImage from "@/assets/couple-main.jpg";
const CoupleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="wedding-section bg-cream">
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.8
    }} className="max-w-md mx-auto text-center">
        <h2 className="wedding-title">소중한 분들을 초대합니다</h2>
        
        <div className="wedding-divider" />

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative mb-10 overflow-hidden rounded-lg">
          <img src={coupleImage} alt="신랑 신부" className="w-full aspect-[4/5] object-cover" />
        </motion.div>

        <motion.p initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-foreground/80 leading-relaxed font-light text-sm px-4">
          서로 다른 길을 걸어온 저희 두 사람이<br />
          이제 같은 길을 함께 걸어가려 합니다.<br /><br />
          새로운 시작을 하는 날,<br />
          귀한 걸음 하시어 축복해 주시면<br />
          더없는 기쁨으로 간직하겠습니다.
        </motion.p>

        <div className="wedding-divider" />

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="space-y-4 text-sm">
          <div className="flex items-center justify-center gap-2">
            <span className="text-muted-foreground">김정석· 이미전</span>
            <span className="text-romantic">의 아들</span>
            <span className="font-medium text-foreground">희원</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-muted-foreground">최상득· 김경희</span>
            <span className="text-romantic">의 딸</span>
            <span className="font-medium text-foreground">유정</span>
          </div>
        </motion.div>
      </motion.div>
    </section>;
};
export default CoupleSection;