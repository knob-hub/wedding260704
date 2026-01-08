import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar } from "lucide-react";
const DateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [daysLeft, setDaysLeft] = useState(0);
  const weddingDate = new Date("2025-03-15T14:00:00");
  useEffect(() => {
    const calculateDaysLeft = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysLeft(days > 0 ? days : 0);
    };
    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);
  const calendarDays = [["일", "월", "화", "수", "목", "금", "토"], ["", "", "", "", "", "", "1"], ["2", "3", "4", "5", "6", "7", "8"], ["9", "10", "11", "12", "13", "14", "15"], ["16", "17", "18", "19", "20", "21", "22"], ["23", "24", "25", "26", "27", "28", "29"], ["30", "31", "", "", "", "", ""]];
  return <section ref={ref} className="wedding-section">
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.8
    }} className="max-w-sm mx-auto text-center">
        <h2 className="wedding-title">예식 안내</h2>

        <div className="wedding-divider" />

        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="wedding-card mb-8">
          <p className="text-lg font-light text-romantic mb-2">2026년 7월 4일</p>
          <p className="text-foreground">토요일 오후 2시</p>
        </motion.div>

        {/* Calendar */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="wedding-card mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground">2026. 07</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {calendarDays.map((week, weekIdx) => week.map((day, dayIdx) => <div key={`${weekIdx}-${dayIdx}`} className={`py-2 ${weekIdx === 0 ? "text-muted-foreground text-xs font-medium" : day === "15" ? "bg-primary text-primary-foreground rounded-full" : dayIdx === 0 ? "text-primary/80" : "text-foreground/70"}`}>
                  {day}
                </div>))}
          </div>
        </motion.div>

        {/* D-Day Counter */}
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush-light">
          <span className="text-romantic text-sm">결혼식까지</span>
          <span className="text-lg font-medium text-primary">D-{daysLeft}</span>
        </motion.div>
      </motion.div>
    </section>;
};
export default DateSection;