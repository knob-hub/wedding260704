import { motion } from "framer-motion";
const HeroSection = () => {
  return <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-sm tracking-[0.3em] text-muted-foreground mb-8 font-light">
          WEDDING INVITATION
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="mb-8">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light tracking-wide text-romantic">김희원</h1>
          <motion.div initial={{
          scaleX: 0
        }} animate={{
          scaleX: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="w-12 h-px bg-gold-light mx-auto my-4" />
          <h1 className="font-cormorant text-5xl md:text-6xl font-light tracking-wide text-romantic">최유정</h1>
        </motion.div>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1
      }} className="text-lg text-muted-foreground font-light tracking-wide">
          결혼합니다
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.2
      }} className="mt-12 space-y-2">
          <p className="text-foreground/80 font-light">2026년 7월 4일 토요일 오후 2시</p>
          <p className="text-muted-foreground text-sm">더테라스 웨딩 11층</p>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.5
      }} className="mt-16">
          <div className="w-6 h-10 border border-muted-foreground/30 rounded-full mx-auto flex justify-center">
            <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;