import { useState, useEffect } from 'react';
import { content } from './modules/data.tsx';
import Nav from './modules/Nav.tsx';
import Hero from './modules/Hero.tsx';
import About from './modules/About.tsx';
import Research from './modules/Research.tsx';
import Credentials from './modules/Credentials.tsx';
import Favorites from './modules/Favorites.tsx';
import Hiking from './modules/Hiking.tsx';
import GlobeCom from './modules/GlobeCom.tsx';
import Contact from './modules/Contact.tsx';
import Footer from './modules/Footer.tsx';

const SECTIONS = [
  'about',
  'research',
  'credentials',
  'favorites',
  'hiking',
  'globecom',
  'contact',
];

function App() {
  const [lang, setLang] = useState<'en' | 'jp'>('en');
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState('about');
  const t = content[lang];

  const email = (() => {
    const user = 's2131126uo';
    const domain = 'chibatech.ac.jp';
    return `${user}@${domain}`;
  })();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <Nav
        lang={lang}
        setLang={setLang}
        navLabels={t.nav}
        activeSection={activeSection}
      />

      <Hero
        name={t.name}
        title={t.title}
        badge={t.badge}
        tagline={t.tagline}
        skills={t.skills}
        ctaPrimary={t.ctaPrimary}
        ctaSecondary={t.ctaSecondary}
      />

      <About
        heading={t.aboutHeading}
        aboutMe={t.aboutMe}
        quote={t.favoriteQuote.quote}
        quoteBy={t.favoriteQuote.by}
      />

      <Research
        heading={t.research.heading}
        intro={t.research.intro}
        tags={t.research.tags}
      />

      <Credentials
        heading={t.credentials.heading}
        licences={t.credentials.licences}
      />

      <Favorites t={t.favorites} />

      <Hiking
        heading={t.hiking.heading}
        subtitle={t.hiking.subtitle}
        body={t.hiking.body}
        empty={t.hiking.empty}
      />

      <GlobeCom
        heading={t.globecom.heading}
        subtitle={t.globecom.subtitle}
        body={t.globecom.body}
        empty={t.globecom.empty}
      />

      <Contact
        heading={t.contact.heading}
        body={t.contact.body}
        emailLabel={t.contact.emailLabel}
        revealLabel={t.contact.revealLabel}
        showEmail={showEmail}
        onReveal={() => setShowEmail(true)}
        email={email}
      />

      <Footer note={t.footer.note} />
    </div>
  );
}

export default App;
