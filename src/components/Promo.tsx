import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Принципы платформы
      </h3>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full">
          {[
            { label: "Прозрачность", desc: "Все этапы проверки материалов открыты для каждого пользователя" },
            { label: "Коллективность", desc: "Сообщество участвует в верификации и обсуждении каждой новости" },
            { label: "Нейтральность", desc: "Редакция не продвигает частные интересы — только факты и беспристрастность" },
          ].map((item) => (
            <div key={item.label} className="border border-white/30 p-6 backdrop-blur-sm">
              <p className="text-white font-bold text-xl mb-3 uppercase tracking-wide">{item.label}</p>
              <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 text-right leading-tight">
        Информация из первых рук. Проверенная сообществом.
      </p>
    </div>
  );
}