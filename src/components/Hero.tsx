import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/files/70c1a4d0-58f7-4457-a6fd-c44e6adcc9de.jpg"
          alt="Городская журналистика"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-70">Гражданская журналистика</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ТВОЙ ГОЛОС —<br/>ТВОЯ НОВОСТЬ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Делитесь событиями из первых рук. Сообщество проверяет факты, редакция подтверждает — вместе мы строим прозрачную журналистику.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
            Подать новость
          </button>
          <button className="border border-white text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            Читать ленту
          </button>
        </div>
      </div>
    </div>
  );
}