import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation, Phone, Train, Car } from "lucide-react";
import { GalleryButton } from "@/components/wedding/GallerySection";

interface InfoSectionProps {
  onGalleryOpen?: () => void;
}

const InfoSection = ({ onGalleryOpen }: InfoSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const calendarDays = [
    ["일", "월", "화", "수", "목", "금", "토"],
    ["", "", "", "1", "2", "3", "4"],
    ["5", "6", "7", "8", "9", "10", "11"],
    ["12", "13", "14", "15", "16", "17", "18"],
    ["19", "20", "21", "22", "23", "24", "25"],
    ["26", "27", "28", "29", "30", "31", ""],
  ];

  const handleNaverMap = () => {
    window.open("https://map.naver.com/v5/search/경기 고양시 일산동구 강석로 9", "_blank");
  };
  const handleKakaoMap = () => {
    window.open("https://map.kakao.com/link/search/경기 고양시 일산동구 강석로 9", "_blank");
  };

  return (
    <section ref={ref} className="magazine-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-sm mx-auto"
      >
        {/* Invitation text */}
        <p
          className="text-center text-sm leading-[2.4] font-light mb-16"
          style={{ color: "hsl(var(--charcoal-light))", fontFamily: "'Gowun Batang', serif" }}
        >
          서로 다른 길을 걸어온 두 사람이
          <br />
          이제 같은 길을 함께 걸어가려 합니다.
          <br />
          귀한 걸음으로 축복해 주세요.
        </p>

        {/* Gallery button */}
        {onGalleryOpen && (
          <div className="flex justify-center mb-16">
            <GalleryButton onClick={onGalleryOpen} />
          </div>
        )}

        {/* Divider */}
        <div className="magazine-divider" />

        {/* Calendar */}
        <div className="mb-16">
          <p className="section-label mb-8">July 2026</p>
          <div className="max-w-[260px] mx-auto">
            <div className="grid grid-cols-7 gap-0 text-center">
              {calendarDays.map((week, weekIdx) =>
                week.map((day, dayIdx) => {
                  const isHeader = weekIdx === 0;
                  const isWeddingDay = day === "4" && weekIdx > 0;
                  const isSunday = dayIdx === 0 && !isHeader;

                  return (
                    <div
                      key={`${weekIdx}-${dayIdx}`}
                      className="py-2.5 text-[11px] relative"
                      style={
                        isHeader
                          ? { color: "hsl(var(--silver))", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase" as const }
                          : isWeddingDay
                          ? { color: "hsl(var(--primary-foreground))", fontWeight: 500 }
                          : isSunday
                          ? { color: "hsl(var(--charcoal-light))" }
                          : { color: "hsl(var(--muted-foreground))" }
                      }
                    >
                      {isWeddingDay && (
                        <span
                          className="absolute inset-0 m-auto w-7 h-7 rounded-full"
                          style={{ background: "hsl(var(--charcoal))" }}
                        />
                      )}
                      <span className="relative z-10">{day}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <p
            className="text-center text-[10px] tracking-[0.2em] mt-6 font-light"
            style={{ color: "hsl(var(--charcoal-light))", fontFamily: "'Gowun Batang', serif" }}
          >
            토요일 오후 두 시
          </p>
        </div>

        {/* Divider */}
        <div className="magazine-divider" />

        {/* Location */}
        <div className="text-center mb-8">
          <p className="section-label mb-6">Location</p>
          <p
            className="text-base tracking-[0.15em] mb-1.5"
            style={{ fontFamily: "'Gowun Batang', serif", color: "hsl(var(--foreground))" }}
          >
            더테라스 웨딩
          </p>
          <p className="text-[11px] mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
            경기 고양시 일산동구 강석로 9 · 11층
          </p>
          <a
            href="tel:031-905-1001"
            className="text-[10px] underline-offset-2 hover:underline"
            style={{ color: "hsl(var(--silver))" }}
          >
            <Phone className="w-2.5 h-2.5 inline mr-1" />
            031-905-1001
          </a>
        </div>

        {/* Map */}
        <div
          className="aspect-[16/10] mb-3 overflow-hidden"
          style={{ border: "1px solid hsl(var(--border))" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.5!2d126.7685!3d37.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rK96riwIOqzoOyWkeyLnCDsnbzsgrDrj5nqtawg6rCV7ISd66GcIDk!5e0!3m2!1sko!2skr!4v1704067200000!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="더테라스 웨딩 위치"
          />
        </div>

        {/* Map buttons */}
        <div className="flex gap-2 mb-12">
          <button
            onClick={handleNaverMap}
            className="flex-1 py-2.5 text-[9px] tracking-[0.15em] flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
            style={{
              border: "1px solid hsl(var(--divider))",
              color: "hsl(var(--charcoal-light))",
            }}
          >
            <Navigation className="w-2.5 h-2.5" />
            네이버 지도
          </button>
          <button
            onClick={handleKakaoMap}
            className="flex-1 py-2.5 text-[9px] tracking-[0.15em] flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
            style={{
              border: "1px solid hsl(var(--divider))",
              color: "hsl(var(--charcoal-light))",
            }}
          >
            <Navigation className="w-2.5 h-2.5" />
            카카오맵
          </button>
        </div>

        {/* Transportation */}
        <div className="space-y-3 text-[11px]">
          <div className="flex items-start gap-3">
            <Train className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--silver))" }} />
            <p style={{ color: "hsl(var(--muted-foreground))" }}>3호선 백석역 5,6번 출구에서 도보 5분</p>
          </div>
          <div className="flex items-start gap-3">
            <Car className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--silver))" }} />
            <p style={{ color: "hsl(var(--muted-foreground))" }}>건물 주차장 이용 (2시간 무료)</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InfoSection;
