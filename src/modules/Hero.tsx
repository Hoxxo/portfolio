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
      className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
    >
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />

      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          {badge}
        </span>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-tight text-slate-900">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl text-blue-600 font-bold mt-4">
          {title}
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          {tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            {ctaPrimary}
          </a>
          <a
            href="https://github.com/Hoxxo"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold border border-slate-200 hover:border-slate-400 transition-colors"
          >
            {ctaSecondary} <span className="ml-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
