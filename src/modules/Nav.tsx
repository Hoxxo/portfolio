type NavProps = {
  lang: 'en' | 'jp';
  setLang: (lang: 'en' | 'jp') => void;
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

export default function Nav({ lang, setLang, navLabels, activeSection }: NavProps) {
  const links: Array<[string, string]> = [
    ['about', navLabels.about],
    ['research', navLabels.research],
    ['credentials', navLabels.credentials],
    ['favorites', navLabels.favorites],
    ['hiking', navLabels.hiking],
    ['globecom', navLabels.globecom],
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-black tracking-tighter text-lg text-slate-900"
        >
          H<span className="text-blue-600">.</span>A.F
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeSection === id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'jp' : 'en')}
            className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-700 transition-colors"
          >
            {lang === 'en' ? '日本語' : 'English'}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-500 transition-colors"
          >
            {navLabels.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
