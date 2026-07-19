import { Link } from 'react-router-dom';

type DetailNavProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function DetailNav({ theme, onToggleTheme }: DetailNavProps) {
  const isDark = theme === 'dark';

  return (
    <nav className="flex items-center justify-between gap-4 px-12 py-5 border-b border-hairline">
      <Link to="/" className="font-semibold text-[15px] whitespace-nowrap no-underline text-ink">
        Tanvi Kumar
      </Link>
      <Link
        to="/#work"
        className="text-sm text-ink no-underline hover:text-accent transition-colors whitespace-nowrap"
      >
        ← All work
      </Link>
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
