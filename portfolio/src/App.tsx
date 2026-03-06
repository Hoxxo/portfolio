import { useState, useRef } from 'react';
import { content } from './modules/data.tsx';

function App() {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const [scrollPercent, setScrollPercent] = useState(0);
  const scrollRef = useRef<HTMLDivElement | undefined>(undefined);
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const t = content[lang];
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["about-me", "interests", "hiking", "globecom"]

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // Calculate how far we've scrolled (0 to 100)
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercent(scrolled);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <aside className="w-1/3 h-full p-12 border-r border-slate-100 text-black flex flex-col relative">
        <nav className="flex justify-end">
          <button
            onClick={() => setLang(lang === "en" ? "jp" : "en")}
            className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold"
          >
            <span className="text-lg">{lang === "en" ? "日本語" : "English"}</span>
          </button>
        </nav>

        <div className="flex-1 flex flex-col justify-center space-y-4">

          <header>
            <h1 className="text-5xl font-black leading-tight tracking-tighter">{t.name}</h1>
            <p className="text-2xl text-blue-600 font-bold mt-2">{t.title}</p>
            <p className="text-xl text-slate-500">{t.tagline}</p>
          </header>

          <section>
            <h2 className="text-2xl font-extrabold tracking-tight mb-4 border-b-2 border-slate-100 pb-2">
              {lang === "en" ? "Licences & Degrees" : "学位・資格"}
            </h2>
            <ol className="space-y-1 list-decimal list-inside marker:text-blue-600 marker:font-bold">
              {t.licences.map((license, k) => (
                <li key={k} className="text-lg text-slate-700">
                  <span className="ml-2">{license}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="w-full border-2 border-blue-600 p-5 rounded-xl bg-blue-50/30">
            <p className="text-slate-800 leading-relaxed font-medium text-lg">
              {t.about}
            </p>
          </div>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight mb-3 border-b-2 border-slate-100 pb-2">
              {lang === "en" ? "Get In Touch" : "連絡先"}
            </h2>
            <div className="flex flex-col space-y-1 text-slate-600">
              <div className="flex flex-col font-mono text-base">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Email</span>
                {!showEmail && (
                  <button
                    className="text-left hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setShowEmail(!showEmail)}
                  >
                    {lang === "en" ? "Click to reveal" : "クリックして表示"}
                  </button>
                )}
                {showEmail && <>s2131126uo@chibatech.ac.jp</>}
              </div>
              <a
                href="https://github.com/Hoxxo"
                target="_blank"
                className="text-blue-600 hover:underline font-bold flex items-center"
              >
                GitHub <span className="ml-1 text-xs">↗</span>
              </a>
            </div>
          </section>
        </div>
      </aside>

      {/* RIGHT SIDE (Scrollable) */}
      <main
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-2/3 h-full overflow-y-auto bg-slate-950 text-white p-20 relative scroll-smooth"
      >
        {/* THE DYNAMIC ROADMAP LINE */}
        <div className="absolute left-10 top-0 w-[2px] h-full bg-slate-800" />
        <div
          className="absolute left-10 top-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-100 ease-out"
          style={{ height: `${scrollPercent}%` }} // This grows the line!
        />
        <div className="justify-center">
          <h1 className="text-4xl mb-4 border-b-2 border-slate-100 pb-2">
            {lang === "en" ? "About Me!" : "私について"}
          </h1>
            {t.aboutMe}
        </div>

        <div className="max-w-2xl mx-auto space-y-48 pb-64">
          {/* Your AchievementSections here */}
        </div>
      </main>
    </div>
  );
}

export default App;
