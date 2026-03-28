interface HeaderProps {
  className?: string;
  onSubmitNews?: () => void;
}

export default function Header({ className, onSubmitNews }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/bucket/d3d8ebcc-0d18-4590-8033-82d417118abb.jpeg"
          alt="Народный корреспондент"
          className="h-10 w-auto object-contain"
        />
        <nav className="flex gap-8 items-center">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О платформе
          </a>
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
