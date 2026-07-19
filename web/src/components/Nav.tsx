type NavProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const isDark = theme === 'dark';

  return (
    <nav className="flex items-center justify-between gap-4 px-12 py-5 border-b border-hairline">
      <div className="font-semibold text-[15px] whitespace-nowrap">Tanvi Kumar</div>
      <div className="flex gap-9 items-center whitespace-nowrap">
        <a href="#about" className="text-sm text-ink no-underline hover:text-accent transition-colors">
          About
        </a>
        <a href="#work" className="text-sm text-ink no-underline hover:text-accent transition-colors">
          Work
        </a>
        <a href="#skills" className="text-sm text-ink no-underline hover:text-accent transition-colors">
          Skills
        </a>
        <a href="#contact" className="text-sm text-ink no-underline hover:text-accent transition-colors">
          Drop me a line
        </a>
      </div>
      <button
        onClick={onToggleTheme}
        aria-pressed={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-[13px] text-ink font-sans whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <span aria-hidden="true">{isDark ? '●' : '○'}</span>
        {isDark ? 'Dark' : 'Light'}
      </button>
    </nav>
  );
}
