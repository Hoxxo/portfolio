type NavProps = {
  lang: 'en' | 'jp';
  setLang: (lang: 'en' | 'jp') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  navLabels: {
    about: string;
    research: string;
    credentials: string;
    favorites: string;
    hiking: string;
    globecom: string;
    contact: string;
  };
  activeSection: string;
};

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav({
  lang,
  setLang,
  theme,
  setTheme,
  navLabels,
  activeSection,
}: NavProps) {
  const links: Array<[string, string]> = [
    ['about', navLabels.about],
    ['research', navLabels.research],
    ['credentials', navLabels.credentials],
    ['favorites', navLabels.favorites],
    ['hiking', navLabels.hiking],
    ['globecom', navLabels.globecom],
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-base/80 border-b border-surface0">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-black tracking-tighter text-lg text-text">
          H<span className="text-mauve">.</span>A.F
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeSection === id
                  ? 'text-mauve bg-mauve/10'
                  : 'text-subtext0 hover:text-text'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-surface0 text-text hover:bg-surface1 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={() => setLang(lang === 'en' ? 'jp' : 'en')}
            className="px-4 py-2 bg-surface0 text-text rounded-full text-sm font-bold hover:bg-surface1 transition-colors"
          >
            {lang === 'en' ? '日本語' : 'English'}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-block px-4 py-2 bg-mauve text-base rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            {navLabels.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
