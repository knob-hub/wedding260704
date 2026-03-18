import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Navigation, Car, Train } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleNaverMap = () => {
    window.open("https://map.naver.com/v5/search/경기 고양시 일산동구 강석로 9", "_blank");
  };
  const handleKakaoMap = () => {
    window.open("https://map.kakao.com/link/search/경기 고양시 일산동구 강석로 9", "_blank");
  };

  return (
    <section ref={ref} className="wedding-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto"
      >
        <h2 className="wedding-title">오시는 길</h2>
        <div className="wedding-divider" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wedding-card mb-6"
        >
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
            <div>
              <p className="font-medium text-foreground text-sm mb-1">더테라스 웨딩</p>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                경기 고양시 일산동구 강석로 9 11층
                <br />
                5층 그랜드볼룸
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
            <a
              href="tel:031-905-1001"
              className="text-xs transition-colors hover:underline"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              031-905-1001
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl aspect-video mb-6 overflow-hidden"
          style={{ boxShadow: "var(--glass-shadow)" }}
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
        </motion.div>

        {/* Map Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-3 mb-8"
        >
          <button
            onClick={handleNaverMap}
            className="flex-1 py-3 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            style={{
              background: "hsl(var(--glass-bg))",
              backdropFilter: "blur(12px)",
              border: "1px solid hsl(var(--glass-border))",
              color: "hsl(var(--foreground))",
            }}
          >
            <Navigation className="w-3.5 h-3.5" />
            네이버 지도
          </button>
          <button
            onClick={handleKakaoMap}
            className="flex-1 py-3 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            style={{
              background: "hsl(var(--glass-bg))",
              backdropFilter: "blur(12px)",
              border: "1px solid hsl(var(--glass-border))",
              color: "hsl(var(--foreground))",
            }}
          >
            <Navigation className="w-3.5 h-3.5" />
            카카오맵
          </button>
        </motion.div>

        {/* Transportation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-3"
        >
          <div className="wedding-card">
            <div className="flex items-start gap-3">
              <Train className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
              <div>
                <p className="font-medium text-foreground text-xs mb-1">지하철</p>
                <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                  3호선 백석역 5,6번 출구에서 도보 5분
                </p>
              </div>
            </div>
          </div>

          <div className="wedding-card">
            <div className="flex items-start gap-3">
              <Car className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} />
              <div>
                <p className="font-medium text-foreground text-xs mb-1">주차 안내</p>
                <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                  건물 주차장 이용 (2시간 무료)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
