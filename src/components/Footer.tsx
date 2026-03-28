export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-brand-dark py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Платформа</h3>
                <a
                  href="#news"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Лента новостей
                </a>
                <a
                  href="#map"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Карта событий
                </a>
                <a
                  href="#factcheck"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Фактчекинг
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Редакция</h3>
                <a
                  href="#rules"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Правила публикации
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О проекте
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Категории</h3>
                <a href="#ecology" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Экология</a>
                <a href="#housing" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">ЖКХ</a>
                <a href="#incidents" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Происшествия</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4 sm:mt-6 border-t border-white/10 pt-6">
              <img
                src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/bucket/d3d8ebcc-0d18-4590-8033-82d417118abb.jpeg"
                alt="Народный корреспондент"
                className="h-32 sm:h-44 lg:h-56 w-auto object-contain brightness-0 invert opacity-90"
              />
              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 pt-2 border-t border-white/10">
                <p className="text-white/50 text-xs text-center sm:text-left">
                  Проект создан на медиаплатформе <span className="text-white/80 font-medium">РИА «ТЕРРИТОРИЯ ПРАВА» «Н»</span>
                </p>
                <p className="text-white/40 text-xs text-center sm:text-right">
                  Свидетельство СМИ: ЭЛ ФС 77-76079 · {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}