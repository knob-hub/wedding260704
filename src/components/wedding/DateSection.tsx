import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const calendarDays = [
    ["일", "월", "화", "수", "목", "금", "토"],
    ["", "", "", "1", "2", "3", "4"],
    ["5", "6", "7", "8", "9", "10", "11"],
    ["12", "13", "14", "15", "16", "17", "18"],
    ["19", "20", "21", "22", "23", "24", "25"],
    ["26", "27", "28", "29", "30", "31", ""],
  ];

  return (
    <section ref={ref} className="wedding-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-sm mx-auto text-center"
      >
        <h2 className="wedding-title">예식 안내</h2>
        <div className="wedding-divider" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wedding-card mb-8"
        >
          <p className="text-lg font-light tracking-wider mb-2" style={{ color: "hsl(var(--text-romantic))" }}>
            2026년 7월 4일
          </p>
          <p className="text-foreground text-sm">토요일 오후 2시</p>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="wedding-card mb-8"
        >
          <p className="text-xs font-medium tracking-widest mb-5 uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
            2026. 07
          </p>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {calendarDays.map((week, weekIdx) =>
              week.map((day, dayIdx) => (
                <div
                  key={`${weekIdx}-${dayIdx}`}
                  className={`py-2.5 text-sm ${
                    weekIdx === 0
                      ? "text-xs font-medium tracking-wider"
                      : day === "4"
                      ? "rounded-full font-medium"
                      : ""
                  }`}
                  style={
                    weekIdx === 0
                      ? { color: "hsl(var(--muted-foreground))" }
                      : day === "4"
                      ? {
                          background: "hsl(var(--primary))",
                          color: "hsl(var(--primary-foreground))",
                        }
                      : dayIdx === 0
                      ? { color: "hsl(var(--gold))" }
                      : { color: "hsl(var(--foreground) / 0.6)" }
                  }
                >
                  {day}
                </div>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DateSection;
