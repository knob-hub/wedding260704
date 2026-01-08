import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Navigation, Car, Train } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleNaverMap = () => {
    window.open("https://map.naver.com/v5/search/그랜드웨딩홀", "_blank");
  };

  const handleKakaoMap = () => {
    window.open("https://map.kakao.com/link/search/그랜드웨딩홀", "_blank");
  };

  return (
    <section ref={ref} className="wedding-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
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
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground mb-1">그랜드 웨딩홀</p>
              <p className="text-sm text-muted-foreground">
                서울시 강남구 테헤란로 123<br />
                5층 그랜드볼룸
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            <a href="tel:02-1234-5678" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              02-1234-5678
            </a>
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-muted rounded-lg aspect-video mb-6 flex items-center justify-center overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3528977776583!2d127.0276368!3d37.4979503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee9ab0fb%3A0x3e6e798b8f5b7e36!2sGangnam%20Station!5e0!3m2!1sen!2skr!4v1704067200000!5m2!1sen!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding venue location"
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
            className="flex-1 py-3 px-4 rounded-lg bg-[#03C75A] text-white text-sm font-medium flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
          >
            <Navigation className="w-4 h-4" />
            네이버 지도
          </button>
          <button
            onClick={handleKakaoMap}
            className="flex-1 py-3 px-4 rounded-lg bg-[#FEE500] text-[#191919] text-sm font-medium flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
          >
            <Navigation className="w-4 h-4" />
            카카오맵
          </button>
        </motion.div>

        {/* Transportation Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
        >
          <div className="wedding-card">
            <div className="flex items-start gap-3">
              <Train className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm mb-1">지하철</p>
                <p className="text-sm text-muted-foreground">
                  2호선 강남역 3번 출구에서 도보 5분
                </p>
              </div>
            </div>
          </div>

          <div className="wedding-card">
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm mb-1">주차 안내</p>
                <p className="text-sm text-muted-foreground">
                  건물 지하 주차장 이용 (2시간 무료)
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
