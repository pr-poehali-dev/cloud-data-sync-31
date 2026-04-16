interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">День единых действий</div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О дне памяти
          </a>
          <a
            href="#quiz"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Викторина
          </a>
        </nav>
      </div>
    </header>
  );
}