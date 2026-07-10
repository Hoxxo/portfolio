import type { ReactNode } from 'react';

type HeroProps = {
  name: ReactNode;
  title: string;
  badge: string;
  tagline: string;
  skills: string[];
  ctaPrimary: string;
  ctaSecondary: string;
};

export default function Hero({
  name,
  title,
  badge,
  tagline,
  skills,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-b from-mauve/10 via-base to-base"
    >
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_1px_1px,var(--ctp-overlay0)_1px,transparent_0)] [background-size:32px_32px] opacity-20" />

      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mauve/15 text-mauve text-sm font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-mauve animate-pulse" />
          {badge}
        </span>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-tight text-text">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl text-mauve font-bold mt-4">
          {title}
        </p>
        <p className="text-lg text-subtext1 max-w-2xl mx-auto mt-4 leading-relaxed">
          {tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full border border-surface1 bg-mantle text-sm font-semibold text-text shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-mauve text-base rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-mauve/20"
          >
            {ctaPrimary}
          </a>
          <a
            href="https://github.com/Hoxxo"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-base text-text rounded-full font-bold border border-surface1 hover:border-overlay0 transition-colors"
          >
            {ctaSecondary} <span className="ml-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
