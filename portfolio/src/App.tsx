import { useState, useRef, useEffect } from 'react';
import { content, gameImageData, albumImageData } from './modules/data.tsx';
import GameCoverArt from "./modules/GameCoverArt.tsx";
import MusicCoverArt from "./modules/MusicCoverArt.tsx";

function App() {
  const [lang, setLang] = useState<'en' | 'jp'>('en');
  const [scrollPercent, setScrollPercent] = useState(0);
  const scrollRef = useRef<HTMLDivElement | undefined>(undefined);
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const t = content[lang];
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['about-me', 'interests', 'hiking', 'globecom'];

  const handleEmail = () => {
    const user = 's2131126uo';
    const domain = 'chibatech.ac.jp';
    return `${user}@${domain}`;
  };

  useEffect(() => {
    const observerOptions = {
      root: scrollRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          setActiveSection(index);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <aside className="w-1/3 h-full p-6 border-r border-slate-100 text-black flex flex-col relative">
        <nav className="flex justify-end">
          <button
            onClick={() => setLang(lang === 'en' ? 'jp' : 'en')}
            className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold"
          >
            <span className="text-lg">
              {lang === 'en' ? '日本語' : 'English'}
            </span>
          </button>
        </nav>

        <div className="flex-1 flex flex-col justify-center space-y-4">
          <header>
            <h1 className="text-5xl font-black leading-tight tracking-tighter">
              {t.name}
            </h1>
            <p className="text-2xl text-blue-600 font-bold mt-2">{t.title}</p>
            <p className="text-xl text-slate-500">{t.tagline}</p>
          </header>

          <section>
            <h2 className="text-2xl font-extrabold tracking-tight mb-4 border-b-2 border-slate-100 pb-2">
              {lang === 'en' ? 'Licences & Degrees' : '学位・資格'}
            </h2>
            <ol className="space-y-1 list-decimal list-inside marker:text-blue-600 marker:font-bold">
              {t.licences.map((license, k) => (
                <li key={k} className="text-lg text-slate-700">
                  <span className="ml-2">{license}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <div className="w-full border-2 border-blue-600 p-5 rounded-xl bg-blue-50/30">
              <p className="text-slate-800 leading-relaxed font-medium text-lg">
                {t.about}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold tracking-tight mb-3 border-b-2 border-slate-100 pb-2">
              {lang === 'en' ? 'Get In Touch' : '連絡先'}
            </h2>
            <div className="flex flex-col space-y-1 text-slate-600">
              <div className="flex flex-col font-mono text-base">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                  Email
                </span>
                {!showEmail && (
                  <button
                    className="text-left hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setShowEmail(!showEmail)}
                  >
                    {lang === 'en' ? 'Click to reveal' : 'クリックして表示'}
                  </button>
                )}
                {showEmail && <>{handleEmail()}</>}
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

      <main className="w-2/3 px-20 h-full overflow-y-auto bg-slate-950 text-white relative scroll-smooth snap-y snap-mandatory">
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-30">
          {sections.map((sectionId, index) => (
            <button
              key={index}
              onClick={() => {
                // Find the element by ID and scroll it into view
                document
                  .getElementById(sectionId)
                  ?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                activeSection === index
                  ? 'bg-fuchsia-700 scale-125 shadow-[0_0_10px_rgba(192,38,211,0.8)]'
                  : 'bg-slate-700 hover:bg-slate-400'
              }`}
              aria-label={`Scroll to ${sectionId}`}
            />
          ))}
        </nav>

        <section
          id="about-me"
          className="w-full h-full snap-section flex flex-col justify-center"
        >
          <h1 className="flex-none text-4xl mb-4 border-b-2 border-slate-100 pb-2">
            {lang === 'en' ? 'About Me!' : '私について'}
          </h1>
          <div>{t.aboutMe}</div>
        </section>

        <section
          id="interests"
          className="w-full h-full snap-section flex flex-col justify-center"
        >
          <h1 className="text-4xl mb-4 border-b-2 border-slate-100 pb-2">
            {lang === "en" ? "Personal Favorites" : "趣味・お気に入り"}
          </h1>
          <h2 className="text-2xl">Games</h2>
          <div className="flex justify-center">
            {
              gameImageData.map(data =>
                <GameCoverArt gameID={data.imageId} id={data.id} name={data.name}/>
              )
            }
          </div>
          <h2 className="text-2xl">Albums</h2>
          <div className="flex justify-center">
            {
              albumImageData.map(data =>
                <MusicCoverArt albumID={data.imageId} id={data.id} name={data.name} artist={data.artist}/>
              )
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
