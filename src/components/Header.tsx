interface HeaderProps {
  className?: string;
  onSubmitNews?: () => void;
  onAbout?: () => void;
}

export default function Header({ className, onSubmitNews, onAbout }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 ${className ?? ""}`}>
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/10 px-6 py-1.5 text-center">
        <p className="text-white/70 text-[10px] uppercase tracking-widest">
          РИА «Территория права» «Н» &nbsp;·&nbsp; Свидетельство о регистрации СМИ: ЭЛ ФС 77-76079
        </p>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <img
          src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/bucket/d3d8ebcc-0d18-4590-8033-82d417118abb.jpeg"
          alt="Народный корреспондент"
          className="h-10 w-auto object-contain"
        />
        <nav className="flex gap-8 items-center">
          <button
            onClick={onAbout}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm cursor-pointer"
          >
            О проекте
          </button>
          <button
            onClick={onSubmitNews}
            className="bg-brand text-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-brand-light transition-colors duration-300 cursor-pointer"
          >
            Подать новость
          </button>
        </nav>
      </div>
    </header>

  );
}